import { Buffer } from "https://deno.land/std@0.119.0/node/buffer.ts";
import { SENSITIVE_STRING } from "../../smithy-client/mod.ts";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "../../types/mod.ts";

/**
 * <p>Describes hints for the buffering to perform before delivering data to the
 *          destination. These options are treated as hints, and therefore Kinesis Data Firehose might
 *          choose to use different values when it is optimal. The <code>SizeInMBs</code> and
 *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
 *          one of them, you must also provide a value for the other.</p>
 */
export interface BufferingHints {
  /**
   * <p>Buffer incoming data to the specified size, in MiBs, before delivering it to the
   *          destination. The default value is 5. This parameter is optional but if you specify a value
   *          for it, you must also specify a value for <code>IntervalInSeconds</code>, and vice
   *          versa.</p>
   *          <p>We recommend setting this parameter to a value greater than the amount of data you
   *          typically ingest into the delivery stream in 10 seconds. For example, if you typically
   *          ingest data at 1 MiB/sec, the value should be 10 MiB or higher.</p>
   */
  SizeInMBs?: number;

  /**
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering
   *          it to the destination. The default value is 300. This parameter is optional but if you
   *          specify a value for it, you must also specify a value for <code>SizeInMBs</code>, and vice
   *          versa.</p>
   */
  IntervalInSeconds?: number;
}

export namespace BufferingHints {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BufferingHints): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
 */
export interface CloudWatchLoggingOptions {
  /**
   * <p>Enables or disables CloudWatch logging.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The CloudWatch group name for logging. This value is required if CloudWatch logging
   *          is enabled.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The CloudWatch log stream name for logging. This value is required if CloudWatch
   *          logging is enabled.</p>
   */
  LogStreamName?: string;
}

export namespace CloudWatchLoggingOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchLoggingOptions): any => ({
    ...obj,
  });
}

export enum CompressionFormat {
  GZIP = "GZIP",
  HADOOP_SNAPPY = "HADOOP_SNAPPY",
  SNAPPY = "Snappy",
  UNCOMPRESSED = "UNCOMPRESSED",
  ZIP = "ZIP",
}

/**
 * <p>Another modification has already happened. Fetch <code>VersionId</code> again and use
 *          it to update the destination.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}

export namespace ConcurrentModificationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

export enum ContentEncoding {
  GZIP = "GZIP",
  NONE = "NONE",
}

/**
 * <p>Describes a <code>COPY</code> command for Amazon Redshift.</p>
 */
export interface CopyCommand {
  /**
   * <p>The name of the target table. The table must already exist in the database.</p>
   */
  DataTableName: string | undefined;

  /**
   * <p>A comma-separated list of column names.</p>
   */
  DataTableColumns?: string;

  /**
   * <p>Optional parameters to use with the Amazon Redshift <code>COPY</code> command. For
   *          more information, see the "Optional Parameters" section of <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html">Amazon Redshift COPY command</a>. Some possible
   *          examples that would apply to Kinesis Data Firehose are as follows:</p>
   *          <p>
   *             <code>delimiter '\t' lzop;</code> - fields are delimited with "\t" (TAB character) and
   *          compressed using lzop.</p>
   *          <p>
   *             <code>delimiter '|'</code> - fields are delimited with "|" (this is the default
   *          delimiter).</p>
   *          <p>
   *             <code>delimiter '|' escape</code> - the delimiter should be escaped.</p>
   *          <p>
   *             <code>fixedwidth 'venueid:3,venuename:25,venuecity:12,venuestate:2,venueseats:6'</code> -
   *          fields are fixed width in the source, with each width specified after every column in the
   *          table.</p>
   *          <p>
   *             <code>JSON 's3://mybucket/jsonpaths.txt'</code> - data is in JSON format, and the path
   *          specified is the format of the data.</p>
   *          <p>For more examples, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_COPY_command_examples.html">Amazon Redshift COPY command
   *             examples</a>.</p>
   */
  CopyOptions?: string;
}

export namespace CopyCommand {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CopyCommand): any => ({
    ...obj,
  });
}

export enum KeyType {
  AWS_OWNED_CMK = "AWS_OWNED_CMK",
  CUSTOMER_MANAGED_CMK = "CUSTOMER_MANAGED_CMK",
}

/**
 * <p>Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side
 *          Encryption (SSE). </p>
 */
export interface DeliveryStreamEncryptionConfigurationInput {
  /**
   * <p>If you set <code>KeyType</code> to <code>CUSTOMER_MANAGED_CMK</code>, you must specify
   *          the Amazon Resource Name (ARN) of the CMK. If you set <code>KeyType</code> to
   *             <code>AWS_OWNED_CMK</code>, Kinesis Data Firehose uses a service-account CMK.</p>
   */
  KeyARN?: string;

  /**
   * <p>Indicates the type of customer master key (CMK) to use for encryption. The default
   *          setting is <code>AWS_OWNED_CMK</code>. For more information about CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">Customer
   *             Master Keys (CMKs)</a>. When you invoke <a>CreateDeliveryStream</a> or
   *             <a>StartDeliveryStreamEncryption</a> with <code>KeyType</code> set to
   *          CUSTOMER_MANAGED_CMK, Kinesis Data Firehose invokes the Amazon KMS operation <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a> to create a grant that allows the Kinesis Data Firehose service to
   *          use the customer managed CMK to perform encryption and decryption. Kinesis Data Firehose
   *          manages that grant. </p>
   *          <p>When you invoke <a>StartDeliveryStreamEncryption</a> to change the CMK for a
   *          delivery stream that is encrypted with a customer managed CMK, Kinesis Data Firehose
   *          schedules the grant it had on the old CMK for retirement.</p>
   *          <p>You can use a CMK of type CUSTOMER_MANAGED_CMK to encrypt up to 500 delivery streams. If
   *          a <a>CreateDeliveryStream</a> or <a>StartDeliveryStreamEncryption</a>
   *          operation exceeds this limit, Kinesis Data Firehose throws a
   *             <code>LimitExceededException</code>. </p>
   *          <important>
   *             <p>To encrypt your delivery stream, use symmetric CMKs. Kinesis Data Firehose doesn't
   *             support asymmetric CMKs. For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html">About
   *                Symmetric and Asymmetric CMKs</a> in the AWS Key Management Service developer
   *             guide.</p>
   *          </important>
   */
  KeyType: KeyType | string | undefined;
}

export namespace DeliveryStreamEncryptionConfigurationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeliveryStreamEncryptionConfigurationInput): any => ({
    ...obj,
  });
}

export type DeliveryStreamType = "DirectPut" | "KinesisStreamAsSource";

/**
 * <p>Describes the buffering to perform before delivering data to the Amazon ES
 *          destination.</p>
 */
export interface ElasticsearchBufferingHints {
  /**
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering
   *          it to the destination. The default value is 300 (5 minutes).</p>
   */
  IntervalInSeconds?: number;

  /**
   * <p>Buffer incoming data to the specified size, in MBs, before delivering it to the
   *          destination. The default value is 5.</p>
   *          <p>We recommend setting this parameter to a value greater than the amount of data you
   *          typically ingest into the delivery stream in 10 seconds. For example, if you typically
   *          ingest data at 1 MB/sec, the value should be 10 MB or higher.</p>
   */
  SizeInMBs?: number;
}

export namespace ElasticsearchBufferingHints {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticsearchBufferingHints): any => ({
    ...obj,
  });
}

export type ElasticsearchIndexRotationPeriod = "NoRotation" | "OneDay" | "OneHour" | "OneMonth" | "OneWeek";

export enum ProcessorParameterName {
  BUFFER_INTERVAL_IN_SECONDS = "BufferIntervalInSeconds",
  BUFFER_SIZE_IN_MB = "BufferSizeInMBs",
  Delimiter = "Delimiter",
  JSON_PARSING_ENGINE = "JsonParsingEngine",
  LAMBDA_ARN = "LambdaArn",
  LAMBDA_NUMBER_OF_RETRIES = "NumberOfRetries",
  METADATA_EXTRACTION_QUERY = "MetadataExtractionQuery",
  ROLE_ARN = "RoleArn",
  SUB_RECORD_TYPE = "SubRecordType",
}

/**
 * <p>Describes the processor parameter.</p>
 */
export interface ProcessorParameter {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName: ProcessorParameterName | string | undefined;

  /**
   * <p>The parameter value.</p>
   */
  ParameterValue: string | undefined;
}

export namespace ProcessorParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessorParameter): any => ({
    ...obj,
  });
}

export type ProcessorType = "AppendDelimiterToRecord" | "Lambda" | "MetadataExtraction" | "RecordDeAggregation";

/**
 * <p>Describes a data processor.</p>
 */
export interface Processor {
  /**
   * <p>The type of processor.</p>
   */
  Type: ProcessorType | string | undefined;

  /**
   * <p>The processor parameters.</p>
   */
  Parameters?: ProcessorParameter[];
}

export namespace Processor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Processor): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a data processing configuration.</p>
 */
export interface ProcessingConfiguration {
  /**
   * <p>Enables or disables data processing.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The data processors.</p>
   */
  Processors?: Processor[];
}

export namespace ProcessingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configures retry behavior in case Kinesis Data Firehose is unable to deliver
 *          documents to Amazon ES.</p>
 */
export interface ElasticsearchRetryOptions {
  /**
   * <p>After an initial failure to deliver to Amazon ES, the total amount of time during
   *          which Kinesis Data Firehose retries delivery (including the first attempt). After this time
   *          has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5
   *          minutes). A value of 0 (zero) results in no retries.</p>
   */
  DurationInSeconds?: number;
}

export namespace ElasticsearchRetryOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticsearchRetryOptions): any => ({
    ...obj,
  });
}

export type ElasticsearchS3BackupMode = "AllDocuments" | "FailedDocumentsOnly";

/**
 * <p>Describes an encryption key for a destination in Amazon S3.</p>
 */
export interface KMSEncryptionConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the encryption key. Must belong to the same AWS
   *          Region as the destination Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  AWSKMSKeyARN: string | undefined;
}

export namespace KMSEncryptionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KMSEncryptionConfig): any => ({
    ...obj,
  });
}

export type NoEncryptionConfig = "NoEncryption";

/**
 * <p>Describes the encryption for a destination in Amazon S3.</p>
 */
export interface EncryptionConfiguration {
  /**
   * <p>Specifically override existing encryption information to ensure that no encryption is
   *          used.</p>
   */
  NoEncryptionConfig?: NoEncryptionConfig | string;

  /**
   * <p>The encryption key.</p>
   */
  KMSEncryptionConfig?: KMSEncryptionConfig;
}

export namespace EncryptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration of a destination in Amazon S3.</p>
 */
export interface S3DestinationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *             AWS Service Namespaces</a>.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  Prefix?: string;

  /**
   * <p>A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  ErrorOutputPrefix?: string;

  /**
   * <p>The buffering option. If no value is specified, <code>BufferingHints</code> object
   *          default values are used.</p>
   */
  BufferingHints?: BufferingHints;

  /**
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>.</p>
   *          <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified
   *          for Amazon Redshift destinations because they are not supported by the Amazon Redshift
   *             <code>COPY</code> operation that reads from the S3 bucket.</p>
   */
  CompressionFormat?: CompressionFormat | string;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>The CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export namespace S3DestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3DestinationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the VPC of the Amazon ES destination.</p>
 */
