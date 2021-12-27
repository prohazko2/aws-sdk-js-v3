import { BatchUpdateClusterCommandInput, BatchUpdateClusterCommandOutput } from "./commands/BatchUpdateClusterCommand.ts";
import { CopySnapshotCommandInput, CopySnapshotCommandOutput } from "./commands/CopySnapshotCommand.ts";
import { CreateACLCommandInput, CreateACLCommandOutput } from "./commands/CreateACLCommand.ts";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand.ts";
import {
  CreateParameterGroupCommandInput,
  CreateParameterGroupCommandOutput,
} from "./commands/CreateParameterGroupCommand.ts";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand.ts";
import { CreateSubnetGroupCommandInput, CreateSubnetGroupCommandOutput } from "./commands/CreateSubnetGroupCommand.ts";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand.ts";
import { DeleteACLCommandInput, DeleteACLCommandOutput } from "./commands/DeleteACLCommand.ts";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand.ts";
import {
  DeleteParameterGroupCommandInput,
  DeleteParameterGroupCommandOutput,
} from "./commands/DeleteParameterGroupCommand.ts";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand.ts";
import { DeleteSubnetGroupCommandInput, DeleteSubnetGroupCommandOutput } from "./commands/DeleteSubnetGroupCommand.ts";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand.ts";
import { DescribeACLsCommandInput, DescribeACLsCommandOutput } from "./commands/DescribeACLsCommand.ts";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "./commands/DescribeClustersCommand.ts";
import {
  DescribeEngineVersionsCommandInput,
  DescribeEngineVersionsCommandOutput,
} from "./commands/DescribeEngineVersionsCommand.ts";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand.ts";
import {
  DescribeParameterGroupsCommandInput,
  DescribeParameterGroupsCommandOutput,
} from "./commands/DescribeParameterGroupsCommand.ts";
import { DescribeParametersCommandInput, DescribeParametersCommandOutput } from "./commands/DescribeParametersCommand.ts";
import {
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
} from "./commands/DescribeServiceUpdatesCommand.ts";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "./commands/DescribeSnapshotsCommand.ts";
import {
  DescribeSubnetGroupsCommandInput,
  DescribeSubnetGroupsCommandOutput,
} from "./commands/DescribeSubnetGroupsCommand.ts";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "./commands/DescribeUsersCommand.ts";
import { FailoverShardCommandInput, FailoverShardCommandOutput } from "./commands/FailoverShardCommand.ts";
import {
  ListAllowedNodeTypeUpdatesCommandInput,
  ListAllowedNodeTypeUpdatesCommandOutput,
} from "./commands/ListAllowedNodeTypeUpdatesCommand.ts";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand.ts";
import {
  ResetParameterGroupCommandInput,
  ResetParameterGroupCommandOutput,
} from "./commands/ResetParameterGroupCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateACLCommandInput, UpdateACLCommandOutput } from "./commands/UpdateACLCommand.ts";
import { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "./commands/UpdateClusterCommand.ts";
import {
  UpdateParameterGroupCommandInput,
  UpdateParameterGroupCommandOutput,
} from "./commands/UpdateParameterGroupCommand.ts";
import { UpdateSubnetGroupCommandInput, UpdateSubnetGroupCommandOutput } from "./commands/UpdateSubnetGroupCommand.ts";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand.ts";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "../config-resolver/mod.ts";
import { getContentLengthPlugin } from "../middleware-content-length/mod.ts";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "../middleware-host-header/mod.ts";
import { getLoggerPlugin } from "../middleware-logger/mod.ts";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "../middleware-retry/mod.ts";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "../middleware-signing/mod.ts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "../middleware-user-agent/mod.ts";
import { HttpHandler as __HttpHandler } from "../protocol-http/mod.ts";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "../smithy-client/mod.ts";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | BatchUpdateClusterCommandInput
  | CopySnapshotCommandInput
  | CreateACLCommandInput
  | CreateClusterCommandInput
  | CreateParameterGroupCommandInput
  | CreateSnapshotCommandInput
  | CreateSubnetGroupCommandInput
  | CreateUserCommandInput
  | DeleteACLCommandInput
  | DeleteClusterCommandInput
  | DeleteParameterGroupCommandInput
  | DeleteSnapshotCommandInput
  | DeleteSubnetGroupCommandInput
  | DeleteUserCommandInput
  | DescribeACLsCommandInput
  | DescribeClustersCommandInput
  | DescribeEngineVersionsCommandInput
  | DescribeEventsCommandInput
  | DescribeParameterGroupsCommandInput
  | DescribeParametersCommandInput
  | DescribeServiceUpdatesCommandInput
  | DescribeSnapshotsCommandInput
  | DescribeSubnetGroupsCommandInput
  | DescribeUsersCommandInput
  | FailoverShardCommandInput
  | ListAllowedNodeTypeUpdatesCommandInput
  | ListTagsCommandInput
  | ResetParameterGroupCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateACLCommandInput
  | UpdateClusterCommandInput
  | UpdateParameterGroupCommandInput
  | UpdateSubnetGroupCommandInput
  | UpdateUserCommandInput;

export type ServiceOutputTypes =
  | BatchUpdateClusterCommandOutput
  | CopySnapshotCommandOutput
  | CreateACLCommandOutput
  | CreateClusterCommandOutput
  | CreateParameterGroupCommandOutput
  | CreateSnapshotCommandOutput
  | CreateSubnetGroupCommandOutput
  | CreateUserCommandOutput
  | DeleteACLCommandOutput
  | DeleteClusterCommandOutput
  | DeleteParameterGroupCommandOutput
  | DeleteSnapshotCommandOutput
  | DeleteSubnetGroupCommandOutput
  | DeleteUserCommandOutput
  | DescribeACLsCommandOutput
  | DescribeClustersCommandOutput
  | DescribeEngineVersionsCommandOutput
  | DescribeEventsCommandOutput
  | DescribeParameterGroupsCommandOutput
  | DescribeParametersCommandOutput
  | DescribeServiceUpdatesCommandOutput
  | DescribeSnapshotsCommandOutput
  | DescribeSubnetGroupsCommandOutput
  | DescribeUsersCommandOutput
  | FailoverShardCommandOutput
  | ListAllowedNodeTypeUpdatesCommandOutput
  | ListTagsCommandOutput
  | ResetParameterGroupCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateACLCommandOutput
  | UpdateClusterCommandOutput
  | UpdateParameterGroupCommandOutput
  | UpdateSubnetGroupCommandOutput
  | UpdateUserCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies provider for retry algorithm to use.
   * @internal
   */
  retryModeProvider?: __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type MemoryDBClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of MemoryDBClient class constructor that set the region, credentials and other options.
 */
export interface MemoryDBClientConfig extends MemoryDBClientConfigType {}

type MemoryDBClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of MemoryDBClient class. This is resolved and normalized from the {@link MemoryDBClientConfig | constructor configuration interface}.
 */
export interface MemoryDBClientResolvedConfig extends MemoryDBClientResolvedConfigType {}

/**
 * <p>Amazon MemoryDB for Redis is a fully managed, Redis-compatible, in-memory database that delivers ultra-fast performance and Multi-AZ durability for modern applications built using microservices architectures.
 *
 *        MemoryDB stores the entire database in-memory, enabling low latency and high throughput data access. It is compatible with Redis, a popular open source data store, enabling you to leverage Redis’ flexible and friendly data structures, APIs, and commands.</p>
 */
export class MemoryDBClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MemoryDBClientResolvedConfig
> {
  /**
   * The resolved configuration of MemoryDBClient class. This is resolved and normalized from the {@link MemoryDBClientConfig | constructor configuration interface}.
   */
  readonly config: MemoryDBClientResolvedConfig;

  constructor(configuration: MemoryDBClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
