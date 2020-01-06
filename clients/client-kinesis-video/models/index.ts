import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum APIName {
  GET_DASH_STREAMING_SESSION_URL = "GET_DASH_STREAMING_SESSION_URL",
  GET_HLS_STREAMING_SESSION_URL = "GET_HLS_STREAMING_SESSION_URL",
  GET_MEDIA = "GET_MEDIA",
  GET_MEDIA_FOR_FRAGMENT_LIST = "GET_MEDIA_FOR_FRAGMENT_LIST",
  LIST_FRAGMENTS = "LIST_FRAGMENTS",
  PUT_MEDIA = "PUT_MEDIA"
}

/**
 *
 *          <p>The number of streams created for the account is too high.</p>
 *
 */
export interface AccountStreamLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "AccountStreamLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace AccountStreamLimitExceededException {
  export function isa(o: any): o is AccountStreamLimitExceededException {
    return _smithy.isa(o, "AccountStreamLimitExceededException");
  }
}

/**
 *
 *          <p>Kinesis Video Streams has throttled the
 *       request because you have exceeded the limit of allowed client calls. Try making the call later.</p>
 *
 */
export interface ClientLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ClientLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ClientLimitExceededException {
  export function isa(o: any): o is ClientLimitExceededException {
    return _smithy.isa(o, "ClientLimitExceededException");
  }
}

export enum ComparisonOperator {
  BEGINS_WITH = "BEGINS_WITH"
}

export interface CreateStreamInput {
  __type?: "CreateStreamInput";
  /**
   *
   *          <p>The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data
   *       in a data store that is associated with the stream.</p>
   *          <p>The default value is 0, indicating that the stream does not persist data.</p>
   *          <p>When the <code>DataRetentionInHours</code> value is 0, consumers can still consume the fragments that remain in the service host buffer,
   *       which has a retention time limit of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the buffer when either limit is reached.</p>
   *
   */
  DataRetentionInHours?: number;

  /**
   *
   *          <p>The name of the device that is writing to the stream. </p>
   *          <note>
   *             <p>In the current implementation, Kinesis Video Streams does not use this name.</p>
   *          </note>
   *
   */
  DeviceName?: string;

  /**
   *
   *          <p>The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video
   *       Streams to use to encrypt stream data.</p>
   *          <p>If no key ID is specified, the default, Kinesis Video-managed key (<code>aws/kinesisvideo</code>) is used.</p>
   *          <p>
   *       For more information, see
   *       <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">DescribeKey</a>.
   *
   *     </p>
   *
   */
  KmsKeyId?: string;

  /**
   *
   *          <p>The media type of the stream. Consumers of the stream can use this information
   *       when processing the stream.
   *       For more information about media types, see
   *       <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>.
   *
   *       If you choose to specify the <code>MediaType</code>, see
   *       <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a> for guidelines.</p>
   *
   *
   *          <p>This parameter is optional; the default value is <code>null</code> (or empty in
   *       JSON).</p>
   *
   */
  MediaType?: string;

  /**
   *
   *          <p>A name for the stream that you are creating.</p>
   *          <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>
   *
   */
  StreamName: string | undefined;

  /**
   *
   *          <p>A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).</p>
   *
   */
  Tags?: { [key: string]: string };
}

export namespace CreateStreamInput {
  export function isa(o: any): o is CreateStreamInput {
    return _smithy.isa(o, "CreateStreamInput");
  }
}

export interface CreateStreamOutput extends $MetadataBearer {
  __type?: "CreateStreamOutput";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the stream.</p>
   *
   */
  StreamARN?: string;
}

export namespace CreateStreamOutput {
  export function isa(o: any): o is CreateStreamOutput {
    return _smithy.isa(o, "CreateStreamOutput");
  }
}