export interface VpcConfiguration {
  /**
   * <p>The IDs of the subnets that you want Kinesis Data Firehose to use to create ENIs in the
   *          VPC of the Amazon ES destination. Make sure that the routing tables and inbound and
   *          outbound rules allow traffic to flow from the subnets whose IDs are specified here to the
   *          subnets that have the destination Amazon ES endpoints. Kinesis Data Firehose creates at
   *          least one ENI in each of the subnets that are specified here. Do not delete or modify these
   *          ENIs.</p>
   *          <p>The number of ENIs that Kinesis Data Firehose creates in the subnets specified here
   *          scales up and down automatically based on throughput. To enable Kinesis Data Firehose to
   *          scale up the number of ENIs to match throughput, ensure that you have sufficient quota. To
   *          help you calculate the quota you need, assume that Kinesis Data Firehose can create up to
   *          three ENIs for this delivery stream for each of the subnets specified here. For more
   *          information about ENI quota, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-enis">Network Interfaces
   *          </a> in the Amazon VPC Quotas topic.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The ARN of the IAM role that you want the delivery stream to use to create endpoints in
   *          the destination VPC. You can use your existing Kinesis Data Firehose delivery role or you
   *          can specify a new role. In either case, make sure that the role trusts the Kinesis Data
   *          Firehose service principal and that it grants the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeVpcs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeVpcAttribute</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeSubnets</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeSecurityGroups</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeNetworkInterfaces</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:CreateNetworkInterface</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:CreateNetworkInterfacePermission</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DeleteNetworkInterface</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you revoke these permissions after you create the delivery stream, Kinesis Data
   *          Firehose can't scale out by creating more ENIs when necessary. You might therefore see a
   *          degradation in performance.</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>The IDs of the security groups that you want Kinesis Data Firehose to use when it
   *          creates ENIs in the VPC of the Amazon ES destination. You can use the same security group
   *          that the Amazon ES domain uses or different ones. If you specify different security groups
   *          here, ensure that they allow outbound HTTPS traffic to the Amazon ES domain's security
   *          group. Also ensure that the Amazon ES domain's security group allows HTTPS traffic from the
   *          security groups specified here. If you use the same security group for both your delivery
   *          stream and the Amazon ES domain, make sure the security group inbound rule allows HTTPS
   *          traffic. For more information about security group rules, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#SecurityGroupRules">Security group
   *             rules</a> in the Amazon VPC documentation.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

export namespace VpcConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration of a destination in Amazon ES.</p>
 */
export interface ElasticsearchDestinationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose
   *          for calling the Amazon ES Configuration API and for indexing documents. For more
   *          information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data
   *             Firehose Access to an Amazon S3 Destination</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *             AWS Service Namespaces</a>.</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>The ARN of the Amazon ES domain. The IAM role must have permissions
   *             for <code>DescribeElasticsearchDomain</code>, <code>DescribeElasticsearchDomains</code>,
   *          and <code>DescribeElasticsearchDomainConfig</code> after assuming the role specified in
   *             <b>RoleARN</b>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   *
   *          <p>Specify either <code>ClusterEndpoint</code> or <code>DomainARN</code>.</p>
   */
  DomainARN?: string;

  /**
   * <p>The endpoint to use when communicating with the cluster. Specify either this
   *             <code>ClusterEndpoint</code> or the <code>DomainARN</code> field.</p>
   */
  ClusterEndpoint?: string;

  /**
   * <p>The Elasticsearch index name.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>The Elasticsearch type name. For Elasticsearch 6.x, there can be only one type per
   *          index. If you try to specify a new type for an existing index that already has another
   *          type, Kinesis Data Firehose returns an error during run time.</p>
   *
   *          <p>For Elasticsearch 7.x, don't specify a <code>TypeName</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>The Elasticsearch index rotation period. Index rotation appends a timestamp to the
   *             <code>IndexName</code> to facilitate the expiration of old data. For more information,
   *          see <a href="https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation">Index Rotation for the
   *             Amazon ES Destination</a>. The default value is <code>OneDay</code>.</p>
   */
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod | string;

  /**
   * <p>The buffering options. If no value is specified, the default values for
   *             <code>ElasticsearchBufferingHints</code> are used.</p>
   */
  BufferingHints?: ElasticsearchBufferingHints;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to
   *          Amazon ES. The default value is 300 (5 minutes).</p>
   */
  RetryOptions?: ElasticsearchRetryOptions;

  /**
   * <p>Defines how documents should be delivered to Amazon S3. When it is set to
   *             <code>FailedDocumentsOnly</code>, Kinesis Data Firehose writes any documents that could
   *          not be indexed to the configured Amazon S3 destination, with
   *             <code>elasticsearch-failed/</code> appended to the key prefix. When set to
   *             <code>AllDocuments</code>, Kinesis Data Firehose delivers all incoming records to Amazon
   *          S3, and also writes failed documents with <code>elasticsearch-failed/</code> appended to
   *          the prefix. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-s3-backup">Amazon S3 Backup for the
   *             Amazon ES Destination</a>. Default value is
   *          <code>FailedDocumentsOnly</code>.</p>
   *          <p>You can't change this backup mode after you create the delivery stream. </p>
   */
  S3BackupMode?: ElasticsearchS3BackupMode | string;

  /**
   * <p>The configuration for the backup Amazon S3 location.</p>
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * <p>The details of the VPC of the Amazon ES destination.</p>
   */
  VpcConfiguration?: VpcConfiguration;
}

export namespace ElasticsearchDestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticsearchDestinationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing
 *          data, which means converting it from the JSON format in preparation for serializing it to
 *          the Parquet or ORC format. This is one of two deserializers you can choose, depending on
 *          which one offers the functionality you need. The other option is the OpenX SerDe.</p>
 */
export interface HiveJsonSerDe {
  /**
   * <p>Indicates how you want Kinesis Data Firehose to parse the date and timestamps that
   *          may be present in your input data JSON. To specify these format strings, follow the pattern
   *          syntax of JodaTime's DateTimeFormat format strings. For more information, see <a href="https://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html">Class DateTimeFormat</a>. You can also use the special value <code>millis</code> to
   *          parse timestamps in epoch milliseconds. If you don't specify a format, Kinesis Data
   *          Firehose uses <code>java.sql.Timestamp::valueOf</code> by default.</p>
   */
  TimestampFormats?: string[];
}

export namespace HiveJsonSerDe {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HiveJsonSerDe): any => ({
    ...obj,
  });
}

/**
 * <p>The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means
 *          converting it from the JSON format in preparation for serializing it to the Parquet or ORC
 *          format. This is one of two deserializers you can choose, depending on which one offers the
 *          functionality you need. The other option is the native Hive / HCatalog JsonSerDe.</p>
 */
export interface OpenXJsonSerDe {
  /**
   * <p>When set to <code>true</code>, specifies that the names of the keys include dots and
   *          that you want Kinesis Data Firehose to replace them with underscores. This is useful
   *          because Apache Hive does not allow dots in column names. For example, if the JSON contains
   *          a key whose name is "a.b", you can define the column name to be "a_b" when using this
   *          option.</p>
   *          <p>The default is <code>false</code>.</p>
   */
  ConvertDotsInJsonKeysToUnderscores?: boolean;

  /**
   * <p>When set to <code>true</code>, which is the default, Kinesis Data Firehose converts
   *          JSON keys to lowercase before deserializing them.</p>
   */
  CaseInsensitive?: boolean;

  /**
   * <p>Maps column names to JSON keys that aren't identical to the column names. This is
   *          useful when the JSON contains keys that are Hive keywords. For example,
   *             <code>timestamp</code> is a Hive keyword. If you have a JSON key named
   *             <code>timestamp</code>, set this parameter to <code>{"ts": "timestamp"}</code> to map
   *          this key to a column named <code>ts</code>.</p>
   */
  ColumnToJsonKeyMappings?: { [key: string]: string };
}

export namespace OpenXJsonSerDe {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpenXJsonSerDe): any => ({
    ...obj,
  });
}

/**
 * <p>The deserializer you want Kinesis Data Firehose to use for converting the input data
 *          from JSON. Kinesis Data Firehose then serializes the data to its final format using the
 *             <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers:
 *          the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>.</p>
 */
export interface Deserializer {
  /**
   * <p>The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means
   *          converting it from the JSON format in preparation for serializing it to the Parquet or ORC
   *          format. This is one of two deserializers you can choose, depending on which one offers the
   *          functionality you need. The other option is the native Hive / HCatalog JsonSerDe.</p>
   */
  OpenXJsonSerDe?: OpenXJsonSerDe;

  /**
   * <p>The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing
   *          data, which means converting it from the JSON format in preparation for serializing it to
   *          the Parquet or ORC format. This is one of two deserializers you can choose, depending on
   *          which one offers the functionality you need. The other option is the OpenX SerDe.</p>
   */
  HiveJsonSerDe?: HiveJsonSerDe;
}

export namespace Deserializer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Deserializer): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the deserializer you want to use to convert the format of the input data.
 *          This parameter is required if <code>Enabled</code> is set to true.</p>
 */
export interface InputFormatConfiguration {
  /**
   * <p>Specifies which deserializer to use. You can choose either the Apache Hive JSON SerDe
   *          or the OpenX JSON SerDe. If both are non-null, the server rejects the request.</p>
   */
  Deserializer?: Deserializer;
}

export namespace InputFormatConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputFormatConfiguration): any => ({
    ...obj,
  });
}

export enum OrcCompression {
  NONE = "NONE",
  SNAPPY = "SNAPPY",
  ZLIB = "ZLIB",
}

export enum OrcFormatVersion {
  V0_11 = "V0_11",
  V0_12 = "V0_12",
}

/**
 * <p>A serializer to use for converting data to the ORC format before storing it in Amazon
 *          S3. For more information, see <a href="https://orc.apache.org/docs/">Apache
 *          ORC</a>.</p>
 */
export interface OrcSerDe {
  /**
   * <p>The number of bytes in each stripe. The default is 64 MiB and the minimum is 8
   *          MiB.</p>
   */
  StripeSizeBytes?: number;

  /**
   * <p>The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to
   *          copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the
   *          minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations.</p>
   */
  BlockSizeBytes?: number;

  /**
   * <p>The number of rows between index entries. The default is 10,000 and the minimum is
   *          1,000.</p>
   */
  RowIndexStride?: number;

  /**
   * <p>Set this to <code>true</code> to indicate that you want stripes to be padded to the HDFS
   *          block boundaries. This is useful if you intend to copy the data from Amazon S3 to HDFS
   *          before querying. The default is <code>false</code>.</p>
   */
  EnablePadding?: boolean;

  /**
   * <p>A number between 0 and 1 that defines the tolerance for block padding as a decimal
   *          fraction of stripe size. The default value is 0.05, which means 5 percent of stripe
   *          size.</p>
   *          <p>For the default values of 64 MiB ORC stripes and 256 MiB HDFS blocks, the default block
   *          padding tolerance of 5 percent reserves a maximum of 3.2 MiB for padding within the 256 MiB
   *          block. In such a case, if the available size within the block is more than 3.2 MiB, a new,
   *          smaller stripe is inserted to fit within that space. This ensures that no stripe crosses
   *          block boundaries and causes remote reads within a node-local task.</p>
   *          <p>Kinesis Data Firehose ignores this parameter when <a>OrcSerDe$EnablePadding</a> is <code>false</code>.</p>
   */
  PaddingTolerance?: number;

