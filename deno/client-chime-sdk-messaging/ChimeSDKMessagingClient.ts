import {
  BatchCreateChannelMembershipCommandInput,
  BatchCreateChannelMembershipCommandOutput,
} from "./commands/BatchCreateChannelMembershipCommand.ts";
import { CreateChannelBanCommandInput, CreateChannelBanCommandOutput } from "./commands/CreateChannelBanCommand.ts";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand.ts";
import {
  CreateChannelMembershipCommandInput,
  CreateChannelMembershipCommandOutput,
} from "./commands/CreateChannelMembershipCommand.ts";
import {
  CreateChannelModeratorCommandInput,
  CreateChannelModeratorCommandOutput,
} from "./commands/CreateChannelModeratorCommand.ts";
import { DeleteChannelBanCommandInput, DeleteChannelBanCommandOutput } from "./commands/DeleteChannelBanCommand.ts";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand.ts";
import {
  DeleteChannelMembershipCommandInput,
  DeleteChannelMembershipCommandOutput,
} from "./commands/DeleteChannelMembershipCommand.ts";
import {
  DeleteChannelMessageCommandInput,
  DeleteChannelMessageCommandOutput,
} from "./commands/DeleteChannelMessageCommand.ts";
import {
  DeleteChannelModeratorCommandInput,
  DeleteChannelModeratorCommandOutput,
} from "./commands/DeleteChannelModeratorCommand.ts";
import { DescribeChannelBanCommandInput, DescribeChannelBanCommandOutput } from "./commands/DescribeChannelBanCommand.ts";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand.ts";
import {
  DescribeChannelMembershipCommandInput,
  DescribeChannelMembershipCommandOutput,
} from "./commands/DescribeChannelMembershipCommand.ts";
import {
  DescribeChannelMembershipForAppInstanceUserCommandInput,
  DescribeChannelMembershipForAppInstanceUserCommandOutput,
} from "./commands/DescribeChannelMembershipForAppInstanceUserCommand.ts";
import {
  DescribeChannelModeratedByAppInstanceUserCommandInput,
  DescribeChannelModeratedByAppInstanceUserCommandOutput,
} from "./commands/DescribeChannelModeratedByAppInstanceUserCommand.ts";
import {
  DescribeChannelModeratorCommandInput,
  DescribeChannelModeratorCommandOutput,
} from "./commands/DescribeChannelModeratorCommand.ts";
import { GetChannelMessageCommandInput, GetChannelMessageCommandOutput } from "./commands/GetChannelMessageCommand.ts";
import {
  GetMessagingSessionEndpointCommandInput,
  GetMessagingSessionEndpointCommandOutput,
} from "./commands/GetMessagingSessionEndpointCommand.ts";
import { ListChannelBansCommandInput, ListChannelBansCommandOutput } from "./commands/ListChannelBansCommand.ts";
import {
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput,
} from "./commands/ListChannelMembershipsCommand.ts";
import {
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
} from "./commands/ListChannelMembershipsForAppInstanceUserCommand.ts";
import {
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
} from "./commands/ListChannelMessagesCommand.ts";
import {
  ListChannelModeratorsCommandInput,
  ListChannelModeratorsCommandOutput,
} from "./commands/ListChannelModeratorsCommand.ts";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand.ts";
import {
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "./commands/ListChannelsModeratedByAppInstanceUserCommand.ts";
import {
  RedactChannelMessageCommandInput,
  RedactChannelMessageCommandOutput,
} from "./commands/RedactChannelMessageCommand.ts";
import { SendChannelMessageCommandInput, SendChannelMessageCommandOutput } from "./commands/SendChannelMessageCommand.ts";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand.ts";
import {
  UpdateChannelMessageCommandInput,
  UpdateChannelMessageCommandOutput,
} from "./commands/UpdateChannelMessageCommand.ts";
import {
  UpdateChannelReadMarkerCommandInput,
  UpdateChannelReadMarkerCommandOutput,
} from "./commands/UpdateChannelReadMarkerCommand.ts";
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
  | BatchCreateChannelMembershipCommandInput
  | CreateChannelBanCommandInput
  | CreateChannelCommandInput
  | CreateChannelMembershipCommandInput
  | CreateChannelModeratorCommandInput
  | DeleteChannelBanCommandInput
  | DeleteChannelCommandInput
  | DeleteChannelMembershipCommandInput
  | DeleteChannelMessageCommandInput
  | DeleteChannelModeratorCommandInput
  | DescribeChannelBanCommandInput
  | DescribeChannelCommandInput
  | DescribeChannelMembershipCommandInput
  | DescribeChannelMembershipForAppInstanceUserCommandInput
  | DescribeChannelModeratedByAppInstanceUserCommandInput
  | DescribeChannelModeratorCommandInput
  | GetChannelMessageCommandInput
  | GetMessagingSessionEndpointCommandInput
  | ListChannelBansCommandInput
  | ListChannelMembershipsCommandInput
  | ListChannelMembershipsForAppInstanceUserCommandInput
  | ListChannelMessagesCommandInput
  | ListChannelModeratorsCommandInput
  | ListChannelsCommandInput
  | ListChannelsModeratedByAppInstanceUserCommandInput
  | RedactChannelMessageCommandInput
  | SendChannelMessageCommandInput
  | UpdateChannelCommandInput
  | UpdateChannelMessageCommandInput
  | UpdateChannelReadMarkerCommandInput;

export type ServiceOutputTypes =
  | BatchCreateChannelMembershipCommandOutput
  | CreateChannelBanCommandOutput
  | CreateChannelCommandOutput
  | CreateChannelMembershipCommandOutput
  | CreateChannelModeratorCommandOutput
  | DeleteChannelBanCommandOutput
  | DeleteChannelCommandOutput
  | DeleteChannelMembershipCommandOutput
  | DeleteChannelMessageCommandOutput
  | DeleteChannelModeratorCommandOutput
  | DescribeChannelBanCommandOutput
  | DescribeChannelCommandOutput
  | DescribeChannelMembershipCommandOutput
  | DescribeChannelMembershipForAppInstanceUserCommandOutput
  | DescribeChannelModeratedByAppInstanceUserCommandOutput
  | DescribeChannelModeratorCommandOutput
  | GetChannelMessageCommandOutput
  | GetMessagingSessionEndpointCommandOutput
  | ListChannelBansCommandOutput
  | ListChannelMembershipsCommandOutput
  | ListChannelMembershipsForAppInstanceUserCommandOutput
  | ListChannelMessagesCommandOutput
  | ListChannelModeratorsCommandOutput
  | ListChannelsCommandOutput
  | ListChannelsModeratedByAppInstanceUserCommandOutput
  | RedactChannelMessageCommandOutput
  | SendChannelMessageCommandOutput
  | UpdateChannelCommandOutput
  | UpdateChannelMessageCommandOutput
  | UpdateChannelReadMarkerCommandOutput;

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
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

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

type ChimeSDKMessagingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ChimeSDKMessagingClient class constructor that set the region, credentials and other options.
 */
export interface ChimeSDKMessagingClientConfig extends ChimeSDKMessagingClientConfigType {}

type ChimeSDKMessagingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ChimeSDKMessagingClient class. This is resolved and normalized from the {@link ChimeSDKMessagingClientConfig | constructor configuration interface}.
 */
export interface ChimeSDKMessagingClientResolvedConfig extends ChimeSDKMessagingClientResolvedConfigType {}

/**
 * <p>The Amazon Chime SDK Messaging APIs in this section allow software developers to send
 *          and receive messages in custom messaging applications. These APIs depend on the frameworks
 *          provided by the Amazon Chime SDK Identity APIs. For more information about the messaging
 *          APIs, see <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_Operations_Amazon_Chime_SDK_Messaging">Amazon Chime SDK messaging</a>
 *          </p>
 */
export class ChimeSDKMessagingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ChimeSDKMessagingClientResolvedConfig
> {
  /**
   * The resolved configuration of ChimeSDKMessagingClient class. This is resolved and normalized from the {@link ChimeSDKMessagingClientConfig | constructor configuration interface}.
   */
  readonly config: ChimeSDKMessagingClientResolvedConfig;

  constructor(configuration: ChimeSDKMessagingClientConfig) {
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
