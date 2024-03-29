// https://docs.powertools.aws.dev/lambda/typescript/latest/utilities/parameters/#fetching-secrets
import { Metrics, MetricUnits } from '@aws-lambda-powertools/metrics';
import { MetricsOptions } from '@aws-lambda-powertools/metrics/lib/types';
import { getSecret } from '@aws-lambda-powertools/parameters/secrets';

// https://docs.powertools.aws.dev/lambda/typescript/latest/core/metrics/#usage

import { Redis, RedisOptions } from 'ioredis';

export interface GetSecretsProps {
  redisSecretArn: string;
  redisSecretPasswordPath: string;
  redisSecretUsernamePath: string;
}
export interface GetSecretsResponse {
  username: string;
  password: string;
}
export async function getSecrets(props: GetSecretsProps): Promise<GetSecretsResponse> {
  const secret = await getSecret(props.redisSecretArn, { transform: 'json' });
  if (!secret) {
    throw new Error('Secret not found');
  }

  return {
    username: secret[props.redisSecretUsernamePath as keyof typeof secret],
    password: secret[props.redisSecretPasswordPath as keyof typeof secret],
  };
}

export interface GetRedisConnectionProps extends RedisOptions {
  /**
   * How long to wait for the redis connection to be ready.
   * @default 1000
   */
  readonly maxWaitForReadyMs?: number;
}

/** Connect to the redis instance and wait until it is 'ready'.
 *
 * @param props
 * @returns a RedisIO connection
 * @throws Error if the connection is not ready after the specified timeout.
 *
 * @example
 * const redis = await getRedisConnection({
 *   host: 'redis.example.com',
 *   port: 6379,
 *   username: 'XXXXXXXX',
 *   password: 'XXXXXXXX',
 * }
 */
export async function getRedisConnection(props: GetRedisConnectionProps): Promise<Redis> {
  const redisConnection = new Redis(props);

  // Wait until it actually connects, or throw.

  const timeout = Date.now() + (props.maxWaitForReadyMs ?? 5000);
  while (redisConnection.status !== 'ready') {
    if (Date.now() > timeout) {
      throw new Error(`Timeout: Redis connection is ${redisConnection.status}, not 'ready'`);
    }
    console.debug(`Redis connection is ${redisConnection.status}, waiting...`);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  return redisConnection;
}

export interface GetQueueDepthProps {
  redisConnection: Redis;
  queueName: string;
}

export async function getQueueDepth(props: GetQueueDepthProps): Promise<number> {
  console.debug(`Getting queue depth for ${props.queueName}`);
  return props.redisConnection.llen(props.queueName);
}

export interface PublishMetricsProps {}
export interface PublishMetricsPayload {
  queueName: string;
  depth: number;
}
export async function publishMetrics(payload: PublishMetricsPayload[], options?: MetricsOptions): Promise<void> {
  const metrics = new Metrics(options);
  payload.forEach((p) => {
    metrics.addMetric(`queue_depth:${p.queueName}`, MetricUnits.Count, p.depth);
  });
  metrics.publishStoredMetrics();
}

// async function localTest() {
//   const conn = await getRedisConnection({
//     host: 'localhost',
//   });
//   const depth = await getQueueDepth({
//     redisConnection: conn,
//     queueName: 'NOTIFQUEUE:NOTIFQUEUE',
//   });

//   console.log({ depth });
// }

// localTest();