  /**
   * <p>The compression code to use over data blocks. The default is <code>SNAPPY</code>.</p>
   */
  Compression?: OrcCompression | string;

  /**
   * <p>The column names for which you want Kinesis Data Firehose to create bloom filters. The
   *          default is <code>null</code>.</p>
   */
  BloomFilterColumns?: string[];

  /**
   * <p>The Bloom filter false positive probability (FPP). The lower the FPP, the bigger the
   *          Bloom filter. The default value is 0.05, the minimum is 0, and the maximum is 1.</p>
   */
  BloomFilterFalsePositiveProbability?: number;

  /**
   * <p>Represents the fraction of the total number of non-null rows. To turn off dictionary
   *          encoding, set this fraction to a number that is less than the number of distinct keys in a
   *          dictionary. To always use dictionary encoding, set this threshold to 1.</p>
   */
  DictionaryKeyThreshold?: number;

  /**
   * <p>The version of the file to write. The possible values are <code>V0_11</code> and
   *             <code>V0_12</code>. The default is <code>V0_12</code>.</p>
   */
  FormatVersion?: OrcFormatVersion | string;
}

export namespace OrcSerDe {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrcSerDe): any => ({
    ...obj,
  });
}

export enum ParquetCompression {
  GZIP = "GZIP",
  SNAPPY = "SNAPPY",
  UNCOMPRESSED = "UNCOMPRESSED",
}

export enum ParquetWriterVersion {
  V1 = "V1",
  V2 = "V2",
}

/**
 * <p>A serializer to use for converting data to the Parquet format before storing it in
 *          Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.</p>
 */
export interface ParquetSerDe {
  /**
   * <p>The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to
   *          copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the
   *          minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations.</p>
   */
  BlockSizeBytes?: number;

  /**
   * <p>The Parquet page size. Column chunks are divided into pages. A page is conceptually an
   *          indivisible unit (in terms of compression and encoding). The minimum value is 64 KiB and
   *          the default is 1 MiB.</p>
   */
  PageSizeBytes?: number;

  /**
   * <p>The compression code to use over data blocks. The possible values are
   *             <code>UNCOMPRESSED</code>, <code>SNAPPY</code>, and <code>GZIP</code>, with the default
   *          being <code>SNAPPY</code>. Use <code>SNAPPY</code> for higher decompression speed. Use
   *             <code>GZIP</code> if the compression ratio is more important than speed.</p>
   */
  Compression?: ParquetCompression | string;

  /**
   * <p>Indicates whether to enable dictionary compression.</p>
   */
  EnableDictionaryCompression?: boolean;

  /**
   * <p>The maximum amount of padding to apply. This is useful if you intend to copy the data
   *          from Amazon S3 to HDFS before querying. The default is 0.</p>
   */
  MaxPaddingBytes?: number;

  /**
   * <p>Indicates the version of row format to output. The possible values are <code>V1</code>
   *          and <code>V2</code>. The default is <code>V1</code>.</p>
   */
  WriterVersion?: ParquetWriterVersion | string;
}

export namespace ParquetSerDe {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParquetSerDe): any => ({
    ...obj,
  });
}

/**
 * <p>The serializer that you want Kinesis Data Firehose to use to convert data to the target
 *          format before writing it to Amazon S3. Kinesis Data Firehose supports two types of
 *          serializers: the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html">ORC SerDe</a> and the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html">Parquet SerDe</a>.</p>
 */
export interface Serializer {
  /**
   * <p>A serializer to use for converting data to the Parquet format before storing it in
   *          Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.</p>
   */
  ParquetSerDe?: ParquetSerDe;

  /**
   * <p>A serializer to use for converting data to the ORC format before storing it in Amazon
   *          S3. For more information, see <a href="https://orc.apache.org/docs/">Apache
   *          ORC</a>.</p>
   */
  OrcSerDe?: OrcSerDe;
}

export namespace Serializer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Serializer): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the serializer that you want Kinesis Data Firehose to use to convert the
 *          format of your data before it writes it to Amazon S3. This parameter is required if
 *             <code>Enabled</code> is set to true.</p>
 */
export interface OutputFormatConfiguration {
  /**
   * <p>Specifies which serializer to use. You can choose either the ORC SerDe or the Parquet
   *          SerDe. If both are non-null, the server rejects the request.</p>
   */
  Serializer?: Serializer;
}

export namespace OutputFormatConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputFormatConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the schema to which you want Kinesis Data Firehose to configure your data
 *          before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set
 *          to true.</p>
 */
export interface SchemaConfiguration {
  /**
   * <p>The role that Kinesis Data Firehose can use to access AWS Glue. This role must be in
   *          the same account you use for Kinesis Data Firehose. Cross-account roles aren't
   *          allowed.</p>
   *          <important>
   *             <p>If the <code>SchemaConfiguration</code> request parameter is used as part of invoking
   *             the <code>CreateDeliveryStream</code> API, then the <code>RoleARN</code> property is
   *             required and its value must be specified.</p>
   *          </important>
   */
  RoleARN?: string;

  /**
   * <p>The ID of the AWS Glue Data Catalog. If you don't supply this, the AWS account ID is
   *          used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>Specifies the name of the AWS Glue database that contains the schema for the output
   *          data.</p>
   *          <important>
   *             <p>If the <code>SchemaConfiguration</code> request parameter is used as part of invoking
   *             the <code>CreateDeliveryStream</code> API, then the <code>DatabaseName</code> property
   *             is required and its value must be specified.</p>
   *          </important>
   */
  DatabaseName?: string;

  /**
   * <p>Specifies the AWS Glue table that contains the column information that constitutes your
   *          data schema.</p>
   *          <important>
   *             <p>If the <code>SchemaConfiguration</code> request parameter is used as part of invoking
   *             the <code>CreateDeliveryStream</code> API, then the <code>TableName</code> property is
   *             required and its value must be specified.</p>
   *          </important>
   */
  TableName?: string;

  /**
   * <p>If you don't specify an AWS Region, the default is the current Region.</p>
   */
  Region?: string;

  /**
   * <p>Specifies the table version for the output data schema. If you don't specify this
   *          version ID, or if you set it to <code>LATEST</code>, Kinesis Data Firehose uses the most
   *          recent version. This means that any updates to the table are automatically picked
   *          up.</p>
   */
  VersionId?: string;
}

export namespace SchemaConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies that you want Kinesis Data Firehose to convert data from the JSON format to
 *          the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the
 *          serializer and deserializer that you specify, in addition to the column information from
 *          the AWS Glue table, to deserialize your input data from JSON and then serialize it to the
 *          Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record
 *             Format Conversion</a>.</p>
 */
export interface DataFormatConversionConfiguration {
  /**
   * <p>Specifies the AWS Glue Data Catalog table that contains the column information. This
   *          parameter is required if <code>Enabled</code> is set to true.</p>
   */
  SchemaConfiguration?: SchemaConfiguration;

  /**
   * <p>Specifies the deserializer that you want Kinesis Data Firehose to use to convert the
   *          format of your data from JSON. This parameter is required if <code>Enabled</code> is set to
   *          true.</p>
   */
  InputFormatConfiguration?: InputFormatConfiguration;

  /**
   * <p>Specifies the serializer that you want Kinesis Data Firehose to use to convert the
   *          format of your data to the Parquet or ORC format. This parameter is required if
   *             <code>Enabled</code> is set to true.</p>
   */
  OutputFormatConfiguration?: OutputFormatConfiguration;

  /**
   * <p>Defaults to <code>true</code>. Set it to <code>false</code> if you want to disable
   *          format conversion while preserving the configuration details.</p>
   */
  Enabled?: boolean;
}

export namespace DataFormatConversionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataFormatConversionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p> The retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon
 *          S3 prefix.</p>
 */
export interface RetryOptions {
  /**
   * <p>The period of time during which Kinesis Data Firehose retries to deliver data to the
   *          specified Amazon S3 prefix.</p>
   */
  DurationInSeconds?: number;
}

export namespace RetryOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetryOptions): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration of the dynamic partitioning mechanism that creates smaller data sets
 *          from the streaming data by partitioning it based on partition keys. Currently, dynamic
 *          partitioning is only supported for Amazon S3 destinations. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html">https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html</a>
 *          </p>
 */
export interface DynamicPartitioningConfiguration {
  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon
   *          S3 prefix.</p>
   */
  RetryOptions?: RetryOptions;

  /**
   * <p>Specifies that the dynamic partitioning is enabled for this Kinesis Data Firehose
   *          delivery stream.</p>
   */
  Enabled?: boolean;
}

export namespace DynamicPartitioningConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DynamicPartitioningConfiguration): any => ({
    ...obj,
  });
}

export type S3BackupMode = "Disabled" | "Enabled";

/**
 * <p>Describes the configuration of a destination in Amazon S3.</p>
 */
export interface ExtendedS3DestinationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *             AWS Service Namespaces</a>.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  Prefix?: string;

  /**
   * <p>A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  ErrorOutputPrefix?: string;

  /**
   * <p>The buffering option.</p>
   */
  BufferingHints?: BufferingHints;

  /**
   * <p>The compression format. If no value is specified, the default is
   *          UNCOMPRESSED.</p>
   */
  CompressionFormat?: CompressionFormat | string;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>The Amazon S3 backup mode. After you create a delivery stream, you can update it to
   *          enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the
   *          delivery stream to disable it. </p>
   */
  S3BackupMode?: S3BackupMode | string;

  /**
   * <p>The configuration for backup in Amazon S3.</p>
   */
  S3BackupConfiguration?: S3DestinationConfiguration;

  /**
   * <p>The serializer, deserializer, and schema for converting data from the JSON format to
   *          the Parquet or ORC format before writing it to Amazon S3.</p>
   */
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration;

  /**
   * <p>The configuration of the dynamic partitioning mechanism that creates smaller data sets
   *          from the streaming data by partitioning it based on partition keys. Currently, dynamic
   *          partitioning is only supported for Amazon S3 destinations. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html">https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html</a>
   *          </p>
   */
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
}

export namespace ExtendedS3DestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExtendedS3DestinationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the buffering options that can be applied before data is delivered to the HTTP
 *          endpoint destination. Kinesis Data Firehose treats these options as hints, and it might
 *          choose to use more optimal values. The <code>SizeInMBs</code> and
 *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
 *          one of them, you must also provide a value for the other. </p>
 */
export interface HttpEndpointBufferingHints {
  /**
   * <p>Buffer incoming data to the specified size, in MBs, before delivering it to the
   *          destination. The default value is 5. </p>
   *          <p>We recommend setting this parameter to a value greater than the amount of data you
   *          typically ingest into the delivery stream in 10 seconds. For example, if you typically
   *          ingest data at 1 MB/sec, the value should be 10 MB or higher. </p>
   */
  SizeInMBs?: number;

  /**
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering it
   *          to the destination. The default value is 300 (5 minutes). </p>
   */
  IntervalInSeconds?: number;
}

export namespace HttpEndpointBufferingHints {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpEndpointBufferingHints): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers
 *          data.</p>
 */