export interface DeleteStreamInput {
  __type?: "DeleteStreamInput";
  /**
   *
   *          <p>Optional: The version of the stream that you want to delete. </p>
   *          <p>Specify the
   *     version as a safeguard to ensure that your are deleting the correct stream.
   *     To get the stream version, use the
   *       <code>DescribeStream</code> API.</p>
   *          <p>If not specified, only the <code>CreationTime</code> is checked before deleting the stream.</p>
   *
   *
   */
  CurrentVersion?: string;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the stream that you want to delete. </p>
   *
   */
  StreamARN: string | undefined;
}

export namespace DeleteStreamInput {
  export function isa(o: any): o is DeleteStreamInput {
    return _smithy.isa(o, "DeleteStreamInput");
  }
}

export interface DeleteStreamOutput extends $MetadataBearer {
  __type?: "DeleteStreamOutput";
}

export namespace DeleteStreamOutput {
  export function isa(o: any): o is DeleteStreamOutput {
    return _smithy.isa(o, "DeleteStreamOutput");
  }
}

export interface DescribeStreamInput {
  __type?: "DescribeStreamInput";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the stream.</p>
   *
   */
  StreamARN?: string;

  /**
   *
   *          <p>The name of the stream.</p>
   *
   */
  StreamName?: string;
}

export namespace DescribeStreamInput {
  export function isa(o: any): o is DescribeStreamInput {
    return _smithy.isa(o, "DescribeStreamInput");
  }
}

export interface DescribeStreamOutput extends $MetadataBearer {
  __type?: "DescribeStreamOutput";
  /**
   *
   *          <p>An object that describes the stream.</p>
   *
   */
  StreamInfo?: StreamInfo;
}

export namespace DescribeStreamOutput {
  export function isa(o: any): o is DescribeStreamOutput {
    return _smithy.isa(o, "DescribeStreamOutput");
  }
}

/**
 *
 *          <p>Not implemented. </p>
 *
 */
export interface DeviceStreamLimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DeviceStreamLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace DeviceStreamLimitExceededException {
  export function isa(o: any): o is DeviceStreamLimitExceededException {
    return _smithy.isa(o, "DeviceStreamLimitExceededException");
  }
}

export interface GetDataEndpointInput {
  __type?: "GetDataEndpointInput";
  /**
   *
   *          <p>The name of the API action for which to get an endpoint.</p>
   *
   */
  APIName: APIName | string | undefined;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for. You
   *       must specify either this parameter or a <code>StreamName</code> in the request. </p>
   *
   */
  StreamARN?: string;

  /**
   *
   *          <p>The name of the stream that you want to get the endpoint for.
   *       You must specify either this parameter or a <code>StreamARN</code> in the request.</p>
   *
   */
  StreamName?: string;
}

export namespace GetDataEndpointInput {
  export function isa(o: any): o is GetDataEndpointInput {
    return _smithy.isa(o, "GetDataEndpointInput");
  }
}

export interface GetDataEndpointOutput extends $MetadataBearer {
  __type?: "GetDataEndpointOutput";
  /**
   *
   *          <p>The endpoint value. To read data from the stream or to write data to it, specify this endpoint
   *       in your application.</p>
   *
   */
  DataEndpoint?: string;
}

export namespace GetDataEndpointOutput {
  export function isa(o: any): o is GetDataEndpointOutput {
    return _smithy.isa(o, "GetDataEndpointOutput");
  }
}

/**
 *
 *          <p>The value for this input parameter is invalid.</p>
 *
 */
export interface InvalidArgumentException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidArgumentException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArgumentException {
  export function isa(o: any): o is InvalidArgumentException {
    return _smithy.isa(o, "InvalidArgumentException");
  }
}

/**
 *
 *          <p>Not implemented.</p>
 *
 */
export interface InvalidDeviceException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDeviceException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDeviceException {
  export function isa(o: any): o is InvalidDeviceException {
    return _smithy.isa(o, "InvalidDeviceException");
  }
}

