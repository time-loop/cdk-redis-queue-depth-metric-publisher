import * as awsLambda from 'aws-lambda';


import { getSecrets, getRedisConnection, getQueueDepth, publishMetrics } from './methods';


export interface Result {
  region: string;
  vpcId: string;
  count: number;
}


export const handler = async () => {
  try {
    const host = process.env.REDIS_ADDR;
    if (!host) {
      throw new Error('REDIS_ADDR environment variable not set');
    }

    const portStr = process.env.REDIS_PORT;
    if (!portStr) {
      throw new Error('REDIS_PORT environment variable not set');
    }
    const port = parseInt(portStr, 10);
    if (isNaN(port)) {
      throw new Error('REDIS_PORT environment variable does not parseInt');
    }

    // parse queues
    const queuesBlob = process.env.QUEUES;
    if (!queuesBlob) {
      throw new Error('QUEUES environment variable not set');
    }
    const queues: string[] = JSON.parse(queuesBlob);

    // get username/password
    const redisSecretArn = process.env.REDIS_SECRET_ARN;
    if (!redisSecretArn) {
      throw new Error('REDIS_SECRET_ARN environment variable not set');
    }

    const redisSecretPasswordPath = process.env.REDIS_SECRET_PASSWORD_PATH;
    if (!redisSecretPasswordPath) {
      throw new Error('REDIS_SECRET_PASSWORD_PATH environment variable not set');
    }

    const redisSecretUsernamePath = process.env.REDIS_SECRET_USERNAME_PATH;
    if (!redisSecretUsernamePath) {
      throw new Error('REDIS_SECRET_USERNAME_PATH environment variable not set');
    }

    const { username, password } = await getSecrets({redisSecretArn, redisSecretPasswordPath, redisSecretUsernamePath });

    // connect to redis instance, note this waits until the connection is 'ready'.
    const redisConnection = await getRedisConnection({
      connectionName: 'queueDepthMetricPublisher',
      host,
      port,
      username,
      password,
      tls: {}, // always use tls, but be easy about it.
    });

    // capture the values for the queues
    const results = await Promise.all(queues.map(async(queueName) => {
      let depth = await getQueueDepth({redisConnection, queueName});
      if(!depth) {
        console.error(`Error fetching xlen for ${queueName}`);
        depth = -1;
      }
      return {queueName, depth};
    }));

    if(results === undefined) {
      throw new Error('Error fetching ALL queue depths');
    }

    // publish the metrics
    publishMetrics(results);


  } catch (error) {
    console.error('Error publishing metric data', error);
    throw error;
  }
};
