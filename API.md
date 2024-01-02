# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisQueueDepthMetricPublisher <a name="RedisQueueDepthMetricPublisher" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher"></a>

A construct that creates an AWS Lambda function to publish ENI usage metrics to CloudWatch.

#### Initializers <a name="Initializers" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.Initializer"></a>

```typescript
import { RedisQueueDepthMetricPublisher } from '@time-loop/cdk-redis-queue-depth-metric-publisher'

new RedisQueueDepthMetricPublisher(scope: Construct, id: Namer, props: RedisQueueDepthMetricPublisherProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.Initializer.parameter.id">id</a></code> | <code>multi-convention-namer.Namer</code> | The ID of the construct. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.Initializer.parameter.props">props</a></code> | <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps">RedisQueueDepthMetricPublisherProps</a></code> | The properties of the construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.Initializer.parameter.id"></a>

- *Type:* multi-convention-namer.Namer

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.Initializer.parameter.props"></a>

- *Type:* <a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps">RedisQueueDepthMetricPublisherProps</a>

The properties of the construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.isConstruct"></a>

```typescript
import { RedisQueueDepthMetricPublisher } from '@time-loop/cdk-redis-queue-depth-metric-publisher'

RedisQueueDepthMetricPublisher.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.property.cwNamespace">cwNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.property.cwService">cwService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.property.handler">handler</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.property.publishFrequency">publishFrequency</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.property.rule">rule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cwNamespace`<sup>Required</sup> <a name="cwNamespace" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.property.cwNamespace"></a>

```typescript
public readonly cwNamespace: string;
```

- *Type:* string

---

##### `cwService`<sup>Required</sup> <a name="cwService" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.property.cwService"></a>

```typescript
public readonly cwService: string;
```

- *Type:* string

---

##### `handler`<sup>Required</sup> <a name="handler" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.property.handler"></a>

```typescript
public readonly handler: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---

##### `publishFrequency`<sup>Required</sup> <a name="publishFrequency" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.property.publishFrequency"></a>

```typescript
public readonly publishFrequency: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

##### `regions`<sup>Required</sup> <a name="regions" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisher.property.rule"></a>

```typescript
public readonly rule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

---


### RedisQueueDepthMetricPublisherStack <a name="RedisQueueDepthMetricPublisherStack" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack"></a>

#### Initializers <a name="Initializers" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.Initializer"></a>

```typescript
import { RedisQueueDepthMetricPublisherStack } from '@time-loop/cdk-redis-queue-depth-metric-publisher'

