[![codecov](https://codecov.io/gh/time-loop/cdk-redis-queue-depth-metric-publisher/graph/badge.svg?token=ks9w215OJm)](https://codecov.io/gh/time-loop/cdk-redis-queue-depth-metric-publisher)

# RedisQueueDepthMetricPublisher
A construct that creates an AWS Lambda function to publish
queue depths from a redis instance

## Usage
To use the `RedisQueueDepthMetricPublisher` construct, simply import it into your AWS CDK stack and create a new instance of the construct:

``` ts
import { Stack } from 'aws-cdk-lib';
import { RedisQueueDepthMetricPublisher } from './cdk-redis-queue-depth-metric-publisher';

let stack: Stack;

new RedisQueueDepthMetricPublisher(stack, 'RedisQueueDepthMetricPublisher', {
  cwNamespace: 'example',
  cloudwatchLogsRetention: RetentionDays.THREE_MONTHS,
  publishFrequency: Duration.minutes(5),
  queues: ['fakeQueue', 'fakeQueue2'],
  redisAddr: 'fakeRedisAddr',
  // redisPort: '123456', // Optional
  redisSecretArn: 'fakeRedisSecretArn',
  redisSecretKeyArn: 'fakeRedisSecretKeyArn',
  // redisSecretPasswordPath: 'fakeRedisSecretPasswordPath',
  // redisSecretUsernamePath: 'fakeRedisSecretUsernamePath',
});
```

This will create a new AWS Lambda function that publishes queue depth metrics to CloudWatch every 5
minutes. It pulls the information from the `fakeRedisAddr` redis instance on the default port.
It will fetch login credentials from `redisSecretArn`, log into the redis instance and query
the two queues `['fakeQueue', 'fakeQueue2']`, then publish the info to the `cwNamespace` with
metric names that are identical to the queue names.
NOTE: no mapping is currently supported for the queue names.

## API
`RedisQueueDepthMetricPublisher(scope: Construct, id: string, props: RedisQueueDepthMetricPublisherProps)`

Creates a new instance of the `RedisQueueDepthMetricPublisher` construct.

### Parameters
- `scope` - The parent construct.
- `id` - The ID of the construct.
- `props` - The properties of the construct.

WRITEME FROM HERE DOWN

### Properties
- `publishFrequency` - The time interval (in minutes) that the Lambda function will be triggered to publish metrics to CloudWatch.
- `regions` - The list of AWS regions to publish ENI usage metrics for.
- `handler` - The AWS Lambda function that publishes ENI usage metrics to CloudWatch.
- `rule` - The CloudWatch Events rule that triggers the Lambda function to publish metrics to CloudWatch.
- `cwNamespace` - The CloudWatch namespace to publish metrics to.

## License
This library is licensed under the Apache 2.0 License. See the LICENSE file.
