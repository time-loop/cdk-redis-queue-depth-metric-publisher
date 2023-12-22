import { Duration } from 'aws-cdk-lib';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';
import { Namer } from 'multi-convention-namer';

export interface RedisQueueDepthMetricPublisherProps {
  /**
   * How long to retain logs published to CloudWatch logs.
   * @default aws_logs.RetentionDays.THREE_MONTHS
   */
  readonly cloudwatchLogsRetention?: RetentionDays;
  /**
   * The CloudWatch namespace to publish metrics to.
   * @default 'RedisQueueDepth'
   */
  readonly cwNamespace?: string;
  /**
   * Time intervals that Lambda will be triggered to publish metric in CloudWatch.
   * @default 1
   */
  readonly publishFrequency?: number;
  /**
   * List of queues to measure depth for.
   */
  readonly queues: string[];
  /**
   * Where is Redis?
   */
  readonly redisAddr: string;
  /**
   * @default '6379'
   */
  readonly redisPort?: string;
  /**
   * The SecretsManager secret which hosts information about connecting to the Redis
   *
   * This follows the standard SecretRotation secret schema:
   * See https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/User-Secrets-Manager.html
   * for details around the schema and secrets rotation for Elasticache in general.
   *
   * ```
   * {
   *   "password": "<required: password>",
   *   "username": "<required: username>",
   *   "user_arn": "<optional: supported but not used, example:arn:aws:elasticache:us-east-1:xxxxxxxxxx918:user:user1>", //this is the bond between the secret and the user
   * }
   * ```
   *
   * You can override these paths using {@link redisSecretPasswordPath}, and
   * {@link redisSecretUsernamePath} respectively.
   */
  readonly redisSecretArn: string;
  /**
   * In the best possible world, we would be using ABAC to allow decryption of SecretsManager payload.
   * If that is an option, leave this undefined.
   * If you aren't there yet, this will grant the lambda the permissions to decrypt.
   *
   * @default undefined assume that decryption grant is handled via ABAC or otherwise
   */
  readonly redisSecretKeyArn?: string;
  /**
   * Override the JSON path for the password in the {@link redisSecretArn}
   *
   * @default 'password'
   */
  readonly redisSecretPasswordPath: string;
  /**
   * Override the JSON path for the username in the {@link redisSecretArn}
   *
   * @default 'username'
   */
  readonly redisSecretUsernamePath: string;
}

/**
 * A construct that creates an AWS Lambda function to publish ENI usage metrics to CloudWatch.
 */
export class RedisQueueDepthMetricPublisher extends Construct {
  readonly publishFrequency: number;
  readonly regions: string[];
  readonly handler: NodejsFunction;
  readonly rule: Rule;
  readonly cwNamespace: string;

  /**
   * Creates a new instance of RedisQueueDepthMetricPublisher.
   * @param scope The parent construct.
   * @param id The ID of the construct.
   * @param props The properties of the construct.
   */

  constructor(scope: Construct, id: Namer, props: RedisQueueDepthMetricPublisherProps) {
    super(scope, id.pascal);
    this.publishFrequency = props.publishFrequency ?? 1;
    this.cwNamespace = props.cwNamespace ?? 'RedisQueueDepth';
    const myConstruct = this;

    // Note the name implies where we fetch the code from
    this.handler = new NodejsFunction(myConstruct, 'handler', {
      bundling: {
        externalModules: ['aws-lambda'],
        minify: true,
      },
      logRetention: props.cloudwatchLogsRetention ?? RetentionDays.THREE_MONTHS,
      memorySize: 512,
      runtime: Runtime.NODEJS_LATEST, // Should be at least node20, but let's be aggressive about this.
      timeout: Duration.seconds(45),
    });

    [
      new PolicyStatement({
        sid: 'fetchRedisSecret',
        actions: ['WRITEME'],
        resources: [props.redisSecretArn],
      }),
      new PolicyStatement({
        sid: 'putRedisQueueDepth',
        actions: ['cloudwatch:PutMetricData'],
        resources: ['*'],
        conditions: {
          StringEquals: {
            'cloudwatch:namespace': props.cwNamespace ?? this.cwNamespace,
          },
        },
      }),
    ].forEach((policy) => this.handler.addToRolePolicy(policy));

    if (props.redisSecretKeyArn) {
      this.handler.addToRolePolicy(
        new PolicyStatement({
          sid: 'decryptRedisSecret',
          actions: ['kms:Decrypt'],
          resources: [props.redisSecretKeyArn],
        }),
      );
    }

    this.handler
      .addEnvironment('QUEUES', JSON.stringify(props.queues))
      .addEnvironment('REDIS_ADDR', props.redisAddr)
      .addEnvironment('REDIS_PORT', props.redisPort ?? '6379')
      .addEnvironment('REDIS_SECRET_ARN', props.redisSecretArn)
      .addEnvironment('REDIS_SECRET_PASSWORD_PATH', props.redisSecretPasswordPath ?? 'password')
      .addEnvironment('REDIS_SECRET_USERNAME_PATH', props.redisSecretUsernamePath ?? 'username')

    this.rule = new Rule(this, 'rule', {
      schedule: Schedule.rate(Duration.minutes(this.publishFrequency)),
    });
    this.rule.addTarget(new LambdaFunction(this.handler));
  }
}
