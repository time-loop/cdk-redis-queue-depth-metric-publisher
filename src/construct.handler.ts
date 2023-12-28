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

    const queuesBlob = process.env.QUEUE_NAMES;
    if (!queuesBlob) {
      throw new Error('QUEUE_NAMES environment variable not set');
    }
    const queueNames: string[] = JSON.parse(queuesBlob);

    const redisSecretArn = process.env.REDIS_SECRET_ARN;

    const redisSecretPasswordPath = process.env.REDIS_SECRET_PASSWORD_PATH;
    if (!redisSecretPasswordPath) {
      throw new Error('REDIS_SECRET_PASSWORD_PATH environment variable not set');
    }

    const redisSecretUsernamePath = process.env.REDIS_SECRET_USERNAME_PATH;
    if (!redisSecretUsernamePath) {
      throw new Error('REDIS_SECRET_USERNAME_PATH environment variable not set');
    }

    const cwService = process.env.CW_SERVICE;
    if (!cwService) {
      throw new Error('CW_SERVICE environment variable not set');
    }

    const cwNamespace = process.env.CW_NAMESPACE;
    if (!cwNamespace) {
      throw new Error('CW_NAMESPACE environment variable not set');
    }

    console.debug(`Connecting to redis at ${host}:${port}`);

    const connectionOptions = {
      connectionName: 'queueDepthMetricPublisher',
      host,
      port,
    } as any;

    if (redisSecretArn) {
      const { username, password } = await getSecrets({
        redisSecretArn,
        redisSecretPasswordPath,
        redisSecretUsernamePath,
      });
      connectionOptions.username = username;
      connectionOptions.password = password;
    }

    // connect to redis instance, note this waits until the connection is 'ready'.
    const redisConnection = await getRedisConnection(connectionOptions);

    // capture the depth of all queues
    const results = await Promise.all(
      queueNames.map(async (queueName) => {
        try {
          let depth = await getQueueDepth({ redisConnection, queueName });
          return { queueName, depth };
        } catch (error) {
          console.error(`Error fetching queue depth for ${queueName}`, error);
        }
        return { queueName, depth: -1 };
      }),
    );

    if (results === undefined) {
      throw new Error('Error fetching ALL queue depths');
    }

    await publishMetrics(results, {
      namespace: cwNamespace,
      serviceName: cwService,
    });
  } catch (error) {
    console.error('Error publishing metric data', error);
    throw error;
  }
};
