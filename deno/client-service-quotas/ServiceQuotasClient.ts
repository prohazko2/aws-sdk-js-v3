import {
  AssociateServiceQuotaTemplateCommandInput,
  AssociateServiceQuotaTemplateCommandOutput,
} from "./commands/AssociateServiceQuotaTemplateCommand.ts";
import {
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput,
} from "./commands/DeleteServiceQuotaIncreaseRequestFromTemplateCommand.ts";
import {
  DisassociateServiceQuotaTemplateCommandInput,
  DisassociateServiceQuotaTemplateCommandOutput,
} from "./commands/DisassociateServiceQuotaTemplateCommand.ts";
import {
  GetAWSDefaultServiceQuotaCommandInput,
  GetAWSDefaultServiceQuotaCommandOutput,
} from "./commands/GetAWSDefaultServiceQuotaCommand.ts";
import {
  GetAssociationForServiceQuotaTemplateCommandInput,
  GetAssociationForServiceQuotaTemplateCommandOutput,
} from "./commands/GetAssociationForServiceQuotaTemplateCommand.ts";
import {
  GetRequestedServiceQuotaChangeCommandInput,
  GetRequestedServiceQuotaChangeCommandOutput,
} from "./commands/GetRequestedServiceQuotaChangeCommand.ts";
import { GetServiceQuotaCommandInput, GetServiceQuotaCommandOutput } from "./commands/GetServiceQuotaCommand.ts";
import {
  GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
  GetServiceQuotaIncreaseRequestFromTemplateCommandOutput,
} from "./commands/GetServiceQuotaIncreaseRequestFromTemplateCommand.ts";
import {
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput,
} from "./commands/ListAWSDefaultServiceQuotasCommand.ts";
import {
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput,
} from "./commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand.ts";
import {
  ListRequestedServiceQuotaChangeHistoryCommandInput,
  ListRequestedServiceQuotaChangeHistoryCommandOutput,
} from "./commands/ListRequestedServiceQuotaChangeHistoryCommand.ts";
import {
  ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ListServiceQuotaIncreaseRequestsInTemplateCommandOutput,
} from "./commands/ListServiceQuotaIncreaseRequestsInTemplateCommand.ts";
import { ListServiceQuotasCommandInput, ListServiceQuotasCommandOutput } from "./commands/ListServiceQuotasCommand.ts";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput,
} from "./commands/PutServiceQuotaIncreaseRequestIntoTemplateCommand.ts";
import {
  RequestServiceQuotaIncreaseCommandInput,
  RequestServiceQuotaIncreaseCommandOutput,
} from "./commands/RequestServiceQuotaIncreaseCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
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
  | AssociateServiceQuotaTemplateCommandInput
  | DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput
  | DisassociateServiceQuotaTemplateCommandInput
  | GetAWSDefaultServiceQuotaCommandInput
  | GetAssociationForServiceQuotaTemplateCommandInput
  | GetRequestedServiceQuotaChangeCommandInput
  | GetServiceQuotaCommandInput
  | GetServiceQuotaIncreaseRequestFromTemplateCommandInput
  | ListAWSDefaultServiceQuotasCommandInput
  | ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput
  | ListRequestedServiceQuotaChangeHistoryCommandInput
  | ListServiceQuotaIncreaseRequestsInTemplateCommandInput
  | ListServiceQuotasCommandInput
  | ListServicesCommandInput
  | ListTagsForResourceCommandInput
  | PutServiceQuotaIncreaseRequestIntoTemplateCommandInput
  | RequestServiceQuotaIncreaseCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | AssociateServiceQuotaTemplateCommandOutput
  | DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput
  | DisassociateServiceQuotaTemplateCommandOutput
  | GetAWSDefaultServiceQuotaCommandOutput
  | GetAssociationForServiceQuotaTemplateCommandOutput
  | GetRequestedServiceQuotaChangeCommandOutput
  | GetServiceQuotaCommandOutput
  | GetServiceQuotaIncreaseRequestFromTemplateCommandOutput
  | ListAWSDefaultServiceQuotasCommandOutput
  | ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput
  | ListRequestedServiceQuotaChangeHistoryCommandOutput
  | ListServiceQuotaIncreaseRequestsInTemplateCommandOutput
  | ListServiceQuotasCommandOutput
  | ListServicesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput
  | RequestServiceQuotaIncreaseCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput;

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

type ServiceQuotasClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ServiceQuotasClient class constructor that set the region, credentials and other options.
 */
export interface ServiceQuotasClientConfig extends ServiceQuotasClientConfigType {}

type ServiceQuotasClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ServiceQuotasClient class. This is resolved and normalized from the {@link ServiceQuotasClientConfig | constructor configuration interface}.
 */
export interface ServiceQuotasClientResolvedConfig extends ServiceQuotasClientResolvedConfigType {}

/**
 * <p>With Service Quotas, you can view and manage your quotas easily as your AWS workloads
 *       grow. Quotas, also referred to as limits, are the maximum number of resources that you can
 *       create in your AWS account. For more information, see the <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/">Service Quotas User Guide</a>.</p>
 */
export class ServiceQuotasClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ServiceQuotasClientResolvedConfig
> {
  /**
   * The resolved configuration of ServiceQuotasClient class. This is resolved and normalized from the {@link ServiceQuotasClientConfig | constructor configuration interface}.
   */
  readonly config: ServiceQuotasClientResolvedConfig;

  constructor(configuration: ServiceQuotasClientConfig) {
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