export interface HttpEndpointConfiguration {
  /**
   * <p>The URL of the HTTP endpoint selected as the destination.</p>
   *          <important>
   *             <p>If you choose an HTTP endpoint as your destination, review and follow the
   *             instructions in the <a href="https://docs.aws.amazon.com/firehose/latest/dev/httpdeliveryrequestresponse.html">Appendix - HTTP Endpoint
   *                Delivery Request and Response Specifications</a>.</p>
   *          </important>
   */
  Url: string | undefined;

  /**
   * <p>The name of the HTTP endpoint selected as the destination.</p>
   */
  Name?: string;

  /**
   * <p>The access key required for Kinesis Firehose to authenticate with the HTTP endpoint
   *          selected as the destination.</p>
   */
  AccessKey?: string;
}

export namespace HttpEndpointConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpEndpointConfiguration): any => ({
    ...obj,
    ...(obj.Url && { Url: SENSITIVE_STRING }),
    ...(obj.AccessKey && { AccessKey: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes the metadata that's delivered to the specified HTTP endpoint
 *          destination.</p>
 */
export interface HttpEndpointCommonAttribute {
  /**
   * <p>The name of the HTTP endpoint common attribute.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The value of the HTTP endpoint common attribute.</p>
   */
  AttributeValue: string | undefined;
}

export namespace HttpEndpointCommonAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpEndpointCommonAttribute): any => ({
    ...obj,
    ...(obj.AttributeName && { AttributeName: SENSITIVE_STRING }),
    ...(obj.AttributeValue && { AttributeValue: SENSITIVE_STRING }),
  });
}

/**
 * <p>The configuration of the HTTP endpoint request.</p>
 */
export interface HttpEndpointRequestConfiguration {
  /**
   * <p>Kinesis Data Firehose uses the content encoding to compress the body of a request before
   *          sending the request to the destination. For more information, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding">Content-Encoding</a> in MDN Web Docs, the official Mozilla documentation.</p>
   */
  ContentEncoding?: ContentEncoding | string;

  /**
   * <p>Describes the metadata sent to the HTTP endpoint destination.</p>
   */
  CommonAttributes?: HttpEndpointCommonAttribute[];
}

export namespace HttpEndpointRequestConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpEndpointRequestConfiguration): any => ({
    ...obj,
    ...(obj.CommonAttributes && {
      CommonAttributes: obj.CommonAttributes.map((item) => HttpEndpointCommonAttribute.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to
 *          the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of
 *          receipt from the specified HTTP endpoint destination.</p>
 */
export interface HttpEndpointRetryOptions {
  /**
   * <p>The total amount of time that Kinesis Data Firehose spends on retries. This duration
   *          starts after the initial attempt to send data to the custom destination via HTTPS endpoint
   *          fails. It doesn't include the periods during which Kinesis Data Firehose waits for
   *          acknowledgment from the specified destination after each attempt. </p>
   */
  DurationInSeconds?: number;
}

export namespace HttpEndpointRetryOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpEndpointRetryOptions): any => ({
    ...obj,
  });
}

export type HttpEndpointS3BackupMode = "AllData" | "FailedDataOnly";

/**
 * <p>Describes the configuration of the HTTP endpoint destination.</p>
 */
export interface HttpEndpointDestinationConfiguration {
  /**
   * <p>The configuration of the HTTP endpoint selected as the destination.</p>
   */
  EndpointConfiguration: HttpEndpointConfiguration | undefined;

  /**
   * <p>The buffering options that can be used before data is delivered to the specified
   *          destination. Kinesis Data Firehose treats these options as hints, and it might choose to
   *          use more optimal values. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code>
   *          parameters are optional. However, if you specify a value for one of them, you must also
   *          provide a value for the other. </p>
   */
  BufferingHints?: HttpEndpointBufferingHints;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * <p>The configuration of the requeste sent to the HTTP endpoint specified as the
   *          destination.</p>
   */
  RequestConfiguration?: HttpEndpointRequestConfiguration;

  /**
   * <p>Describes a data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>Kinesis Data Firehose uses this IAM role for all the permissions that the delivery
   *          stream needs.</p>
   */
  RoleARN?: string;

  /**
   * <p>Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to
   *          the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of
   *          receipt from the specified HTTP endpoint destination.</p>
   */
  RetryOptions?: HttpEndpointRetryOptions;

  /**
   * <p>Describes the S3 bucket backup options for the data that Kinesis Data Firehose delivers
   *          to the HTTP endpoint destination. You can back up all documents (<code>AllData</code>) or
   *          only the documents that Kinesis Data Firehose could not deliver to the specified HTTP
   *          endpoint destination (<code>FailedDataOnly</code>).</p>
   */
  S3BackupMode?: HttpEndpointS3BackupMode | string;

  /**
   * <p>Describes the configuration of a destination in Amazon S3.</p>
   */
  S3Configuration: S3DestinationConfiguration | undefined;
}

export namespace HttpEndpointDestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpEndpointDestinationConfiguration): any => ({
    ...obj,
    ...(obj.EndpointConfiguration && {
      EndpointConfiguration: HttpEndpointConfiguration.filterSensitiveLog(obj.EndpointConfiguration),
    }),
    ...(obj.RequestConfiguration && {
      RequestConfiguration: HttpEndpointRequestConfiguration.filterSensitiveLog(obj.RequestConfiguration),
    }),
  });
}

/**
 * <p>The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as
 *          the source for a delivery stream.</p>
 */
export interface KinesisStreamSourceConfiguration {
  /**
   * <p>The ARN of the source Kinesis data stream. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon
   *             Kinesis Data Streams ARN Format</a>.</p>
   */
  KinesisStreamARN: string | undefined;

  /**
   * <p>The ARN of the role that provides access to the source Kinesis data stream. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">AWS Identity and
   *             Access Management (IAM) ARN Format</a>.</p>
   */
  RoleARN: string | undefined;
}

export namespace KinesisStreamSourceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisStreamSourceConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configures retry behavior in case Kinesis Data Firehose is unable to deliver
 *          documents to Amazon Redshift.</p>
 */
export interface RedshiftRetryOptions {
  /**
   * <p>The length of time during which Kinesis Data Firehose retries delivery after a
   *          failure, starting from the initial request and including the first attempt. The default
   *          value is 3600 seconds (60 minutes). Kinesis Data Firehose does not retry if the value of
   *             <code>DurationInSeconds</code> is 0 (zero) or if the first delivery attempt takes longer
   *          than the current value.</p>
   */
  DurationInSeconds?: number;
}

export namespace RedshiftRetryOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftRetryOptions): any => ({
    ...obj,
  });
}

export type RedshiftS3BackupMode = "Disabled" | "Enabled";

/**
 * <p>Describes the configuration of a destination in Amazon Redshift.</p>
 */
export interface RedshiftDestinationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>The database connection string.</p>
   */
  ClusterJDBCURL: string | undefined;

  /**
   * <p>The <code>COPY</code> command.</p>
   */
  CopyCommand: CopyCommand | undefined;

  /**
   * <p>The name of the user.</p>
   */
  Username: string | undefined;

  /**
   * <p>The user password.</p>
   */
  Password: string | undefined;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to
   *          Amazon Redshift. Default value is 3600 (60 minutes).</p>
   */
  RetryOptions?: RedshiftRetryOptions;

  /**
   * <p>The configuration for the intermediate Amazon S3 location from which Amazon Redshift
   *          obtains data. Restrictions are described in the topic for <a>CreateDeliveryStream</a>.</p>
   *          <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified
   *          in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon
   *          Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these
   *          compression formats.</p>
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>The Amazon S3 backup mode. After you create a delivery stream, you can update it to
   *          enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the
   *          delivery stream to disable it. </p>
   */
  S3BackupMode?: RedshiftS3BackupMode | string;

  /**
   * <p>The configuration for backup in Amazon S3.</p>
   */
  S3BackupConfiguration?: S3DestinationConfiguration;

  /**
   * <p>The CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export namespace RedshiftDestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftDestinationConfiguration): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export type HECEndpointType = "Event" | "Raw";

/**
 * <p>Configures retry behavior in case Kinesis Data Firehose is unable to deliver
 *          documents to Splunk, or if it doesn't receive an acknowledgment from Splunk.</p>
 */
export interface SplunkRetryOptions {
  /**
   * <p>The total amount of time that Kinesis Data Firehose spends on retries. This duration
   *          starts after the initial attempt to send data to Splunk fails. It doesn't include the
   *          periods during which Kinesis Data Firehose waits for acknowledgment from Splunk after each
   *          attempt.</p>
   */
  DurationInSeconds?: number;
}

export namespace SplunkRetryOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SplunkRetryOptions): any => ({
    ...obj,
  });
}

export type SplunkS3BackupMode = "AllEvents" | "FailedEventsOnly";

/**
 * <p>Describes the configuration of a destination in Splunk.</p>
 */
export interface SplunkDestinationConfiguration {
  /**
   * <p>The HTTP Event Collector (HEC) endpoint to which Kinesis Data Firehose sends your
   *          data.</p>
   */
  HECEndpoint: string | undefined;

  /**
   * <p>This type can be either "Raw" or "Event."</p>
   */
  HECEndpointType: HECEndpointType | string | undefined;

  /**
   * <p>This is a GUID that you obtain from your Splunk cluster when you create a new HEC
   *          endpoint.</p>
   */
  HECToken: string | undefined;

  /**
   * <p>The amount of time that Kinesis Data Firehose waits to receive an acknowledgment from
   *          Splunk after it sends it data. At the end of the timeout period, Kinesis Data Firehose
   *          either tries to send the data again or considers it an error, based on your retry
   *          settings.</p>
   */
  HECAcknowledgmentTimeoutInSeconds?: number;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver data to Splunk,
   *          or if it doesn't receive an acknowledgment of receipt from Splunk.</p>
   */
  RetryOptions?: SplunkRetryOptions;

  /**
   * <p>Defines how documents should be delivered to Amazon S3. When set to
   *             <code>FailedEventsOnly</code>, Kinesis Data Firehose writes any data that could not be
   *          indexed to the configured Amazon S3 destination. When set to <code>AllEvents</code>,
   *          Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed
   *          documents to Amazon S3. The default value is <code>FailedEventsOnly</code>.</p>
   *          <p>You can update this backup mode from <code>FailedEventsOnly</code> to
   *             <code>AllEvents</code>. You can't update it from <code>AllEvents</code> to
   *             <code>FailedEventsOnly</code>.</p>
   */
  S3BackupMode?: SplunkS3BackupMode | string;

  /**
   * <p>The configuration for the backup Amazon S3 location.</p>
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export namespace SplunkDestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SplunkDestinationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata that you can assign to a delivery stream, consisting of a key-value
 *          pair.</p>
 */
export interface Tag {
  /**
   * <p>A unique identifier for the tag. Maximum length: 128 characters. Valid characters:
   *          Unicode letters, digits, white space, _ . / = + - % @</p>
   */
  Key: string | undefined;

  /**
   * <p>An optional string, which you can use to describe or define the tag. Maximum length:
   *          256 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - %
   *          @</p>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateDeliveryStreamInput {
  /**
   * <p>The name of the delivery stream. This name must be unique per AWS account in the same
   *          AWS Region. If the delivery streams are in different accounts or different Regions, you can
   *          have multiple delivery streams with the same name.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>The delivery stream type. This parameter can be one of the following
   *          values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DirectPut</code>: Provider applications access the delivery stream
   *                directly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KinesisStreamAsSource</code>: The delivery stream uses a Kinesis data
   *                stream as a source.</p>
   *             </li>
   *          </ul>
   */
  DeliveryStreamType?: DeliveryStreamType | string;

