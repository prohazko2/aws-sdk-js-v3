import { AssociateLensesCommandInput, AssociateLensesCommandOutput } from "./commands/AssociateLensesCommand.ts";
import { CreateMilestoneCommandInput, CreateMilestoneCommandOutput } from "./commands/CreateMilestoneCommand.ts";
import { CreateWorkloadCommandInput, CreateWorkloadCommandOutput } from "./commands/CreateWorkloadCommand.ts";
import {
  CreateWorkloadShareCommandInput,
  CreateWorkloadShareCommandOutput,
} from "./commands/CreateWorkloadShareCommand.ts";
import { DeleteWorkloadCommandInput, DeleteWorkloadCommandOutput } from "./commands/DeleteWorkloadCommand.ts";
import {
  DeleteWorkloadShareCommandInput,
  DeleteWorkloadShareCommandOutput,
} from "./commands/DeleteWorkloadShareCommand.ts";
import { DisassociateLensesCommandInput, DisassociateLensesCommandOutput } from "./commands/DisassociateLensesCommand.ts";
import { GetAnswerCommandInput, GetAnswerCommandOutput } from "./commands/GetAnswerCommand.ts";
import { GetLensReviewCommandInput, GetLensReviewCommandOutput } from "./commands/GetLensReviewCommand.ts";
import {
  GetLensReviewReportCommandInput,
  GetLensReviewReportCommandOutput,
} from "./commands/GetLensReviewReportCommand.ts";
import {
  GetLensVersionDifferenceCommandInput,
  GetLensVersionDifferenceCommandOutput,
} from "./commands/GetLensVersionDifferenceCommand.ts";
import { GetMilestoneCommandInput, GetMilestoneCommandOutput } from "./commands/GetMilestoneCommand.ts";
import { GetWorkloadCommandInput, GetWorkloadCommandOutput } from "./commands/GetWorkloadCommand.ts";
import { ListAnswersCommandInput, ListAnswersCommandOutput } from "./commands/ListAnswersCommand.ts";
import {
  ListLensReviewImprovementsCommandInput,
  ListLensReviewImprovementsCommandOutput,
} from "./commands/ListLensReviewImprovementsCommand.ts";
import { ListLensReviewsCommandInput, ListLensReviewsCommandOutput } from "./commands/ListLensReviewsCommand.ts";
import { ListLensesCommandInput, ListLensesCommandOutput } from "./commands/ListLensesCommand.ts";
import { ListMilestonesCommandInput, ListMilestonesCommandOutput } from "./commands/ListMilestonesCommand.ts";
import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "./commands/ListNotificationsCommand.ts";
import {
  ListShareInvitationsCommandInput,
  ListShareInvitationsCommandOutput,
} from "./commands/ListShareInvitationsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { ListWorkloadSharesCommandInput, ListWorkloadSharesCommandOutput } from "./commands/ListWorkloadSharesCommand.ts";
import { ListWorkloadsCommandInput, ListWorkloadsCommandOutput } from "./commands/ListWorkloadsCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateAnswerCommandInput, UpdateAnswerCommandOutput } from "./commands/UpdateAnswerCommand.ts";
import { UpdateLensReviewCommandInput, UpdateLensReviewCommandOutput } from "./commands/UpdateLensReviewCommand.ts";
import {
  UpdateShareInvitationCommandInput,
  UpdateShareInvitationCommandOutput,
} from "./commands/UpdateShareInvitationCommand.ts";
import { UpdateWorkloadCommandInput, UpdateWorkloadCommandOutput } from "./commands/UpdateWorkloadCommand.ts";
import {
  UpdateWorkloadShareCommandInput,
  UpdateWorkloadShareCommandOutput,
} from "./commands/UpdateWorkloadShareCommand.ts";
import { UpgradeLensReviewCommandInput, UpgradeLensReviewCommandOutput } from "./commands/UpgradeLensReviewCommand.ts";
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
  | AssociateLensesCommandInput
  | CreateMilestoneCommandInput
  | CreateWorkloadCommandInput
  | CreateWorkloadShareCommandInput
  | DeleteWorkloadCommandInput
  | DeleteWorkloadShareCommandInput
  | DisassociateLensesCommandInput
  | GetAnswerCommandInput
  | GetLensReviewCommandInput
  | GetLensReviewReportCommandInput
  | GetLensVersionDifferenceCommandInput
  | GetMilestoneCommandInput
  | GetWorkloadCommandInput
  | ListAnswersCommandInput
  | ListLensReviewImprovementsCommandInput
  | ListLensReviewsCommandInput
  | ListLensesCommandInput
  | ListMilestonesCommandInput
  | ListNotificationsCommandInput
  | ListShareInvitationsCommandInput
  | ListTagsForResourceCommandInput
  | ListWorkloadSharesCommandInput
  | ListWorkloadsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAnswerCommandInput
  | UpdateLensReviewCommandInput
  | UpdateShareInvitationCommandInput
  | UpdateWorkloadCommandInput
  | UpdateWorkloadShareCommandInput
  | UpgradeLensReviewCommandInput;

export type ServiceOutputTypes =
  | AssociateLensesCommandOutput
  | CreateMilestoneCommandOutput
  | CreateWorkloadCommandOutput
  | CreateWorkloadShareCommandOutput
  | DeleteWorkloadCommandOutput
  | DeleteWorkloadShareCommandOutput
  | DisassociateLensesCommandOutput
  | GetAnswerCommandOutput
  | GetLensReviewCommandOutput
  | GetLensReviewReportCommandOutput
  | GetLensVersionDifferenceCommandOutput
  | GetMilestoneCommandOutput
  | GetWorkloadCommandOutput
  | ListAnswersCommandOutput
  | ListLensReviewImprovementsCommandOutput
  | ListLensReviewsCommandOutput
  | ListLensesCommandOutput
  | ListMilestonesCommandOutput
  | ListNotificationsCommandOutput
  | ListShareInvitationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorkloadSharesCommandOutput
  | ListWorkloadsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAnswerCommandOutput
  | UpdateLensReviewCommandOutput
  | UpdateShareInvitationCommandOutput
  | UpdateWorkloadCommandOutput
  | UpdateWorkloadShareCommandOutput
  | UpgradeLensReviewCommandOutput;

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

type WellArchitectedClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of WellArchitectedClient class constructor that set the region, credentials and other options.
 */
export interface WellArchitectedClientConfig extends WellArchitectedClientConfigType {}

type WellArchitectedClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of WellArchitectedClient class. This is resolved and normalized from the {@link WellArchitectedClientConfig | constructor configuration interface}.
 */
export interface WellArchitectedClientResolvedConfig extends WellArchitectedClientResolvedConfigType {}

/**
 * <fullname>AWS Well-Architected Tool</fullname>
 *
 *          <p>This is the <i>AWS Well-Architected Tool API Reference</i>. The AWS Well-Architected Tool API provides programmatic access to the
 *             <a href="http://aws.amazon.com/well-architected-tool">AWS Well-Architected Tool</a> in the
 *             <a href="https://console.aws.amazon.com/wellarchitected">AWS Management Console</a>. For information
 *             about the AWS Well-Architected Tool, see the
 *             <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">AWS Well-Architected Tool User Guide</a>.</p>
 */
export class WellArchitectedClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WellArchitectedClientResolvedConfig
> {
  /**
   * The resolved configuration of WellArchitectedClient class. This is resolved and normalized from the {@link WellArchitectedClientConfig | constructor configuration interface}.
   */
  readonly config: WellArchitectedClientResolvedConfig;

  constructor(configuration: WellArchitectedClientConfig) {
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
