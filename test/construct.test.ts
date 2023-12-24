import { App, Duration, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Namer } from 'multi-convention-namer';
import { RedisQueueDepthMetricPublisher, RedisQueueDepthMetricPublisherProps } from '../src/construct';

let app: App;
let stack: Stack;

beforeEach(() => {
  app = new App();
  stack = new Stack(app, 'test');
});

let template: Template;
const defaultRedisQueueDepthMetricPublisherProps: RedisQueueDepthMetricPublisherProps = {
  cwNamespace: 'example',
  cloudwatchLogsRetention: RetentionDays.TWO_WEEKS,
  publishFrequency: Duration.seconds(5),
  queueNames: ['fakeQueue', 'fakeQueue2'],
  redisAddr: 'fakeRedisAddr',
  redisPort: '123456',
  redisSecretArn: 'fakeRedisSecretArn',
  redisSecretKeyArn: 'fakeRedisSecretKeyArn',
  redisSecretPasswordPath: 'fakeRedisSecretPasswordPath',
  redisSecretUsernamePath: 'fakeRedisSecretUsernamePath',
};
let redisQueueDepthMetricPublisher: RedisQueueDepthMetricPublisher;

function createRedisQueueDepthMetricPublisher(id: string, props?: RedisQueueDepthMetricPublisherProps) {
  redisQueueDepthMetricPublisher = new RedisQueueDepthMetricPublisher(
    stack,
    new Namer([id]),
    props as RedisQueueDepthMetricPublisherProps,
  );
  template = Template.fromStack(stack);
}

describe.skip('RedisQueueDepthMetricPublisher', () => {
  it('creates resources', () => {
    createRedisQueueDepthMetricPublisher('defaultProps', defaultRedisQueueDepthMetricPublisherProps);
    template.resourceCountIs('AWS::Lambda::Function', 2); // One
    expect(redisQueueDepthMetricPublisher.publishFrequency).toEqual(1);
    expect(redisQueueDepthMetricPublisher.regions).toEqual(['us-east-1']);
  });
  it('creates resources with default props', () => {
    createRedisQueueDepthMetricPublisher('noProps');
    template.resourceCountIs('AWS::Lambda::Function', 2);
    expect(redisQueueDepthMetricPublisher.publishFrequency).toEqual(1);
    expect(redisQueueDepthMetricPublisher.regions).toEqual(['us-east-1']);
  });
});