  /**
   * <p>When a Kinesis data stream is used as the source for the delivery stream, a <a>KinesisStreamSourceConfiguration</a> containing the Kinesis data stream Amazon
   *          Resource Name (ARN) and the role ARN for the source stream.</p>
   */
  KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;

  /**
   * <p>Used to specify the type and Amazon Resource Name (ARN) of the KMS key needed for
   *          Server-Side Encryption (SSE).</p>
   */
  DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;

  /**
   * @deprecated
   *
   * <p>[Deprecated]
   *          The destination in Amazon S3. You can specify only one destination.</p>
   */
  S3DestinationConfiguration?: S3DestinationConfiguration;

  /**
   * <p>The destination in Amazon S3. You can specify only one destination.</p>
   */
  ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;

  /**
   * <p>The destination in Amazon Redshift. You can specify only one destination.</p>
   */
  RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration;

  /**
   * <p>The destination in Amazon ES. You can specify only one destination.</p>
   */
  ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;

  /**
   * <p>The destination in Splunk. You can specify only one destination.</p>
   */
  SplunkDestinationConfiguration?: SplunkDestinationConfiguration;

  /**
   * <p>Enables configuring Kinesis Firehose to deliver data to any HTTP endpoint destination.
   *          You can specify only one destination.</p>
   */
  HttpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration;

  /**
   * <p>A set of tags to assign to the delivery stream. A tag is a key-value pair that you can
   *          define and assign to AWS resources. Tags are metadata. For example, you can add friendly
   *          names and descriptions or other types of information that can help you distinguish the
   *          delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
   *             Tags</a> in the AWS Billing and Cost Management User Guide.</p>
   *
   *          <p>You can specify up to 50 tags when creating a delivery stream.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDeliveryStreamInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeliveryStreamInput): any => ({
    ...obj,
    ...(obj.RedshiftDestinationConfiguration && {
      RedshiftDestinationConfiguration: RedshiftDestinationConfiguration.filterSensitiveLog(
        obj.RedshiftDestinationConfiguration
      ),
    }),
    ...(obj.HttpEndpointDestinationConfiguration && {
      HttpEndpointDestinationConfiguration: HttpEndpointDestinationConfiguration.filterSensitiveLog(
        obj.HttpEndpointDestinationConfiguration
      ),
    }),
  });
}

export interface CreateDeliveryStreamOutput {
  /**
   * <p>The ARN of the delivery stream.</p>
   */
  DeliveryStreamARN?: string;
}

export namespace CreateDeliveryStreamOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDeliveryStreamOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified input parameter has a value that is not valid.</p>
 */
export interface InvalidArgumentException extends __SmithyException, $MetadataBearer {
  name: "InvalidArgumentException";
  $fault: "client";
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}

export namespace InvalidArgumentException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidArgumentException): any => ({
    ...obj,
  });
}

/**
 * <p>Kinesis Data Firehose throws this exception when an attempt to put records or to start
 *          or stop delivery stream encryption fails. This happens when the KMS service throws one of
 *          the following exception types: <code>AccessDeniedException</code>,
 *             <code>InvalidStateException</code>, <code>DisabledException</code>, or
 *             <code>NotFoundException</code>.</p>
 */
export interface InvalidKMSResourceException extends __SmithyException, $MetadataBearer {
  name: "InvalidKMSResourceException";
  $fault: "client";
  code?: string;
  message?: string;
}

export namespace InvalidKMSResourceException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidKMSResourceException): any => ({
    ...obj,
  });
}

/**
 * <p>You have already reached the limit for a requested resource.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource is already in use and not available for this operation.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}

export namespace ResourceInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

export interface DeleteDeliveryStreamInput {
  /**
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>Set this to true if you want to delete the delivery stream even if Kinesis Data Firehose
   *          is unable to retire the grant for the CMK. Kinesis Data Firehose might be unable to retire
   *          the grant due to a customer error, such as when the CMK or the grant are in an invalid
   *          state. If you force deletion, you can then use the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> operation to
   *          revoke the grant you gave to Kinesis Data Firehose. If a failure to retire the grant
   *          happens due to an AWS KMS issue, Kinesis Data Firehose keeps retrying the delete
   *          operation.</p>
   *          <p>The default value is false.</p>
   */
  AllowForceDelete?: boolean;
}

export namespace DeleteDeliveryStreamInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDeliveryStreamInput): any => ({
    ...obj,
  });
}

export interface DeleteDeliveryStreamOutput {}

export namespace DeleteDeliveryStreamOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDeliveryStreamOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export enum DeliveryStreamFailureType {
  CREATE_ENI_FAILED = "CREATE_ENI_FAILED",
  CREATE_KMS_GRANT_FAILED = "CREATE_KMS_GRANT_FAILED",
  DELETE_ENI_FAILED = "DELETE_ENI_FAILED",
  DISABLED_KMS_KEY = "DISABLED_KMS_KEY",
  ENI_ACCESS_DENIED = "ENI_ACCESS_DENIED",
  INVALID_KMS_KEY = "INVALID_KMS_KEY",
  KMS_ACCESS_DENIED = "KMS_ACCESS_DENIED",
  KMS_KEY_NOT_FOUND = "KMS_KEY_NOT_FOUND",
  KMS_OPT_IN_REQUIRED = "KMS_OPT_IN_REQUIRED",
  RETIRE_KMS_GRANT_FAILED = "RETIRE_KMS_GRANT_FAILED",
  SECURITY_GROUP_ACCESS_DENIED = "SECURITY_GROUP_ACCESS_DENIED",
  SECURITY_GROUP_NOT_FOUND = "SECURITY_GROUP_NOT_FOUND",
  SUBNET_ACCESS_DENIED = "SUBNET_ACCESS_DENIED",
  SUBNET_NOT_FOUND = "SUBNET_NOT_FOUND",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

/**
 * <p>Provides details in case one of the following operations fails due to an error related
 *          to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>,
 *             <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.</p>
 */
export interface FailureDescription {
  /**
   * <p>The type of error that caused the failure.</p>
   */
  Type: DeliveryStreamFailureType | string | undefined;

  /**
   * <p>A message providing details about the error that caused the failure.</p>
   */
  Details: string | undefined;
}

export namespace FailureDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailureDescription): any => ({
    ...obj,
  });
}

export enum DeliveryStreamEncryptionStatus {
  DISABLED = "DISABLED",
  DISABLING = "DISABLING",
  DISABLING_FAILED = "DISABLING_FAILED",
  ENABLED = "ENABLED",
  ENABLING = "ENABLING",
  ENABLING_FAILED = "ENABLING_FAILED",
}

/**
 * <p>Contains information about the server-side encryption (SSE) status for the delivery
 *          stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can
 *          get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation. </p>
 */
export interface DeliveryStreamEncryptionConfiguration {
  /**
   * <p>If <code>KeyType</code> is <code>CUSTOMER_MANAGED_CMK</code>, this field contains the
   *          ARN of the customer managed CMK. If <code>KeyType</code> is <code>AWS_OWNED_CMK</code>,
   *             <code>DeliveryStreamEncryptionConfiguration</code> doesn't contain a value for
   *             <code>KeyARN</code>.</p>
   */
  KeyARN?: string;

  /**
   * <p>Indicates the type of customer master key (CMK) that is used for encryption. The default
   *          setting is <code>AWS_OWNED_CMK</code>. For more information about CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">Customer
   *             Master Keys (CMKs)</a>.</p>
   */
  KeyType?: KeyType | string;

  /**
   * <p>This is the server-side encryption (SSE) status for the delivery stream. For a full
   *          description of the different values of this status, see <a>StartDeliveryStreamEncryption</a> and <a>StopDeliveryStreamEncryption</a>. If this status is <code>ENABLING_FAILED</code>
   *          or <code>DISABLING_FAILED</code>, it is the status of the most recent attempt to enable or
   *          disable SSE, respectively.</p>
   */
  Status?: DeliveryStreamEncryptionStatus | string;

  /**
   * <p>Provides details in case one of the following operations fails due to an error related
   *          to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>,
   *             <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.</p>
   */
  FailureDescription?: FailureDescription;
}

export namespace DeliveryStreamEncryptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeliveryStreamEncryptionConfiguration): any => ({
    ...obj,
  });
}

export enum DeliveryStreamStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  CREATING_FAILED = "CREATING_FAILED",
  DELETING = "DELETING",
  DELETING_FAILED = "DELETING_FAILED",
}

/**
 * <p>Describes a destination in Amazon S3.</p>
 */
export interface S3DestinationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *             AWS Service Namespaces</a>.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  Prefix?: string;

  /**
   * <p>A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  ErrorOutputPrefix?: string;

  /**
   * <p>The buffering option. If no value is specified, <code>BufferingHints</code> object
   *          default values are used.</p>
   */
  BufferingHints: BufferingHints | undefined;

  /**
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>.</p>
   */
  CompressionFormat: CompressionFormat | string | undefined;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export namespace S3DestinationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3DestinationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the VPC of the Amazon ES destination.</p>
 */
export interface VpcConfigurationDescription {
  /**
   * <p>The IDs of the subnets that Kinesis Data Firehose uses to create ENIs in the VPC of the
   *          Amazon ES destination. Make sure that the routing tables and inbound and outbound rules
   *          allow traffic to flow from the subnets whose IDs are specified here to the subnets that
   *          have the destination Amazon ES endpoints. Kinesis Data Firehose creates at least one ENI in
   *          each of the subnets that are specified here. Do not delete or modify these ENIs.</p>
   *          <p>The number of ENIs that Kinesis Data Firehose creates in the subnets specified here
   *          scales up and down automatically based on throughput. To enable Kinesis Data Firehose to
   *          scale up the number of ENIs to match throughput, ensure that you have sufficient quota. To
   *          help you calculate the quota you need, assume that Kinesis Data Firehose can create up to
   *          three ENIs for this delivery stream for each of the subnets specified here. For more
   *          information about ENI quota, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-enis">Network Interfaces
   *          </a> in the Amazon VPC Quotas topic.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The ARN of the IAM role that the delivery stream uses to create endpoints in the
   *          destination VPC. You can use your existing Kinesis Data Firehose delivery role or you can
   *          specify a new role. In either case, make sure that the role trusts the Kinesis Data
   *          Firehose service principal and that it grants the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeVpcs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeVpcAttribute</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeSubnets</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeSecurityGroups</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeNetworkInterfaces</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:CreateNetworkInterface</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:CreateNetworkInterfacePermission</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DeleteNetworkInterface</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you revoke these permissions after you create the delivery stream, Kinesis Data
   *          Firehose can't scale out by creating more ENIs when necessary. You might therefore see a
   *          degradation in performance.</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>The IDs of the security groups that Kinesis Data Firehose uses when it creates ENIs in
   *          the VPC of the Amazon ES destination. You can use the same security group that the Amazon
   *          ES domain uses or different ones. If you specify different security groups, ensure that
   *          they allow outbound HTTPS traffic to the Amazon ES domain's security group. Also ensure
   *          that the Amazon ES domain's security group allows HTTPS traffic from the security groups
   *          specified here. If you use the same security group for both your delivery stream and the
   *          Amazon ES domain, make sure the security group inbound rule allows HTTPS traffic. For more
   *          information about security group rules, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#SecurityGroupRules">Security group
   *             rules</a> in the Amazon VPC documentation.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the Amazon ES destination's VPC.</p>
   */
  VpcId: string | undefined;
}