new RedisQueueDepthMetricPublisherStack(scope: Construct, id: string, props: RedisQueueDepthMetricPublisherProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.Initializer.parameter.props">props</a></code> | <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps">RedisQueueDepthMetricPublisherProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.Initializer.parameter.props"></a>

- *Type:* <a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps">RedisQueueDepthMetricPublisherProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |

---

##### `toString` <a name="toString" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.isConstruct"></a>

```typescript
import { RedisQueueDepthMetricPublisherStack } from '@time-loop/cdk-redis-queue-depth-metric-publisher'

RedisQueueDepthMetricPublisherStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.isStack"></a>

```typescript
import { RedisQueueDepthMetricPublisherStack } from '@time-loop/cdk-redis-queue-depth-metric-publisher'

RedisQueueDepthMetricPublisherStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.of"></a>

```typescript
import { RedisQueueDepthMetricPublisherStack } from '@time-loop/cdk-redis-queue-depth-metric-publisher'

RedisQueueDepthMetricPublisherStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---


## Structs <a name="Structs" id="Structs"></a>

### RedisQueueDepthMetricPublisherProps <a name="RedisQueueDepthMetricPublisherProps" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps"></a>

#### Initializer <a name="Initializer" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.Initializer"></a>

```typescript
import { RedisQueueDepthMetricPublisherProps } from '@time-loop/cdk-redis-queue-depth-metric-publisher'

const redisQueueDepthMetricPublisherProps: RedisQueueDepthMetricPublisherProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.queueNames">queueNames</a></code> | <code>string[]</code> | List of queue names to measure depth for. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.redisAddr">redisAddr</a></code> | <code>string</code> | Where is Redis? |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | How long to retain logs published to CloudWatch logs. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.cwNamespace">cwNamespace</a></code> | <code>string</code> | The CloudWatch namespace to publish metrics to. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.cwService">cwService</a></code> | <code>string</code> | The CloudWatch service to publish metrics to. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.publishFrequency">publishFrequency</a></code> | <code>aws-cdk-lib.Duration</code> | Time intervals that Lambda will be triggered to publish metric in CloudWatch. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.redisPort">redisPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.redisSecretArn">redisSecretArn</a></code> | <code>string</code> | The SecretsManager secret which hosts information about connecting to the Redis. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.redisSecretKeyArn">redisSecretKeyArn</a></code> | <code>string</code> | In the best possible world, we would be using ABAC to allow decryption of SecretsManager payload. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.redisSecretPasswordPath">redisSecretPasswordPath</a></code> | <code>string</code> | Override the JSON path for the password in the {@link redisSecretArn}. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.redisSecretUsernamePath">redisSecretUsernamePath</a></code> | <code>string</code> | Override the JSON path for the username in the {@link redisSecretArn}. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.regions">regions</a></code> | <code>string[]</code> | The regions to publish metrics to/observe metrics from. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | The SecurityGroupId to grant the lambda to access redis clusters. |
| <code><a href="#@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.vpc">vpc</a></code> | <code>any</code> | The VPC to run the Lambda in. |

---

##### `queueNames`<sup>Required</sup> <a name="queueNames" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.queueNames"></a>

```typescript
public readonly queueNames: string[];
```

- *Type:* string[]

List of queue names to measure depth for.

---

##### `redisAddr`<sup>Required</sup> <a name="redisAddr" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.redisAddr"></a>

```typescript
public readonly redisAddr: string;
```

- *Type:* string

Where is Redis?

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* aws_logs.RetentionDays.THREE_MONTHS

How long to retain logs published to CloudWatch logs.

---

##### `cwNamespace`<sup>Optional</sup> <a name="cwNamespace" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.cwNamespace"></a>

```typescript
public readonly cwNamespace: string;
```

- *Type:* string
- *Default:* 'RedisQueueDepth'

The CloudWatch namespace to publish metrics to.

---

##### `cwService`<sup>Optional</sup> <a name="cwService" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.cwService"></a>

```typescript
public readonly cwService: string;
```

- *Type:* string
- *Default:* 'RedisQueueDepthMetricPublisher'

The CloudWatch service to publish metrics to.

---

##### `publishFrequency`<sup>Optional</sup> <a name="publishFrequency" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.publishFrequency"></a>

```typescript
public readonly publishFrequency: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.minutes(1)

Time intervals that Lambda will be triggered to publish metric in CloudWatch.

---

##### `redisPort`<sup>Optional</sup> <a name="redisPort" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.redisPort"></a>

```typescript
public readonly redisPort: string;
```

- *Type:* string
- *Default:* '6379'

---

##### `redisSecretArn`<sup>Optional</sup> <a name="redisSecretArn" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.redisSecretArn"></a>

```typescript
public readonly redisSecretArn: string;
```

- *Type:* string

The SecretsManager secret which hosts information about connecting to the Redis.

This follows the standard SecretRotation secret schema:
See https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/User-Secrets-Manager.html
for details around the schema and secrets rotation for Elasticache in general.

```
{
  "password": "<required: password>",
  "username": "<required: username>",
  "user_arn": "<optional: supported but not used, example:arn:aws:elasticache:us-east-1:xxxxxxxxxx918:user:user1>", //this is the bond between the secret and the user
}
```

You can override these paths using {@link redisSecretPasswordPath}, and
{@link redisSecretUsernamePath} respectively.

---

##### `redisSecretKeyArn`<sup>Optional</sup> <a name="redisSecretKeyArn" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.redisSecretKeyArn"></a>

```typescript
public readonly redisSecretKeyArn: string;
```

- *Type:* string
- *Default:* undefined assume that decryption grant is handled via ABAC or otherwise

In the best possible world, we would be using ABAC to allow decryption of SecretsManager payload.

If that is an option, leave this undefined.
If you aren't there yet, this will grant the lambda the permissions to decrypt.

---

##### `redisSecretPasswordPath`<sup>Optional</sup> <a name="redisSecretPasswordPath" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.redisSecretPasswordPath"></a>

```typescript
public readonly redisSecretPasswordPath: string;
```

- *Type:* string
- *Default:* 'password'

Override the JSON path for the password in the {@link redisSecretArn}.

---

##### `redisSecretUsernamePath`<sup>Optional</sup> <a name="redisSecretUsernamePath" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.redisSecretUsernamePath"></a>

```typescript
public readonly redisSecretUsernamePath: string;
```

- *Type:* string
- *Default:* 'username'

Override the JSON path for the username in the {@link redisSecretArn}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]
- *Default:* ['us-west-2']

The regions to publish metrics to/observe metrics from.

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

The SecurityGroupId to grant the lambda to access redis clusters.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@time-loop/cdk-redis-queue-depth-metric-publisher.RedisQueueDepthMetricPublisherProps.property.vpc"></a>

```typescript
public readonly vpc: any;
```

- *Type:* any

The VPC to run the Lambda in.

---



