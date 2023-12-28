import { MetricsOptions } from '@aws-lambda-powertools/metrics/lib/types';
import { getSecret } from '@aws-lambda-powertools/parameters/secrets';
import { Redis } from 'ioredis';
import { getSecrets, getRedisConnection, getQueueDepth, publishMetrics } from '../src/methods';

let publishStoredMetricsMock = jest.fn();
let addMetricMock = jest.fn();

jest.mock('ioredis', () => {
  return {
    __esModule: true,
    Redis: jest.fn().mockImplementation(() => {
      return { status: 'ready', llen: jest.fn().mockReturnValue(10) };
    }),
  };
});

jest.mock('@aws-lambda-powertools/metrics', () => {
  return {
    __esModule: true,
    Metrics: jest.fn().mockImplementation(() => {
      return { publishStoredMetrics: publishStoredMetricsMock, addMetric: addMetricMock };
    }),
    MetricUnits: {
      Count: 'Count',
    },
  };
});

jest.mock('@aws-lambda-powertools/parameters/secrets', () => {
  return {
    __esModule: true,
    getSecret: jest.fn().mockReturnValue({ username: 'testUsername', password: 'testPassword' }),
  };
});

describe('getSecrets', () => {
  it('should return secrets', async () => {
    // Arrange
    const props = {
      redisSecretArn: 'testArn',
      redisSecretPasswordPath: 'password',
      redisSecretUsernamePath: 'username',
    };

    // Act
    const result = await getSecrets(props);

    // Assert
    expect(result).toEqual({ username: 'testUsername', password: 'testPassword' });
    expect(getSecret).toHaveBeenCalled();
  });
});

describe('getRedisConnection', () => {
  it('should return a Redis connection', async () => {
    // Arrange
    const props = {
      host: 'localhost',
      port: 6379,
    };

    // Act
    const result = await getRedisConnection(props);

    // Assert
    expect(result).toBeTruthy();
  });
});

describe('getQueueDepth', () => {
  it('should return queue depth', async () => {
    // Arrange
    const props = {
      redisConnection: new Redis(),
      queueName: 'testQueue',
    };

    // Act
    const result = await getQueueDepth(props);

    // Assert
    expect(result).toEqual(10);
  });
});

describe('publishMetrics', () => {
  it('should publish metrics', async () => {
    // Arrange
    const payload = [
      {
        queueName: 'testQueue',
        depth: 10,
      },
    ];
    const options: MetricsOptions = {};

    // Act
    await publishMetrics(payload, options);

    // Assert
    expect(addMetricMock).toHaveBeenCalledWith('queue_depth:testQueue', 'Count', 10);
    expect(publishStoredMetricsMock).toHaveBeenCalledWith();
  });
});