export namespace VpcConfigurationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The destination description in Amazon ES.</p>
 */
export interface ElasticsearchDestinationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN?: string;

  /**
   * <p>The ARN of the Amazon ES domain. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   *
   *          <p>Kinesis Data Firehose uses either <code>ClusterEndpoint</code> or <code>DomainARN</code>
   *          to send data to Amazon ES.</p>
   */
  DomainARN?: string;

  /**
   * <p>The endpoint to use when communicating with the cluster. Kinesis Data Firehose uses
   *          either this <code>ClusterEndpoint</code> or the <code>DomainARN</code> field to send data
   *          to Amazon ES.</p>
   */
  ClusterEndpoint?: string;

  /**
   * <p>The Elasticsearch index name.</p>
   */
  IndexName?: string;

  /**
   * <p>The Elasticsearch type name. This applies to Elasticsearch 6.x and lower versions.
   *          For Elasticsearch 7.x, there's no value for <code>TypeName</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>The Elasticsearch index rotation period</p>
   */
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod | string;

  /**
   * <p>The buffering options.</p>
   */
  BufferingHints?: ElasticsearchBufferingHints;

  /**
   * <p>The Amazon ES retry options.</p>
   */
  RetryOptions?: ElasticsearchRetryOptions;

  /**
   * <p>The Amazon S3 backup mode.</p>
   */
  S3BackupMode?: ElasticsearchS3BackupMode | string;

  /**
   * <p>The Amazon S3 destination.</p>
   */
  S3DestinationDescription?: S3DestinationDescription;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * <p>The details of the VPC of the Amazon ES destination.</p>
   */
  VpcConfigurationDescription?: VpcConfigurationDescription;
}

export namespace ElasticsearchDestinationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticsearchDestinationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a destination in Amazon S3.</p>
 */
export interface ExtendedS3DestinationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *             AWS Service Namespaces</a>.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  Prefix?: string;

  /**
   * <p>A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  ErrorOutputPrefix?: string;

  /**
   * <p>The buffering option.</p>
   */
  BufferingHints: BufferingHints | undefined;

  /**
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>.</p>
   */
  CompressionFormat: CompressionFormat | string | undefined;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>The Amazon S3 backup mode.</p>
   */
  S3BackupMode?: S3BackupMode | string;

  /**
   * <p>The configuration for backup in Amazon S3.</p>
   */
  S3BackupDescription?: S3DestinationDescription;

  /**
   * <p>The serializer, deserializer, and schema for converting data from the JSON format to
   *          the Parquet or ORC format before writing it to Amazon S3.</p>
   */
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration;

  /**
   * <p>The configuration of the dynamic partitioning mechanism that creates smaller data sets
   *          from the streaming data by partitioning it based on partition keys. Currently, dynamic
   *          partitioning is only supported for Amazon S3 destinations. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html">https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html</a>
   *          </p>
   */
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
}

export namespace ExtendedS3DestinationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExtendedS3DestinationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the HTTP endpoint selected as the destination. </p>
 */
export interface HttpEndpointDescription {
  /**
   * <p>The URL of the HTTP endpoint selected as the destination.</p>
   */
  Url?: string;

  /**
   * <p>The name of the HTTP endpoint selected as the destination.</p>
   */
  Name?: string;
}

export namespace HttpEndpointDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpEndpointDescription): any => ({
    ...obj,
    ...(obj.Url && { Url: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes the HTTP endpoint destination.</p>
 */
export interface HttpEndpointDestinationDescription {
  /**
   * <p>The configuration of the specified HTTP endpoint destination.</p>
   */
  EndpointConfiguration?: HttpEndpointDescription;

  /**
   * <p>Describes buffering options that can be applied to the data before it is delivered to
   *          the HTTPS endpoint destination. Kinesis Data Firehose teats these options as hints, and it
   *          might choose to use more optimal values. The <code>SizeInMBs</code> and
   *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
   *          one of them, you must also provide a value for the other. </p>
   */
  BufferingHints?: HttpEndpointBufferingHints;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * <p>The configuration of request sent to the HTTP endpoint specified as the
   *          destination.</p>
   */
  RequestConfiguration?: HttpEndpointRequestConfiguration;

  /**
   * <p>Describes a data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>Kinesis Data Firehose uses this IAM role for all the permissions that the delivery
   *          stream needs.</p>
   */
  RoleARN?: string;

  /**
   * <p>Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to
   *          the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of
   *          receipt from the specified HTTP endpoint destination.</p>
   */
  RetryOptions?: HttpEndpointRetryOptions;

  /**
   * <p>Describes the S3 bucket backup options for the data that Kinesis Firehose delivers to
   *          the HTTP endpoint destination. You can back up all documents (<code>AllData</code>) or only
   *          the documents that Kinesis Data Firehose could not deliver to the specified HTTP endpoint
   *          destination (<code>FailedDataOnly</code>).</p>
   */
  S3BackupMode?: HttpEndpointS3BackupMode | string;

  /**
   * <p>Describes a destination in Amazon S3.</p>
   */
  S3DestinationDescription?: S3DestinationDescription;
}

export namespace HttpEndpointDestinationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpEndpointDestinationDescription): any => ({
    ...obj,
    ...(obj.EndpointConfiguration && {
      EndpointConfiguration: HttpEndpointDescription.filterSensitiveLog(obj.EndpointConfiguration),
    }),
    ...(obj.RequestConfiguration && {
      RequestConfiguration: HttpEndpointRequestConfiguration.filterSensitiveLog(obj.RequestConfiguration),
    }),
  });
}

/**
 * <p>Describes a destination in Amazon Redshift.</p>
 */
export interface RedshiftDestinationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>The database connection string.</p>
   */
  ClusterJDBCURL: string | undefined;

  /**
   * <p>The <code>COPY</code> command.</p>
   */
  CopyCommand: CopyCommand | undefined;

  /**
   * <p>The name of the user.</p>
   */
  Username: string | undefined;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to
   *          Amazon Redshift. Default value is 3600 (60 minutes).</p>
   */
  RetryOptions?: RedshiftRetryOptions;

  /**
   * <p>The Amazon S3 destination.</p>
   */
  S3DestinationDescription: S3DestinationDescription | undefined;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>The Amazon S3 backup mode.</p>
   */
  S3BackupMode?: RedshiftS3BackupMode | string;

  /**
   * <p>The configuration for backup in Amazon S3.</p>
   */
  S3BackupDescription?: S3DestinationDescription;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export namespace RedshiftDestinationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftDestinationDescription): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes a destination in Splunk.</p>
 */
export interface SplunkDestinationDescription {
  /**
   * <p>The HTTP Event Collector (HEC) endpoint to which Kinesis Data Firehose sends your
   *          data.</p>
   */
  HECEndpoint?: string;

  /**
   * <p>This type can be either "Raw" or "Event."</p>
   */
  HECEndpointType?: HECEndpointType | string;

  /**
   * <p>A GUID you obtain from your Splunk cluster when you create a new HEC
   *          endpoint.</p>
   */
  HECToken?: string;

  /**
   * <p>The amount of time that Kinesis Data Firehose waits to receive an acknowledgment from
   *          Splunk after it sends it data. At the end of the timeout period, Kinesis Data Firehose
   *          either tries to send the data again or considers it an error, based on your retry
   *          settings.</p>
   */
  HECAcknowledgmentTimeoutInSeconds?: number;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver data to Splunk
   *          or if it doesn't receive an acknowledgment of receipt from Splunk.</p>
   */
  RetryOptions?: SplunkRetryOptions;

  /**
   * <p>Defines how documents should be delivered to Amazon S3. When set to
   *             <code>FailedDocumentsOnly</code>, Kinesis Data Firehose writes any data that could not
   *          be indexed to the configured Amazon S3 destination. When set to <code>AllDocuments</code>,
   *          Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed
   *          documents to Amazon S3. Default value is <code>FailedDocumentsOnly</code>. </p>
   */
  S3BackupMode?: SplunkS3BackupMode | string;

  /**
   * <p>The Amazon S3 destination.></p>
   */
  S3DestinationDescription?: S3DestinationDescription;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export namespace SplunkDestinationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SplunkDestinationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination for a delivery stream.</p>
 */
export interface DestinationDescription {
  /**
   * <p>The ID of the destination.</p>
   */
  DestinationId: string | undefined;

  /**
   * <p>[Deprecated] The destination in Amazon S3.</p>
   */
  S3DestinationDescription?: S3DestinationDescription;

  /**
   * <p>The destination in Amazon S3.</p>
   */
  ExtendedS3DestinationDescription?: ExtendedS3DestinationDescription;

  /**
   * <p>The destination in Amazon Redshift.</p>
   */
  RedshiftDestinationDescription?: RedshiftDestinationDescription;

  /**
   * <p>The destination in Amazon ES.</p>
   */
  ElasticsearchDestinationDescription?: ElasticsearchDestinationDescription;

  /**
   * <p>The destination in Splunk.</p>
   */
  SplunkDestinationDescription?: SplunkDestinationDescription;

  /**
   * <p>Describes the specified HTTP endpoint destination.</p>
   */
  HttpEndpointDestinationDescription?: HttpEndpointDestinationDescription;
}

export namespace DestinationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DestinationDescription): any => ({
    ...obj,
    ...(obj.RedshiftDestinationDescription && {
      RedshiftDestinationDescription: RedshiftDestinationDescription.filterSensitiveLog(
        obj.RedshiftDestinationDescription
      ),
    }),
    ...(obj.HttpEndpointDestinationDescription && {
      HttpEndpointDestinationDescription: HttpEndpointDestinationDescription.filterSensitiveLog(
        obj.HttpEndpointDestinationDescription
      ),
    }),
  });
}

/**
 * <p>Details about a Kinesis data stream used as the source for a Kinesis Data Firehose
 *          delivery stream.</p>
 */
export interface KinesisStreamSourceDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the source Kinesis data stream. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon
   *             Kinesis Data Streams ARN Format</a>.</p>
   */
  KinesisStreamARN?: string;

  /**
   * <p>The ARN of the role used by the source Kinesis data stream. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">AWS Identity and
   *             Access Management (IAM) ARN Format</a>.</p>
   */
  RoleARN?: string;

  /**
   * <p>Kinesis Data Firehose starts retrieving records from the Kinesis data stream starting
   *          with this timestamp.</p>
   */
  DeliveryStartTimestamp?: Date;
}

export namespace KinesisStreamSourceDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisStreamSourceDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a Kinesis data stream used as the source for a Kinesis Data Firehose
 *          delivery stream.</p>
 */
export interface SourceDescription {
  /**
   * <p>The <a>KinesisStreamSourceDescription</a> value for the source Kinesis
   *          data stream.</p>
   */
  KinesisStreamSourceDescription?: KinesisStreamSourceDescription;
}

export namespace SourceDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a delivery stream.</p>
 */
export interface DeliveryStreamDescription {
  /**
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  DeliveryStreamARN: string | undefined;

  /**
   * <p>The status of the delivery stream. If the status of a delivery stream is
   *             <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke
   *             <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p>
   */
  DeliveryStreamStatus: DeliveryStreamStatus | string | undefined;