/**
 *
 *          <p>The format of the <code>StreamARN</code> is invalid.</p>
 *
 */
export interface InvalidResourceFormatException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidResourceFormatException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidResourceFormatException {
  export function isa(o: any): o is InvalidResourceFormatException {
    return _smithy.isa(o, "InvalidResourceFormatException");
  }
}

export interface ListStreamsInput {
  __type?: "ListStreamsInput";
  /**
   *
   *          <p>The maximum number of streams to return in the response. The default is 10,000.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *          <p>If you specify this parameter, when the result of a <code>ListStreams</code> operation is truncated, the call returns
   *       the <code>NextToken</code> in the response. To get another batch of streams, provide this token in your next
   *       request.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>Optional: Returns only streams that satisfy a specific condition. Currently, you can specify only the prefix of a stream name as a condition.
   *     </p>
   *
   */
  StreamNameCondition?: StreamNameCondition;
}

export namespace ListStreamsInput {
  export function isa(o: any): o is ListStreamsInput {
    return _smithy.isa(o, "ListStreamsInput");
  }
}

export interface ListStreamsOutput extends $MetadataBearer {
  __type?: "ListStreamsOutput";
  /**
   *
   *          <p>If the response is truncated, the call returns this element
   *       with a token. To get the next batch of streams, use this token in your next request.
   *
   *     </p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>An array of <code>StreamInfo</code> objects.</p>
   *
   */
  StreamInfoList?: Array<StreamInfo>;
}

export namespace ListStreamsOutput {
  export function isa(o: any): o is ListStreamsOutput {
    return _smithy.isa(o, "ListStreamsOutput");
  }
}

export interface ListTagsForStreamInput {
  __type?: "ListTagsForStreamInput";
  /**
   *
   *          <p>If you specify this parameter and the result of a <code>ListTagsForStream</code> call is truncated, the response includes a token that you can use in the next request to fetch the
   *       next batch of tags.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the stream that you want to list tags for.</p>
   *
   */
  StreamARN?: string;

  /**
   *
   *          <p>The name of the stream that you want to list tags for.</p>
   *
   */
  StreamName?: string;
}

export namespace ListTagsForStreamInput {
  export function isa(o: any): o is ListTagsForStreamInput {
    return _smithy.isa(o, "ListTagsForStreamInput");
  }
}

export interface ListTagsForStreamOutput extends $MetadataBearer {
  __type?: "ListTagsForStreamOutput";
  /**
   *
   *          <p>If you specify this parameter and the result of a <code>ListTags</code> call is truncated,
   *       the response includes a token that you can use in the next request to fetch the
   *       next set of tags.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>A map of tag keys and values associated with the specified stream.</p>
   *
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForStreamOutput {
  export function isa(o: any): o is ListTagsForStreamOutput {
    return _smithy.isa(o, "ListTagsForStreamOutput");
  }
}

/**
 *
 *          <p>The caller is not authorized to perform this operation.</p>
 *
 */
export interface NotAuthorizedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "NotAuthorizedException";
  $fault: "client";
  Message?: string;
}

export namespace NotAuthorizedException {
  export function isa(o: any): o is NotAuthorizedException {
    return _smithy.isa(o, "NotAuthorizedException");
  }
}

/**
 *
 *          <p>The stream is currently not available for this operation.</p>
 *
 */
export interface ResourceInUseException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return _smithy.isa(o, "ResourceInUseException");
  }
}

/**
 *
 *          <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 */
export interface ResourceNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

export enum Status {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  UPDATING = "UPDATING"
}

/**
 *
 *          <p>An object describing a Kinesis video stream.</p>
 *
 */
export interface StreamInfo {
  __type?: "StreamInfo";
  /**
   *
   *          <p>A time stamp that indicates when the stream was created.</p>
   *
   */
  CreationTime?: Date;

  /**
   *
   *          <p>How long the stream retains data, in hours.</p>
   *
   */
  DataRetentionInHours?: number;

