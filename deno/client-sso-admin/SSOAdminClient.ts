import {
  AttachManagedPolicyToPermissionSetCommandInput,
  AttachManagedPolicyToPermissionSetCommandOutput,
} from "./commands/AttachManagedPolicyToPermissionSetCommand.ts";
import {
  CreateAccountAssignmentCommandInput,
  CreateAccountAssignmentCommandOutput,
} from "./commands/CreateAccountAssignmentCommand.ts";
import {
  CreateInstanceAccessControlAttributeConfigurationCommandInput,
  CreateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/CreateInstanceAccessControlAttributeConfigurationCommand.ts";
import {
  CreatePermissionSetCommandInput,
  CreatePermissionSetCommandOutput,
} from "./commands/CreatePermissionSetCommand.ts";
import {
  DeleteAccountAssignmentCommandInput,
  DeleteAccountAssignmentCommandOutput,
} from "./commands/DeleteAccountAssignmentCommand.ts";
import {
  DeleteInlinePolicyFromPermissionSetCommandInput,
  DeleteInlinePolicyFromPermissionSetCommandOutput,
} from "./commands/DeleteInlinePolicyFromPermissionSetCommand.ts";
import {
  DeleteInstanceAccessControlAttributeConfigurationCommandInput,
  DeleteInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/DeleteInstanceAccessControlAttributeConfigurationCommand.ts";
import {
  DeletePermissionSetCommandInput,
  DeletePermissionSetCommandOutput,
} from "./commands/DeletePermissionSetCommand.ts";
import {
  DescribeAccountAssignmentCreationStatusCommandInput,
  DescribeAccountAssignmentCreationStatusCommandOutput,
} from "./commands/DescribeAccountAssignmentCreationStatusCommand.ts";
import {
  DescribeAccountAssignmentDeletionStatusCommandInput,
  DescribeAccountAssignmentDeletionStatusCommandOutput,
} from "./commands/DescribeAccountAssignmentDeletionStatusCommand.ts";
import {
  DescribeInstanceAccessControlAttributeConfigurationCommandInput,
  DescribeInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/DescribeInstanceAccessControlAttributeConfigurationCommand.ts";
import {
  DescribePermissionSetCommandInput,
  DescribePermissionSetCommandOutput,
} from "./commands/DescribePermissionSetCommand.ts";
import {
  DescribePermissionSetProvisioningStatusCommandInput,
  DescribePermissionSetProvisioningStatusCommandOutput,
} from "./commands/DescribePermissionSetProvisioningStatusCommand.ts";
import {
  DetachManagedPolicyFromPermissionSetCommandInput,
  DetachManagedPolicyFromPermissionSetCommandOutput,
} from "./commands/DetachManagedPolicyFromPermissionSetCommand.ts";
import {
  GetInlinePolicyForPermissionSetCommandInput,
  GetInlinePolicyForPermissionSetCommandOutput,
} from "./commands/GetInlinePolicyForPermissionSetCommand.ts";
import {
  ListAccountAssignmentCreationStatusCommandInput,
  ListAccountAssignmentCreationStatusCommandOutput,
} from "./commands/ListAccountAssignmentCreationStatusCommand.ts";
import {
  ListAccountAssignmentDeletionStatusCommandInput,
  ListAccountAssignmentDeletionStatusCommandOutput,
} from "./commands/ListAccountAssignmentDeletionStatusCommand.ts";
import {
  ListAccountAssignmentsCommandInput,
  ListAccountAssignmentsCommandOutput,
} from "./commands/ListAccountAssignmentsCommand.ts";
import {
  ListAccountsForProvisionedPermissionSetCommandInput,
  ListAccountsForProvisionedPermissionSetCommandOutput,
} from "./commands/ListAccountsForProvisionedPermissionSetCommand.ts";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "./commands/ListInstancesCommand.ts";
import {
  ListManagedPoliciesInPermissionSetCommandInput,
  ListManagedPoliciesInPermissionSetCommandOutput,
} from "./commands/ListManagedPoliciesInPermissionSetCommand.ts";
import {
  ListPermissionSetProvisioningStatusCommandInput,
  ListPermissionSetProvisioningStatusCommandOutput,
} from "./commands/ListPermissionSetProvisioningStatusCommand.ts";
import { ListPermissionSetsCommandInput, ListPermissionSetsCommandOutput } from "./commands/ListPermissionSetsCommand.ts";
import {
  ListPermissionSetsProvisionedToAccountCommandInput,
  ListPermissionSetsProvisionedToAccountCommandOutput,
} from "./commands/ListPermissionSetsProvisionedToAccountCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ProvisionPermissionSetCommandInput,
  ProvisionPermissionSetCommandOutput,
} from "./commands/ProvisionPermissionSetCommand.ts";
import {
  PutInlinePolicyToPermissionSetCommandInput,
  PutInlinePolicyToPermissionSetCommandOutput,
} from "./commands/PutInlinePolicyToPermissionSetCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  UpdateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/UpdateInstanceAccessControlAttributeConfigurationCommand.ts";
import {
  UpdatePermissionSetCommandInput,
  UpdatePermissionSetCommandOutput,
} from "./commands/UpdatePermissionSetCommand.ts";
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
  | AttachManagedPolicyToPermissionSetCommandInput
  | CreateAccountAssignmentCommandInput
  | CreateInstanceAccessControlAttributeConfigurationCommandInput
  | CreatePermissionSetCommandInput
  | DeleteAccountAssignmentCommandInput
  | DeleteInlinePolicyFromPermissionSetCommandInput
  | DeleteInstanceAccessControlAttributeConfigurationCommandInput
  | DeletePermissionSetCommandInput
  | DescribeAccountAssignmentCreationStatusCommandInput
  | DescribeAccountAssignmentDeletionStatusCommandInput
  | DescribeInstanceAccessControlAttributeConfigurationCommandInput
  | DescribePermissionSetCommandInput
  | DescribePermissionSetProvisioningStatusCommandInput
  | DetachManagedPolicyFromPermissionSetCommandInput
  | GetInlinePolicyForPermissionSetCommandInput
  | ListAccountAssignmentCreationStatusCommandInput
  | ListAccountAssignmentDeletionStatusCommandInput
  | ListAccountAssignmentsCommandInput
  | ListAccountsForProvisionedPermissionSetCommandInput
  | ListInstancesCommandInput
  | ListManagedPoliciesInPermissionSetCommandInput
  | ListPermissionSetProvisioningStatusCommandInput
  | ListPermissionSetsCommandInput
  | ListPermissionSetsProvisionedToAccountCommandInput
  | ListTagsForResourceCommandInput
  | ProvisionPermissionSetCommandInput
  | PutInlinePolicyToPermissionSetCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateInstanceAccessControlAttributeConfigurationCommandInput
  | UpdatePermissionSetCommandInput;

export type ServiceOutputTypes =
  | AttachManagedPolicyToPermissionSetCommandOutput
  | CreateAccountAssignmentCommandOutput
  | CreateInstanceAccessControlAttributeConfigurationCommandOutput
  | CreatePermissionSetCommandOutput
  | DeleteAccountAssignmentCommandOutput
  | DeleteInlinePolicyFromPermissionSetCommandOutput
  | DeleteInstanceAccessControlAttributeConfigurationCommandOutput
  | DeletePermissionSetCommandOutput
  | DescribeAccountAssignmentCreationStatusCommandOutput
  | DescribeAccountAssignmentDeletionStatusCommandOutput
  | DescribeInstanceAccessControlAttributeConfigurationCommandOutput
  | DescribePermissionSetCommandOutput
  | DescribePermissionSetProvisioningStatusCommandOutput
  | DetachManagedPolicyFromPermissionSetCommandOutput
  | GetInlinePolicyForPermissionSetCommandOutput
  | ListAccountAssignmentCreationStatusCommandOutput
  | ListAccountAssignmentDeletionStatusCommandOutput
  | ListAccountAssignmentsCommandOutput
  | ListAccountsForProvisionedPermissionSetCommandOutput
  | ListInstancesCommandOutput
  | ListManagedPoliciesInPermissionSetCommandOutput
  | ListPermissionSetProvisioningStatusCommandOutput
  | ListPermissionSetsCommandOutput
  | ListPermissionSetsProvisionedToAccountCommandOutput
  | ListTagsForResourceCommandOutput
  | ProvisionPermissionSetCommandOutput
  | PutInlinePolicyToPermissionSetCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateInstanceAccessControlAttributeConfigurationCommandOutput
  | UpdatePermissionSetCommandOutput;

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

type SSOAdminClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of SSOAdminClient class constructor that set the region, credentials and other options.
 */
export interface SSOAdminClientConfig extends SSOAdminClientConfigType {}

type SSOAdminClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of SSOAdminClient class. This is resolved and normalized from the {@link SSOAdminClientConfig | constructor configuration interface}.
 */
export interface SSOAdminClientResolvedConfig extends SSOAdminClientResolvedConfigType {}

/**
 * <p>Amazon Web Services Single Sign On (SSO) is a cloud SSO service that makes it easy to centrally manage SSO
 *       access to multiple Amazon Web Services accounts and business applications. This guide provides information on
 *       SSO operations which could be used for access management of Amazon Web Services accounts. For information about
 *       Amazon Web Services SSO features, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">Amazon Web Services Single Sign-On User Guide</a>.</p>
 *          <p>Many operations in the SSO APIs rely on identifiers for users and groups, known as
 *       principals. For more information about how to work with principals and principal IDs in Amazon Web Services SSO,
 *       see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">Amazon Web Services SSO Identity Store API
 *         Reference</a>.</p>
 */
export class SSOAdminClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SSOAdminClientResolvedConfig
> {
  /**
   * The resolved configuration of SSOAdminClient class. This is resolved and normalized from the {@link SSOAdminClientConfig | constructor configuration interface}.
   */
  readonly config: SSOAdminClientResolvedConfig;

  constructor(configuration: SSOAdminClientConfig) {
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