  /**
   * <p>Provides details in case one of the following operations fails due to an error related
   *          to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>,
   *             <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.</p>
   */
  FailureDescription?: FailureDescription;

  /**
   * <p>Indicates the server-side encryption (SSE) status for the delivery stream.</p>
   */
  DeliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration;

  /**
   * <p>The delivery stream type. This can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DirectPut</code>: Provider applications access the delivery stream
   *                directly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KinesisStreamAsSource</code>: The delivery stream uses a Kinesis data
   *                stream as a source.</p>
   *             </li>
   *          </ul>
   */
  DeliveryStreamType: DeliveryStreamType | string | undefined;

  /**
   * <p>Each time the destination is updated for a delivery stream, the version ID is
   *          changed, and the current version ID is required when updating the destination. This is so
   *          that the service knows it is applying the changes to the correct version of the delivery
   *          stream.</p>
   */
  VersionId: string | undefined;

  /**
   * <p>The date and time that the delivery stream was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * <p>The date and time that the delivery stream was last updated.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * <p>If the <code>DeliveryStreamType</code> parameter is
   *             <code>KinesisStreamAsSource</code>, a <a>SourceDescription</a> object
   *          describing the source Kinesis data stream.</p>
   */
  Source?: SourceDescription;

  /**
   * <p>The destinations.</p>
   */
  Destinations: DestinationDescription[] | undefined;

  /**
   * <p>Indicates whether there are more destinations available to list.</p>
   */
  HasMoreDestinations: boolean | undefined;
}

export namespace DeliveryStreamDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeliveryStreamDescription): any => ({
    ...obj,
    ...(obj.Destinations && {
      Destinations: obj.Destinations.map((item) => DestinationDescription.filterSensitiveLog(item)),
    }),
  });
}

export interface DescribeDeliveryStreamInput {
  /**
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>The limit on the number of destinations to return. You can have one destination per
   *          delivery stream.</p>
   */
  Limit?: number;

  /**
   * <p>The ID of the destination to start returning the destination information. Kinesis
   *          Data Firehose supports one destination per delivery stream.</p>
   */
  ExclusiveStartDestinationId?: string;
}

export namespace DescribeDeliveryStreamInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeliveryStreamInput): any => ({
    ...obj,
  });
}

export interface DescribeDeliveryStreamOutput {
  /**
   * <p>Information about the delivery stream.</p>
   */
  DeliveryStreamDescription: DeliveryStreamDescription | undefined;
}

export namespace DescribeDeliveryStreamOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDeliveryStreamOutput): any => ({
    ...obj,
    ...(obj.DeliveryStreamDescription && {
      DeliveryStreamDescription: DeliveryStreamDescription.filterSensitiveLog(obj.DeliveryStreamDescription),
    }),
  });
}

/**
 * <p>Describes an update for a destination in Amazon S3.</p>
 */
export interface S3DestinationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN?: string;

  /**
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *             AWS Service Namespaces</a>.</p>
   */
  BucketARN?: string;

  /**
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  Prefix?: string;

  /**
   * <p>A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  ErrorOutputPrefix?: string;

  /**
   * <p>The buffering option. If no value is specified, <code>BufferingHints</code> object
   *          default values are used.</p>
   */
  BufferingHints?: BufferingHints;

  /**
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>.</p>
   *          <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified
   *          for Amazon Redshift destinations because they are not supported by the Amazon Redshift
   *             <code>COPY</code> operation that reads from the S3 bucket.</p>
   */
  CompressionFormat?: CompressionFormat | string;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>The CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export namespace S3DestinationUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3DestinationUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an update for a destination in Amazon ES.</p>
 */
export interface ElasticsearchDestinationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose
   *          for calling the Amazon ES Configuration API and for indexing documents. For more
   *          information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data
   *             Firehose Access to an Amazon S3 Destination</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *             AWS Service Namespaces</a>.</p>
   */
  RoleARN?: string;

  /**
   * <p>The ARN of the Amazon ES domain. The IAM role must have permissions
   *             for <code>DescribeElasticsearchDomain</code>, <code>DescribeElasticsearchDomains</code>,
   *          and <code>DescribeElasticsearchDomainConfig</code> after assuming the IAM role specified in
   *             <code>RoleARN</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *             AWS Service Namespaces</a>.</p>
   *
   *          <p>Specify either <code>ClusterEndpoint</code> or <code>DomainARN</code>.</p>
   */
  DomainARN?: string;

  /**
   * <p>The endpoint to use when communicating with the cluster. Specify either this
   *             <code>ClusterEndpoint</code> or the <code>DomainARN</code> field.</p>
   */
  ClusterEndpoint?: string;

  /**
   * <p>The Elasticsearch index name.</p>
   */
  IndexName?: string;

  /**
   * <p>The Elasticsearch type name. For Elasticsearch 6.x, there can be only one type per
   *          index. If you try to specify a new type for an existing index that already has another
   *          type, Kinesis Data Firehose returns an error during runtime.</p>
   *
   *          <p>If you upgrade Elasticsearch from 6.x to 7.x and don’t update your delivery stream,
   *          Kinesis Data Firehose still delivers data to Elasticsearch with the old index name and type
   *          name. If you want to update your delivery stream with a new index name, provide an empty
   *          string for <code>TypeName</code>. </p>
   */
  TypeName?: string;

  /**
   * <p>The Elasticsearch index rotation period. Index rotation appends a timestamp to
   *             <code>IndexName</code> to facilitate the expiration of old data. For more information,
   *          see <a href="https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation">Index Rotation for the
   *             Amazon ES Destination</a>. Default value is <code>OneDay</code>.</p>
   */
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod | string;

  /**
   * <p>The buffering options. If no value is specified,
   *             <code>ElasticsearchBufferingHints</code> object default values are used. </p>
   */
  BufferingHints?: ElasticsearchBufferingHints;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to
   *          Amazon ES. The default value is 300 (5 minutes).</p>
   */
  RetryOptions?: ElasticsearchRetryOptions;

  /**
   * <p>The Amazon S3 destination.</p>
   */
  S3Update?: S3DestinationUpdate;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>The CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export namespace ElasticsearchDestinationUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ElasticsearchDestinationUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an update for a destination in Amazon S3.</p>
 */
export interface ExtendedS3DestinationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN?: string;

  /**
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *             AWS Service Namespaces</a>.</p>
   */
  BucketARN?: string;

  /**
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  Prefix?: string;

  /**
   * <p>A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  ErrorOutputPrefix?: string;

  /**
   * <p>The buffering option.</p>
   */
  BufferingHints?: BufferingHints;

  /**
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>. </p>
   */
  CompressionFormat?: CompressionFormat | string;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>You can update a delivery stream to enable Amazon S3 backup if it is disabled. If
   *          backup is enabled, you can't update the delivery stream to disable it. </p>
   */
  S3BackupMode?: S3BackupMode | string;

  /**
   * <p>The Amazon S3 destination for backup.</p>
   */
  S3BackupUpdate?: S3DestinationUpdate;

  /**
   * <p>The serializer, deserializer, and schema for converting data from the JSON format to
   *          the Parquet or ORC format before writing it to Amazon S3.</p>
   */
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration;

  /**
   * <p>The configuration of the dynamic partitioning mechanism that creates smaller data sets
   *          from the streaming data by partitioning it based on partition keys. Currently, dynamic
   *          partitioning is only supported for Amazon S3 destinations. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html">https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html</a>
   *          </p>
   */
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
}

export namespace ExtendedS3DestinationUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExtendedS3DestinationUpdate): any => ({
    ...obj,
  });
}

export interface ListDeliveryStreamsInput {
  /**
   * <p>The maximum number of delivery streams to list. The default value is 10.</p>
   */
  Limit?: number;

  /**
   * <p>The delivery stream type. This can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DirectPut</code>: Provider applications access the delivery stream
   *                directly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KinesisStreamAsSource</code>: The delivery stream uses a Kinesis data
   *                stream as a source.</p>
   *             </li>
   *          </ul>
   *          <p>This parameter is optional. If this parameter is omitted, delivery streams of all
   *          types are returned.</p>
   */
  DeliveryStreamType?: DeliveryStreamType | string;

  /**
   * <p>The list of delivery streams returned by this call to
   *             <code>ListDeliveryStreams</code> will start with the delivery stream whose name comes
   *          alphabetically immediately after the name you specify in
   *             <code>ExclusiveStartDeliveryStreamName</code>.</p>
   */
  ExclusiveStartDeliveryStreamName?: string;
}

export namespace ListDeliveryStreamsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeliveryStreamsInput): any => ({
    ...obj,
  });
}

export interface ListDeliveryStreamsOutput {
  /**
   * <p>The names of the delivery streams.</p>
   */
  DeliveryStreamNames: string[] | undefined;

  /**
   * <p>Indicates whether there are more delivery streams available to list.</p>
   */
  HasMoreDeliveryStreams: boolean | undefined;
}

export namespace ListDeliveryStreamsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDeliveryStreamsOutput): any => ({
    ...obj,
  });
}

export interface ListTagsForDeliveryStreamInput {
  /**
   * <p>The name of the delivery stream whose tags you want to list.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>The key to use as the starting point for the list of tags. If you set this parameter,
   *             <code>ListTagsForDeliveryStream</code> gets all tags that occur after
   *             <code>ExclusiveStartTagKey</code>.</p>
   */
  ExclusiveStartTagKey?: string;

  /**
   * <p>The number of tags to return. If this number is less than the total number of tags
   *          associated with the delivery stream, <code>HasMoreTags</code> is set to <code>true</code>
   *          in the response. To list additional tags, set <code>ExclusiveStartTagKey</code> to the last
   *          key in the response. </p>
   */
  Limit?: number;
}

export namespace ListTagsForDeliveryStreamInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForDeliveryStreamInput): any => ({
    ...obj,
  });
}

export interface ListTagsForDeliveryStreamOutput {
  /**
   * <p>A list of tags associated with <code>DeliveryStreamName</code>, starting with the
   *          first tag after <code>ExclusiveStartTagKey</code> and up to the specified
   *             <code>Limit</code>.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>If this is <code>true</code> in the response, more tags are available. To list the
   *          remaining tags, set <code>ExclusiveStartTagKey</code> to the key of the last tag returned
   *          and call <code>ListTagsForDeliveryStream</code> again.</p>
   */
  HasMoreTags: boolean | undefined;
}

export namespace ListTagsForDeliveryStreamOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForDeliveryStreamOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The unit of data in a delivery stream.</p>
 */
export interface _Record {
  /**
   * <p>The data blob, which is base64-encoded when the blob is serialized. The maximum size
   *          of the data blob, before base64-encoding, is 1,000 KiB.</p>
   */
  Data: Uint8Array | undefined;
}

export namespace _Record {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: _Record): any => ({
    ...obj,
  });
}

export interface PutRecordInput {
  /**
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>The record.</p>
   */
  Record: _Record | undefined;
}

export namespace PutRecordInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRecordInput): any => ({
    ...obj,
  });
}

export interface PutRecordOutput {
  /**
   * <p>The ID of the record.</p>
   */
  RecordId: string | undefined;

  /**
   * <p>Indicates whether server-side encryption (SSE) was enabled during this operation.</p>
   */
  Encrypted?: boolean;
}