  /**
   *
   *          <p>The name of the device that is associated with the stream.</p>
   *
   */
  DeviceName?: string;

  /**
   *
   *          <p>The ID of the AWS Key Management Service (AWS KMS) key that Kinesis Video Streams uses
   *       to encrypt data on the stream.</p>
   *
   */
  KmsKeyId?: string;

  /**
   *
   *          <p>The <code>MediaType</code> of the stream.  </p>
   *
   */
  MediaType?: string;

  /**
   *
   *          <p>The status of the stream.</p>
   *
   */
  Status?: Status | string;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the stream.</p>
   *
   */
  StreamARN?: string;

  /**
   *
   *          <p>The name of the stream.</p>
   *
   */
  StreamName?: string;

  /**
   *
   *          <p>The version of the stream.</p>
   *
   */
  Version?: string;
}

export namespace StreamInfo {
  export function isa(o: any): o is StreamInfo {
    return _smithy.isa(o, "StreamInfo");
  }
}

/**
 *
 *          <p>Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API).
 *
 *       A condition has a comparison operation and a value.
 *       Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds
 *       streams whose names start with a given prefix. </p>
 *
 */
export interface StreamNameCondition {
  __type?: "StreamNameCondition";
  /**
   *
   *          <p>A comparison operator. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds
   *       streams whose names start with a given prefix.</p>
   *
   */
  ComparisonOperator?: ComparisonOperator | string;

  /**
   *
   *          <p>A value to compare.</p>
   *
   */
  ComparisonValue?: string;
}

export namespace StreamNameCondition {
  export function isa(o: any): o is StreamNameCondition {
    return _smithy.isa(o, "StreamNameCondition");
  }
}

export interface TagStreamInput {
  __type?: "TagStreamInput";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags
   *       to.</p>
   *
   */
  StreamARN?: string;

  /**
   *
   *          <p>The name of the stream that you want to add the tag or tags to.</p>
   *
   */
  StreamName?: string;

  /**
   *
   *          <p>A list of tags to associate with the specified stream. Each tag is a key-value pair
   *       (the value is optional).</p>
   *
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagStreamInput {
  export function isa(o: any): o is TagStreamInput {
    return _smithy.isa(o, "TagStreamInput");
  }
}

export interface TagStreamOutput extends $MetadataBearer {
  __type?: "TagStreamOutput";
}

export namespace TagStreamOutput {
  export function isa(o: any): o is TagStreamOutput {
    return _smithy.isa(o, "TagStreamOutput");
  }
}

/**
 *
 *          <p>You have exceeded the limit of tags that you can associate with the resource. Kinesis video streams support up to 50 tags. </p>
 *
 */
export interface TagsPerResourceExceededLimitException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TagsPerResourceExceededLimitException";
  $fault: "client";
  Message?: string;
}

export namespace TagsPerResourceExceededLimitException {
  export function isa(o: any): o is TagsPerResourceExceededLimitException {
    return _smithy.isa(o, "TagsPerResourceExceededLimitException");
  }
}

export interface UntagStreamInput {
  __type?: "UntagStreamInput";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the stream that you want to remove tags
   *       from.</p>
   *
   */
  StreamARN?: string;

  /**
   *
   *          <p>The name of the stream that you want to remove tags from.</p>
   *
   */
  StreamName?: string;

  /**
   *
   *          <p>A list of the keys of the tags that you want to remove.</p>
   *
   */
  TagKeyList: Array<string> | undefined;
}

export namespace UntagStreamInput {
  export function isa(o: any): o is UntagStreamInput {
    return _smithy.isa(o, "UntagStreamInput");
  }
}

export interface UntagStreamOutput extends $MetadataBearer {
  __type?: "UntagStreamOutput";
}

export namespace UntagStreamOutput {
  export function isa(o: any): o is UntagStreamOutput {
    return _smithy.isa(o, "UntagStreamOutput");
  }
}

