import { Duration, Stack, aws_ec2 } from 'aws-cdk-lib';
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
   * The CloudWatch service to publish metrics to.
   * @default 'RedisQueueDepthMetricPublisher'
   */
  readonly cwService?: string;
  /**
   * Time intervals that Lambda will be triggered to publish metric in CloudWatch.
   * @default Duration.minutes(1)
   */
  readonly publishFrequency?: Duration;
  /**
   * List of queue names to measure depth for.
   */
  readonly queueNames: string[];
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
  readonly redisSecretArn?: string;
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
  readonly redisSecretPasswordPath?: string;
  /**
   * Override the JSON path for the username in the {@link redisSecretArn}
   *
   * @default 'username'
   */
  readonly redisSecretUsernamePath?: string;
  /**
   * The regions to publish metrics to/observe metrics from.
   * @default ['us-west-2']
   */
  readonly regions?: string[];
  /**
   * The VPC to run the Lambda in.
   */
  readonly vpc?: any;
  /**
   * The SecurityGroupId to grant the lambda to access redis clusters
   */
  readonly securityGroupId?: string;
}

/**
 * A construct that creates an AWS Lambda function to publish ENI usage metrics to CloudWatch.
 */
export class RedisQueueDepthMetricPublisher extends Construct {
  readonly publishFrequency: Duration;
  readonly regions: string[];
  readonly handler: NodejsFunction;
  readonly rule: Rule;
  readonly cwNamespace: string;
  readonly cwService: string;

  /**
   * Creates a new instance of RedisQueueDepthMetricPublisher.
   * @param scope The parent construct.
   * @param id The ID of the construct.
   * @param props The properties of the construct.
   */

  constructor(scope: Construct, id: Namer, props: RedisQueueDepthMetricPublisherProps) {
    super(scope, id.pascal);

    if (!props.redisSecretArn && (!props.vpc || !props.securityGroupId)) {
      throw new Error('Either a secretArn or a vpc/securityGroupId must be provided');
    }

    this.publishFrequency = props.publishFrequency ?? Duration.minutes(1);
    this.cwNamespace = props.cwNamespace ?? 'RedisQueueDepth';
    this.cwService = props.cwService ?? 'RedisQueueDepthMetricPublisher';
    this.regions = props.regions ?? ['us-west-2'];
    const myConstruct = this;

    // Note the name implies where we fetch the code from
    this.handler = new NodejsFunction(myConstruct, 'handler', {
      bundling: {
        externalModules: ['aws-lambda'],
        minify: true,
      },
      logRetention: props.cloudwatchLogsRetention ?? RetentionDays.THREE_MONTHS,
      memorySize: 512,
      runtime: Runtime.NODEJS_18_X, // Should be at least node20, but let's be aggressive about this.
      timeout: Duration.seconds(45),
      ...(props.vpc ? { vpc: props.vpc } : {}),
    });

    const policies = [
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
    ];

    if (props.redisSecretArn) {
      policies.push(
        new PolicyStatement({
          sid: 'fetchRedisSecret',
          actions: ['secretsmanager:GetSecretValue'],
          resources: [props.redisSecretArn],
        }),
      );
    }
    if (props.redisSecretKeyArn) {
      policies.push(
        new PolicyStatement({
          sid: 'decryptRedisSecret',
          actions: ['kms:Decrypt'],
          resources: [props.redisSecretKeyArn],
        }),
      );
    }
    policies.forEach((policy) => this.handler.addToRolePolicy(policy));

    this.handler
      .addEnvironment('QUEUE_NAMES', JSON.stringify(props.queueNames))
      .addEnvironment('REDIS_ADDR', props.redisAddr)
      .addEnvironment('REDIS_PORT', props.redisPort ?? '6379')
      .addEnvironment('REDIS_SECRET_ARN', props.redisSecretArn! || '')
      .addEnvironment('REDIS_SECRET_PASSWORD_PATH', props.redisSecretPasswordPath ?? 'password')
      .addEnvironment('REDIS_SECRET_USERNAME_PATH', props.redisSecretUsernamePath ?? 'username')
      .addEnvironment('CW_SERVICE', props.cwService ?? this.cwService)
      .addEnvironment('CW_NAMESPACE', props.cwNamespace ?? this.cwNamespace);

    if (props.securityGroupId) {
      const securityGroup = aws_ec2.SecurityGroup.fromSecurityGroupId(this, 'securityGroup', props.securityGroupId);
      this.handler.connections.allowTo(securityGroup, aws_ec2.Port.tcp(6379));
    }

    this.rule = new Rule(this, 'rule', {
      schedule: Schedule.rate(this.publishFrequency),
    });
    this.rule.addTarget(new LambdaFunction(this.handler));
  }
}

export class RedisQueueDepthMetricPublisherStack extends Stack {
  constructor(scope: Construct, id: string, props: RedisQueueDepthMetricPublisherProps) {
    super(scope, id);
    new RedisQueueDepthMetricPublisher(this, new Namer([id, 'lambda']), props);
  }
}