export namespace PutRecordOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRecordOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The service is unavailable. Back off and retry the operation. If you continue to see
 *          the exception, throughput limits for the delivery stream may have been exceeded. For more
 *          information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose
 *          Limits</a>.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

export interface PutRecordBatchInput {
  /**
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>One or more records.</p>
   */
  Records: _Record[] | undefined;
}

export namespace PutRecordBatchInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRecordBatchInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result for an individual record from a <a>PutRecordBatch</a>
 *          request. If the record is successfully added to your delivery stream, it receives a record
 *          ID. If the record fails to be added to your delivery stream, the result includes an error
 *          code and an error message.</p>
 */
export interface PutRecordBatchResponseEntry {
  /**
   * <p>The ID of the record.</p>
   */
  RecordId?: string;

  /**
   * <p>The error code for an individual record result.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message for an individual record result.</p>
   */
  ErrorMessage?: string;
}

export namespace PutRecordBatchResponseEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRecordBatchResponseEntry): any => ({
    ...obj,
  });
}

export interface PutRecordBatchOutput {
  /**
   * <p>The number of records that might have failed processing. This number might be greater
   *          than 0 even if the <a>PutRecordBatch</a> call succeeds. Check
   *             <code>FailedPutCount</code> to determine whether there are records that you need to
   *          resend.</p>
   */
  FailedPutCount: number | undefined;

  /**
   * <p>Indicates whether server-side encryption (SSE) was enabled during this operation.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The results array. For each record, the index of the response element is the same as
   *          the index used in the request array.</p>
   */
  RequestResponses: PutRecordBatchResponseEntry[] | undefined;
}

export namespace PutRecordBatchOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRecordBatchOutput): any => ({
    ...obj,
  });
}

export interface StartDeliveryStreamEncryptionInput {
  /**
   * <p>The name of the delivery stream for which you want to enable server-side encryption
   *          (SSE).</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>Used to specify the type and Amazon Resource Name (ARN) of the KMS key needed for
   *          Server-Side Encryption (SSE).</p>
   */
  DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
}

export namespace StartDeliveryStreamEncryptionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDeliveryStreamEncryptionInput): any => ({
    ...obj,
  });
}

export interface StartDeliveryStreamEncryptionOutput {}

export namespace StartDeliveryStreamEncryptionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDeliveryStreamEncryptionOutput): any => ({
    ...obj,
  });
}

export interface StopDeliveryStreamEncryptionInput {
  /**
   * <p>The name of the delivery stream for which you want to disable server-side encryption
   *          (SSE).</p>
   */
  DeliveryStreamName: string | undefined;
}

export namespace StopDeliveryStreamEncryptionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDeliveryStreamEncryptionInput): any => ({
    ...obj,
  });
}

export interface StopDeliveryStreamEncryptionOutput {}

export namespace StopDeliveryStreamEncryptionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDeliveryStreamEncryptionOutput): any => ({
    ...obj,
  });
}

export interface TagDeliveryStreamInput {
  /**
   * <p>The name of the delivery stream to which you want to add the tags.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>A set of key-value pairs to use to create the tags.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagDeliveryStreamInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagDeliveryStreamInput): any => ({
    ...obj,
  });
}

export interface TagDeliveryStreamOutput {}

export namespace TagDeliveryStreamOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagDeliveryStreamOutput): any => ({
    ...obj,
  });
}

export interface UntagDeliveryStreamInput {
  /**
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>A list of tag keys. Each corresponding tag is removed from the delivery
   *          stream.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagDeliveryStreamInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagDeliveryStreamInput): any => ({
    ...obj,
  });
}

export interface UntagDeliveryStreamOutput {}

export namespace UntagDeliveryStreamOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagDeliveryStreamOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Updates the specified HTTP endpoint destination.</p>
 */
export interface HttpEndpointDestinationUpdate {
  /**
   * <p>Describes the configuration of the HTTP endpoint destination.</p>
   */
  EndpointConfiguration?: HttpEndpointConfiguration;

  /**
   * <p>Describes buffering options that can be applied to the data before it is delivered to
   *          the HTTPS endpoint destination. Kinesis Data Firehose teats these options as hints, and it
   *          might choose to use more optimal values. The <code>SizeInMBs</code> and
   *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
   *          one of them, you must also provide a value for the other. </p>
   */
  BufferingHints?: HttpEndpointBufferingHints;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * <p>The configuration of the request sent to the HTTP endpoint specified as the
   *          destination.</p>
   */
  RequestConfiguration?: HttpEndpointRequestConfiguration;

  /**
   * <p>Describes a data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>Kinesis Data Firehose uses this IAM role for all the permissions that the delivery
   *          stream needs.</p>
   */
  RoleARN?: string;

  /**
   * <p>Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to
   *          the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of
   *          receipt from the specified HTTP endpoint destination.</p>
   */
  RetryOptions?: HttpEndpointRetryOptions;

  /**
   * <p>Describes the S3 bucket backup options for the data that Kinesis Firehose delivers to
   *          the HTTP endpoint destination. You can back up all documents (<code>AllData</code>) or only
   *          the documents that Kinesis Data Firehose could not deliver to the specified HTTP endpoint
   *          destination (<code>FailedDataOnly</code>).</p>
   */
  S3BackupMode?: HttpEndpointS3BackupMode | string;

  /**
   * <p>Describes an update for a destination in Amazon S3.</p>
   */
  S3Update?: S3DestinationUpdate;
}

export namespace HttpEndpointDestinationUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpEndpointDestinationUpdate): any => ({
    ...obj,
    ...(obj.EndpointConfiguration && {
      EndpointConfiguration: HttpEndpointConfiguration.filterSensitiveLog(obj.EndpointConfiguration),
    }),
    ...(obj.RequestConfiguration && {
      RequestConfiguration: HttpEndpointRequestConfiguration.filterSensitiveLog(obj.RequestConfiguration),
    }),
  });
}

/**
 * <p>Describes an update for a destination in Amazon Redshift.</p>
 */
export interface RedshiftDestinationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN?: string;

  /**
   * <p>The database connection string.</p>
   */
  ClusterJDBCURL?: string;

  /**
   * <p>The <code>COPY</code> command.</p>
   */
  CopyCommand?: CopyCommand;

  /**
   * <p>The name of the user.</p>
   */
  Username?: string;

  /**
   * <p>The user password.</p>
   */
  Password?: string;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to
   *          Amazon Redshift. Default value is 3600 (60 minutes).</p>
   */
  RetryOptions?: RedshiftRetryOptions;

  /**
   * <p>The Amazon S3 destination.</p>
   *          <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified
   *          in <code>RedshiftDestinationUpdate.S3Update</code> because the Amazon Redshift
   *             <code>COPY</code> operation that reads from the S3 bucket doesn't support these
   *          compression formats.</p>
   */
  S3Update?: S3DestinationUpdate;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>You can update a delivery stream to enable Amazon S3 backup if it is disabled. If
   *          backup is enabled, you can't update the delivery stream to disable it. </p>
   */
  S3BackupMode?: RedshiftS3BackupMode | string;

  /**
   * <p>The Amazon S3 destination for backup.</p>
   */
  S3BackupUpdate?: S3DestinationUpdate;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export namespace RedshiftDestinationUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedshiftDestinationUpdate): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes an update for a destination in Splunk.</p>
 */
export interface SplunkDestinationUpdate {
  /**
   * <p>The HTTP Event Collector (HEC) endpoint to which Kinesis Data Firehose sends your
   *          data.</p>
   */
  HECEndpoint?: string;

  /**
   * <p>This type can be either "Raw" or "Event."</p>
   */
  HECEndpointType?: HECEndpointType | string;

  /**
   * <p>A GUID that you obtain from your Splunk cluster when you create a new HEC
   *          endpoint.</p>
   */
  HECToken?: string;

  /**
   * <p>The amount of time that Kinesis Data Firehose waits to receive an acknowledgment from
   *          Splunk after it sends data. At the end of the timeout period, Kinesis Data Firehose either
   *          tries to send the data again or considers it an error, based on your retry
   *          settings.</p>
   */
  HECAcknowledgmentTimeoutInSeconds?: number;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver data to Splunk
   *          or if it doesn't receive an acknowledgment of receipt from Splunk.</p>
   */
  RetryOptions?: SplunkRetryOptions;

  /**
   * <p>Specifies how you want Kinesis Data Firehose to back up documents to Amazon S3. When
   *          set to <code>FailedDocumentsOnly</code>, Kinesis Data Firehose writes any data that could
   *          not be indexed to the configured Amazon S3 destination. When set to <code>AllEvents</code>,
   *          Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed
   *          documents to Amazon S3. The default value is <code>FailedEventsOnly</code>.</p>
   *          <p>You can update this backup mode from <code>FailedEventsOnly</code> to
   *             <code>AllEvents</code>. You can't update it from <code>AllEvents</code> to
   *             <code>FailedEventsOnly</code>.</p>
   */
  S3BackupMode?: SplunkS3BackupMode | string;

  /**
   * <p>Your update to the configuration of the backup Amazon S3 location.</p>
   */
  S3Update?: S3DestinationUpdate;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

export namespace SplunkDestinationUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SplunkDestinationUpdate): any => ({
    ...obj,
  });
}

export interface UpdateDestinationInput {
  /**
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>Obtain this value from the <code>VersionId</code> result of <a>DeliveryStreamDescription</a>. This value is required, and helps the service
   *          perform conditional operations. For example, if there is an interleaving update and this
   *          value is null, then the update destination fails. After the update is successful, the
   *             <code>VersionId</code> value is updated. The service then performs a merge of the old
   *          configuration with the new configuration.</p>
   */
  CurrentDeliveryStreamVersionId: string | undefined;

  /**
   * <p>The ID of the destination.</p>
   */
  DestinationId: string | undefined;

  /**
   * @deprecated
   *
   * <p>[Deprecated] Describes an update for a destination in Amazon S3.</p>
   */
  S3DestinationUpdate?: S3DestinationUpdate;

  /**
   * <p>Describes an update for a destination in Amazon S3.</p>
   */
  ExtendedS3DestinationUpdate?: ExtendedS3DestinationUpdate;

  /**
   * <p>Describes an update for a destination in Amazon Redshift.</p>
   */
  RedshiftDestinationUpdate?: RedshiftDestinationUpdate;

  /**
   * <p>Describes an update for a destination in Amazon ES.</p>
   */
  ElasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate;

  /**
   * <p>Describes an update for a destination in Splunk.</p>
   */
  SplunkDestinationUpdate?: SplunkDestinationUpdate;

  /**
   * <p>Describes an update to the specified HTTP endpoint destination.</p>
   */
  HttpEndpointDestinationUpdate?: HttpEndpointDestinationUpdate;
}

export namespace UpdateDestinationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDestinationInput): any => ({
    ...obj,
    ...(obj.RedshiftDestinationUpdate && {
      RedshiftDestinationUpdate: RedshiftDestinationUpdate.filterSensitiveLog(obj.RedshiftDestinationUpdate),
    }),
    ...(obj.HttpEndpointDestinationUpdate && {
      HttpEndpointDestinationUpdate: HttpEndpointDestinationUpdate.filterSensitiveLog(
        obj.HttpEndpointDestinationUpdate
      ),
    }),
  });
}

export interface UpdateDestinationOutput {}

export namespace UpdateDestinationOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDestinationOutput): any => ({
    ...obj,
  });
}