export interface UpdateDataRetentionInput {
  __type?: "UpdateDataRetentionInput";
  /**
   *
   *          <p>The version of the stream whose retention period you want to change. To get the version, call
   *       either the <code>DescribeStream</code> or the <code>ListStreams</code> API.</p>
   *
   */
  CurrentVersion: string | undefined;

  /**
   *
   *          <p>The retention period, in hours. The value you specify replaces the current value. The maximum value for this parameter is 87600 (ten years).</p>
   *
   */
  DataRetentionChangeInHours: number | undefined;

  /**
   *
   *          <p>Indicates whether you want to increase or decrease the retention period.</p>
   *
   */
  Operation: UpdateDataRetentionOperation | string | undefined;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the stream whose retention period you want to
   *       change.</p>
   *
   */
  StreamARN?: string;

  /**
   *
   *          <p>The name of the stream whose retention period you want to change.</p>
   *
   */
  StreamName?: string;
}

export namespace UpdateDataRetentionInput {
  export function isa(o: any): o is UpdateDataRetentionInput {
    return _smithy.isa(o, "UpdateDataRetentionInput");
  }
}

export enum UpdateDataRetentionOperation {
  DECREASE_DATA_RETENTION = "DECREASE_DATA_RETENTION",
  INCREASE_DATA_RETENTION = "INCREASE_DATA_RETENTION"
}

export interface UpdateDataRetentionOutput extends $MetadataBearer {
  __type?: "UpdateDataRetentionOutput";
}

export namespace UpdateDataRetentionOutput {
  export function isa(o: any): o is UpdateDataRetentionOutput {
    return _smithy.isa(o, "UpdateDataRetentionOutput");
  }
}

export interface UpdateStreamInput {
  __type?: "UpdateStreamInput";
  /**
   *
   *          <p>The version of the stream whose metadata you want to update.</p>
   *
   */
  CurrentVersion: string | undefined;

  /**
   *
   *          <p>The name of the device that is writing to the stream. </p>
   *          <note>
   *             <p>
   *         In the current implementation, Kinesis Video Streams does not use this name.
   *       </p>
   *          </note>
   *
   */
  DeviceName?: string;

  /**
   *
   *          <p>The stream's media type. Use <code>MediaType</code> to specify the type of content that the
   *       stream contains to the consumers of the stream.
   *       For more information about media types, see
   *       <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>.
   *
   *       If you choose to specify the <code>MediaType</code>, see
   *       <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a>.</p>
   *          <p>To play video on the console, you must specify the correct video type. For example, if
   *       the video in the stream is H.264, specify <code>video/h264</code> as the
   *         <code>MediaType</code>.</p>
   *
   */
  MediaType?: string;

  /**
   *
   *          <p>The ARN of the stream whose metadata you want to update.</p>
   *
   */
  StreamARN?: string;

  /**
   *
   *          <p>The name of the stream whose metadata you want to update.</p>
   *          <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>
   *
   */
  StreamName?: string;
}

export namespace UpdateStreamInput {
  export function isa(o: any): o is UpdateStreamInput {
    return _smithy.isa(o, "UpdateStreamInput");
  }
}

export interface UpdateStreamOutput extends $MetadataBearer {
  __type?: "UpdateStreamOutput";
}

export namespace UpdateStreamOutput {
  export function isa(o: any): o is UpdateStreamOutput {
    return _smithy.isa(o, "UpdateStreamOutput");
  }
}

/**
 *
 *          <p>The stream version that you specified is not the latest version. To get
 *       the latest version, use the
 *       <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html">DescribeStream</a> API.</p>
 *
 */
export interface VersionMismatchException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "VersionMismatchException";
  $fault: "client";
  Message?: string;
}

export namespace VersionMismatchException {
  export function isa(o: any): o is VersionMismatchException {
    return _smithy.isa(o, "VersionMismatchException");
  }
}