import process from "https://deno.land/std@0.119.0/node/process.ts";
import { SecretsManagerClient } from "./SecretsManagerClient.ts";
import {
  CancelRotateSecretCommand,
  CancelRotateSecretCommandInput,
  CancelRotateSecretCommandOutput,
} from "./commands/CancelRotateSecretCommand.ts";
import {
  CreateSecretCommand,
  CreateSecretCommandInput,
  CreateSecretCommandOutput,
} from "./commands/CreateSecretCommand.ts";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand.ts";
import {
  DeleteSecretCommand,
  DeleteSecretCommandInput,
  DeleteSecretCommandOutput,
} from "./commands/DeleteSecretCommand.ts";
import {
  DescribeSecretCommand,
  DescribeSecretCommandInput,
  DescribeSecretCommandOutput,
} from "./commands/DescribeSecretCommand.ts";
import {
  GetRandomPasswordCommand,
  GetRandomPasswordCommandInput,
  GetRandomPasswordCommandOutput,
} from "./commands/GetRandomPasswordCommand.ts";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand.ts";
import {
  GetSecretValueCommand,
  GetSecretValueCommandInput,
  GetSecretValueCommandOutput,
} from "./commands/GetSecretValueCommand.ts";
import {
  ListSecretVersionIdsCommand,
  ListSecretVersionIdsCommandInput,
  ListSecretVersionIdsCommandOutput,
} from "./commands/ListSecretVersionIdsCommand.ts";
import { ListSecretsCommand, ListSecretsCommandInput, ListSecretsCommandOutput } from "./commands/ListSecretsCommand.ts";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand.ts";
import {
  PutSecretValueCommand,
  PutSecretValueCommandInput,
  PutSecretValueCommandOutput,
} from "./commands/PutSecretValueCommand.ts";
import {
  RemoveRegionsFromReplicationCommand,
  RemoveRegionsFromReplicationCommandInput,
  RemoveRegionsFromReplicationCommandOutput,
} from "./commands/RemoveRegionsFromReplicationCommand.ts";
import {
  ReplicateSecretToRegionsCommand,
  ReplicateSecretToRegionsCommandInput,
  ReplicateSecretToRegionsCommandOutput,
} from "./commands/ReplicateSecretToRegionsCommand.ts";
import {
  RestoreSecretCommand,
  RestoreSecretCommandInput,
  RestoreSecretCommandOutput,
} from "./commands/RestoreSecretCommand.ts";
import {
  RotateSecretCommand,
  RotateSecretCommandInput,
  RotateSecretCommandOutput,
} from "./commands/RotateSecretCommand.ts";
import {
  StopReplicationToReplicaCommand,
  StopReplicationToReplicaCommandInput,
  StopReplicationToReplicaCommandOutput,
} from "./commands/StopReplicationToReplicaCommand.ts";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand.ts";
import {
  UpdateSecretCommand,
  UpdateSecretCommandInput,
  UpdateSecretCommandOutput,
} from "./commands/UpdateSecretCommand.ts";
import {
  UpdateSecretVersionStageCommand,
  UpdateSecretVersionStageCommandInput,
  UpdateSecretVersionStageCommandOutput,
} from "./commands/UpdateSecretVersionStageCommand.ts";
import {
  ValidateResourcePolicyCommand,
  ValidateResourcePolicyCommandInput,
  ValidateResourcePolicyCommandOutput,
} from "./commands/ValidateResourcePolicyCommand.ts";
import { HttpHandlerOptions as __HttpHandlerOptions } from "../types/mod.ts";

/**
 * <fullname>Amazon Web Services Secrets Manager</fullname>
 *          <p>Amazon Web Services Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets.</p>
 *
 *          <p>This guide provides descriptions of the Secrets Manager API. For more information about using this
 *       service, see the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/introduction.html">Amazon Web Services Secrets Manager User Guide</a>.</p>
 *
 *          <p>
 *             <b>API Version</b>
 *          </p>
 *
 *          <p>This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.</p>
 *          <note>
 *             <p>As an alternative to using the API, you can use one of the Amazon Web Services SDKs, which consist of
 *         libraries and sample code for various programming languages and platforms such as Java,
 *         Ruby, .NET, iOS, and Android. The SDKs provide a convenient way to create programmatic
 *         access to Amazon Web Services Secrets Manager. For example, the SDKs provide cryptographically signing requests,
 *         managing errors, and retrying requests automatically. For more information about the Amazon Web Services
 *         SDKs, including downloading and installing them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 *          <p>We recommend you use the Amazon Web Services SDKs to make programmatic API calls to Secrets Manager. However, you
 *       also can use the Secrets Manager HTTP Query API to make direct calls to the Secrets Manager web service. To learn
 *       more about the Secrets Manager HTTP Query API, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/query-requests.html">Making Query Requests</a> in the
 *       <i>Amazon Web Services Secrets Manager User Guide</i>. </p>
 *          <p>Secrets Manager API supports GET and POST requests for all actions, and doesn't require you to use
 *       GET for some actions and POST for others. However, GET requests are subject to the limitation
 *       size of a URL. Therefore, for operations that require larger sizes, use a POST request.</p>
 *
 *
 *
 *
 *
 *
 *
 *          <p>
 *             <b>Support and Feedback for Amazon Web Services Secrets Manager</b>
 *          </p>
 *
 *          <p>We welcome your feedback. Send your comments to <a href="mailto:awssecretsmanager-feedback@amazon.com">awssecretsmanager-feedback@amazon.com</a>, or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=296">Amazon Web Services Secrets Manager Discussion Forum</a>. For more
 *       information about the Amazon Web Services Discussion Forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums
 *         Help</a>.</p>
 *
 *          <p>
 *             <b>How examples are presented</b>
 *          </p>
 *
 *          <p>The JSON that Amazon Web Services Secrets Manager expects as your request parameters and the service returns as a
 *       response to HTTP query requests contain single, long strings without line breaks or white
 *       space formatting. The JSON shown in the examples displays the code formatted with both line
 *       breaks and white space to improve readability. When example input parameters can also cause
 *       long strings extending beyond the screen, you can insert line breaks to enhance readability.
 *       You should always submit the input as a single JSON text string.</p>
 *
 *
 *          <p>
 *             <b>Logging API Requests</b>
 *          </p>
 *          <p>Amazon Web Services Secrets Manager supports Amazon Web Services CloudTrail, a service that records Amazon Web Services API calls for your Amazon Web Services
 *       account and delivers log files to an Amazon S3 bucket. By using information that's collected
 *       by Amazon Web Services CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the
 *       request, when it was made, and so on. For more about Amazon Web Services Secrets Manager and support for Amazon Web Services
 *       CloudTrail, see <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring.html#monitoring_cloudtrail">Logging
 *         Amazon Web Services Secrets Manager Events with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Secrets Manager User Guide</i>.
 *       To learn more about CloudTrail, including enabling it and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">Amazon Web Services CloudTrail User Guide</a>.</p>
 */
export class SecretsManager extends SecretsManagerClient {
  /**
   * <p>Disables automatic scheduled rotation and cancels the rotation of a secret if currently in
   *       progress.</p>
   *          <p>To re-enable scheduled rotation, call <a>RotateSecret</a> with
   *         <code>AutomaticallyRotateAfterDays</code> set to a value greater than 0. This immediately
   *       rotates your secret and then enables the automatic schedule.</p>
   *          <note>
   *             <p>If you cancel a rotation while in progress, it can leave the <code>VersionStage</code>
   *         labels in an unexpected state. Depending on the step of the rotation in progress, you might
   *         need to remove the staging label <code>AWSPENDING</code> from the partially created version, specified
   *         by the <code>VersionId</code> response value. You should also evaluate the partially rotated
   *         new version to see if it should be deleted, which you can do by removing all staging labels
   *         from the new version <code>VersionStage</code> field.</p>
   *          </note>
   *          <p>To successfully start a rotation, the staging label <code>AWSPENDING</code> must be in one of the
   *       following states:</p>
   *          <ul>
   *             <li>
   *                <p>Not attached to any version at all</p>
   *             </li>
   *             <li>
   *                <p>Attached to the same version as the staging label <code>AWSCURRENT</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If the staging label <code>AWSPENDING</code> attached to a different version than the version with
   *       <code>AWSCURRENT</code> then the attempt to rotate fails.</p>
   *
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:CancelRotateSecret</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To configure rotation for a secret or to manually trigger a rotation, use <a>RotateSecret</a>.</p>
   *             </li>
   *             <li>
   *                <p>To get the rotation configuration details for a secret, use <a>DescribeSecret</a>.</p>
   *             </li>
   *             <li>
   *                <p>To list all of the currently available secrets, use <a>ListSecrets</a>.</p>
   *             </li>
   *             <li>
   *                <p>To list all of the versions currently associated with a secret, use <a>ListSecretVersionIds</a>.</p>
   *             </li>
   *          </ul>
   */
  public cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelRotateSecretCommandOutput>;
  public cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    cb: (err: any, data?: CancelRotateSecretCommandOutput) => void
  ): void;
  public cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelRotateSecretCommandOutput) => void
  ): void;
  public cancelRotateSecret(
    args: CancelRotateSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelRotateSecretCommandOutput) => void),
    cb?: (err: any, data?: CancelRotateSecretCommandOutput) => void
  ): Promise<CancelRotateSecretCommandOutput> | void {
    const command = new CancelRotateSecretCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new secret. A secret in Secrets Manager consists of both the protected secret data and the
   *       important information needed to manage the secret.</p>
   *          <p>Secrets Manager stores the encrypted secret data in one of a collection of "versions"
   *       associated with the secret. Each version contains a copy of the encrypted secret data. Each
   *       version is associated with one or more "staging labels" that identify where the version is in
   *       the rotation cycle. The <code>SecretVersionsToStages</code> field of the secret contains the
   *       mapping of staging labels to the active versions of the secret. Versions without a staging
   *       label are considered deprecated and not included in the list.</p>
   *          <p>You provide the secret data to be encrypted by putting text in either the
   *         <code>SecretString</code> parameter or binary data in the <code>SecretBinary</code>
   *       parameter, but not both. If you include <code>SecretString</code> or <code>SecretBinary</code>
   *       then Secrets Manager also creates an initial secret version and automatically attaches the staging
   *       label <code>AWSCURRENT</code> to the new version.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If you call an operation to encrypt or decrypt the <code>SecretString</code>
   *           or <code>SecretBinary</code> for a secret in the same account as the calling user and that
   *           secret doesn't specify a Amazon Web Services KMS encryption key, Secrets Manager uses the account's default
   *           Amazon Web Services managed customer master key (CMK) with the alias <code>aws/secretsmanager</code>. If this key
   *           doesn't already exist in your account then Secrets Manager creates it for you automatically. All
   *           users and roles in the same Amazon Web Services account automatically have access to use the default CMK.
   *           Note that if an Secrets Manager API call results in Amazon Web Services creating the account's
   *           Amazon Web Services-managed CMK, it can result in a one-time significant delay in returning the
   *           result.</p>
   *                </li>
   *                <li>
   *                   <p>If the secret resides in a different Amazon Web Services account from the credentials calling an API that
   *           requires encryption or decryption of the secret value then you must create and use a custom
   *           Amazon Web Services KMS CMK because you can't access the default CMK for the account using credentials
   *           from a different Amazon Web Services account. Store the ARN of the CMK in the secret when you create the
   *           secret or when you update it by including it in the <code>KMSKeyId</code>. If you call an
   *           API that must encrypt or decrypt <code>SecretString</code> or <code>SecretBinary</code>
   *           using credentials from a different account then the Amazon Web Services KMS key policy must grant cross-account
   *           access to that other account's user or role for both the kms:GenerateDataKey and
   *           kms:Decrypt operations.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p> </p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:CreateSecret</p>
   *             </li>
   *             <li>
   *                <p>kms:GenerateDataKey - needed only if you use a customer-managed Amazon Web Services KMS key to encrypt
   *           the secret. You do not need this permission to use the account default Amazon Web Services managed CMK
   *           for Secrets Manager.</p>
   *             </li>
   *             <li>
   *                <p>kms:Decrypt - needed only if you use a customer-managed Amazon Web Services KMS key to encrypt the
   *           secret. You do not need this permission to use the account default Amazon Web Services managed CMK for
   *           Secrets Manager.</p>
   *             </li>
   *             <li>
   *                <p>secretsmanager:TagResource - needed only if you include the <code>Tags</code>
   *           parameter. </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To delete a secret, use <a>DeleteSecret</a>.</p>
   *             </li>
   *             <li>
   *                <p>To modify an existing secret, use <a>UpdateSecret</a>.</p>
   *             </li>
   *             <li>
   *                <p>To create a new version of a secret, use <a>PutSecretValue</a>.</p>
   *             </li>
   *             <li>
   *                <p>To retrieve the encrypted secure string and secure binary values, use <a>GetSecretValue</a>.</p>
   *             </li>
   *             <li>
   *                <p>To retrieve all other details for a secret, use <a>DescribeSecret</a>. This
   *           does not include the encrypted secure string and secure binary values.</p>
   *             </li>
   *             <li>
   *                <p>To retrieve the list of secret versions associated with the current secret, use <a>DescribeSecret</a> and examine the <code>SecretVersionsToStages</code> response
   *           value.</p>
   *             </li>
   *          </ul>
   */
  public createSecret(
    args: CreateSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSecretCommandOutput>;
  public createSecret(args: CreateSecretCommandInput, cb: (err: any, data?: CreateSecretCommandOutput) => void): void;
  public createSecret(
    args: CreateSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSecretCommandOutput) => void
  ): void;
  public createSecret(
    args: CreateSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSecretCommandOutput) => void),
    cb?: (err: any, data?: CreateSecretCommandOutput) => void
  ): Promise<CreateSecretCommandOutput> | void {
    const command = new CreateSecretCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the resource-based permission policy attached to the secret.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:DeleteResourcePolicy</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To attach a resource policy to a secret, use <a>PutResourcePolicy</a>.</p>
   *             </li>
   *             <li>
   *                <p>To retrieve the current resource-based policy attached to a secret, use <a>GetResourcePolicy</a>.</p>
   *             </li>
   *             <li>
   *                <p>To list all of the currently available secrets, use <a>ListSecrets</a>.</p>
   *             </li>
   *          </ul>
   */
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): Promise<DeleteResourcePolicyCommandOutput> | void {
    const command = new DeleteResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an entire secret and all of the versions. You can optionally include a recovery
   *       window during which you can restore the secret. If you don't specify a recovery window value,
   *       the operation defaults to 30 days. Secrets Manager attaches a <code>DeletionDate</code> stamp to
   *       the secret that specifies the end of the recovery window. At the end of the recovery window,
   *       Secrets Manager deletes the secret permanently.</p>
   *          <p>At any time before recovery window ends, you can use <a>RestoreSecret</a> to
   *       remove the <code>DeletionDate</code> and cancel the deletion of the secret.</p>
   *          <p>You cannot access the encrypted secret information in any secret scheduled for deletion.
   *       If you need to access that information, you must cancel the deletion with <a>RestoreSecret</a> and then retrieve the information.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>There is no explicit operation to delete a version of a secret. Instead, remove all
   *             staging labels from the <code>VersionStage</code> field of a version. That marks the
   *             version as deprecated and allows Secrets Manager to delete it as needed. Versions without any
   *             staging labels do not show up in <a>ListSecretVersionIds</a> unless you
   *             specify <code>IncludeDeprecated</code>.</p>
   *                </li>
   *                <li>
   *                   <p>The permanent secret deletion at the end of the waiting period is performed as a
   *             background task with low priority. There is no guarantee of a specific time after the
   *             recovery window for the actual delete operation to occur.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:DeleteSecret</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To create a secret, use <a>CreateSecret</a>.</p>
   *             </li>
   *             <li>
   *                <p>To cancel deletion of a version of a secret before the recovery window has expired,
   *           use <a>RestoreSecret</a>.</p>
   *             </li>
   *          </ul>
   */
  public deleteSecret(
    args: DeleteSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSecretCommandOutput>;
  public deleteSecret(args: DeleteSecretCommandInput, cb: (err: any, data?: DeleteSecretCommandOutput) => void): void;
  public deleteSecret(
    args: DeleteSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSecretCommandOutput) => void
  ): void;
  public deleteSecret(
    args: DeleteSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSecretCommandOutput) => void),
    cb?: (err: any, data?: DeleteSecretCommandOutput) => void
  ): Promise<DeleteSecretCommandOutput> | void {
    const command = new DeleteSecretCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the details of a secret. It does not include the encrypted fields. Secrets
   *       Manager only returns fields populated with a value in the response. </p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:DescribeSecret</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To create a secret, use <a>CreateSecret</a>.</p>
   *             </li>
   *             <li>
   *                <p>To modify a secret, use <a>UpdateSecret</a>.</p>
   *             </li>
   *             <li>
   *                <p>To retrieve the encrypted secret information in a version of the secret, use <a>GetSecretValue</a>.</p>
   *             </li>
   *             <li>
   *                <p>To list all of the secrets in the Amazon Web Services account, use <a>ListSecrets</a>.</p>
   *             </li>
   *          </ul>
   */
  public describeSecret(
    args: DescribeSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecretCommandOutput>;
  public describeSecret(
    args: DescribeSecretCommandInput,
    cb: (err: any, data?: DescribeSecretCommandOutput) => void
  ): void;
  public describeSecret(
    args: DescribeSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecretCommandOutput) => void
  ): void;
  public describeSecret(
    args: DescribeSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSecretCommandOutput) => void),
    cb?: (err: any, data?: DescribeSecretCommandOutput) => void
  ): Promise<DescribeSecretCommandOutput> | void {
    const command = new DescribeSecretCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Generates a random password of the specified complexity. This operation is intended for
   *       use in the Lambda rotation function. Per best practice, we recommend that you specify the
   *       maximum length and include every character type that the system you are generating a password
   *       for can support.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:GetRandomPassword</p>
   *             </li>
   *          </ul>
   */
  public getRandomPassword(
    args: GetRandomPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRandomPasswordCommandOutput>;
  public getRandomPassword(
    args: GetRandomPasswordCommandInput,
    cb: (err: any, data?: GetRandomPasswordCommandOutput) => void
  ): void;
  public getRandomPassword(
    args: GetRandomPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRandomPasswordCommandOutput) => void
  ): void;
  public getRandomPassword(
    args: GetRandomPasswordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRandomPasswordCommandOutput) => void),
    cb?: (err: any, data?: GetRandomPasswordCommandOutput) => void
  ): Promise<GetRandomPasswordCommandOutput> | void {
    const command = new GetRandomPasswordCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the JSON text of the resource-based policy document attached to the specified
   *       secret. The JSON request string input and response output displays formatted code
   *       with white space and line breaks for better readability. Submit your input as a single line
   *       JSON string.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:GetResourcePolicy</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To attach a resource policy to a secret, use <a>PutResourcePolicy</a>.</p>
   *             </li>
   *             <li>
   *                <p>To delete the resource-based policy attached to a secret, use <a>DeleteResourcePolicy</a>.</p>
   *             </li>
   *             <li>
   *                <p>To list all of the currently available secrets, use <a>ListSecrets</a>.</p>
   *             </li>
   *          </ul>
   */
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): Promise<GetResourcePolicyCommandOutput> | void {
    const command = new GetResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the contents of the encrypted fields <code>SecretString</code> or
   *         <code>SecretBinary</code> from the specified version of a secret, whichever contains
   *       content.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:GetSecretValue</p>
   *             </li>
   *             <li>
   *                <p>kms:Decrypt - required only if you use a customer-managed Amazon Web Services KMS key to encrypt the
   *           secret. You do not need this permission to use the account's default Amazon Web Services managed CMK for
   *           Secrets Manager.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To create a new version of the secret with different encrypted information, use <a>PutSecretValue</a>.</p>
   *             </li>
   *             <li>
   *                <p>To retrieve the non-encrypted details for the secret, use <a>DescribeSecret</a>.</p>
   *             </li>
   *          </ul>
   */
  public getSecretValue(
    args: GetSecretValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSecretValueCommandOutput>;
  public getSecretValue(
    args: GetSecretValueCommandInput,
    cb: (err: any, data?: GetSecretValueCommandOutput) => void
  ): void;
  public getSecretValue(
    args: GetSecretValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSecretValueCommandOutput) => void
  ): void;
  public getSecretValue(
    args: GetSecretValueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSecretValueCommandOutput) => void),
    cb?: (err: any, data?: GetSecretValueCommandOutput) => void
  ): Promise<GetSecretValueCommandOutput> | void {
    const command = new GetSecretValueCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of the secrets that are stored by Secrets Manager in the Amazon Web Services account. To list the
   *       versions currently stored for a specific secret, use <a>ListSecretVersionIds</a>.
   *       The encrypted fields <code>SecretString</code> and <code>SecretBinary</code> are not included
   *       in the output. To get that information, call the <a>GetSecretValue</a>
   *       operation.</p>
   *          <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   *     when calling any of the <code>List*</code> operations. These operations can occasionally return
   *     an empty or shorter than expected list of results even when there more results become available.
   *     When this happens, the <code>NextToken</code> response parameter contains a value to pass to the
   *     next call to the same API to request the next part of the list.</p>
   *          </note>
   *          <p>
   *             <b>Minimum
   *         permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:ListSecrets</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To list the versions attached to a secret, use <a>ListSecretVersionIds</a>.</p>
   *             </li>
   *          </ul>
   */
  public listSecrets(args: ListSecretsCommandInput, options?: __HttpHandlerOptions): Promise<ListSecretsCommandOutput>;
  public listSecrets(args: ListSecretsCommandInput, cb: (err: any, data?: ListSecretsCommandOutput) => void): void;
  public listSecrets(
    args: ListSecretsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecretsCommandOutput) => void
  ): void;
  public listSecrets(
    args: ListSecretsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSecretsCommandOutput) => void),
    cb?: (err: any, data?: ListSecretsCommandOutput) => void
  ): Promise<ListSecretsCommandOutput> | void {
    const command = new ListSecretsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of the versions attached to the specified secret. The output does not include
   *       the <code>SecretString</code> or <code>SecretBinary</code> fields. By default, the list
   *       includes only versions that have at least one staging label in <code>VersionStage</code>
   *       attached.</p>
   *          <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   *     when calling any of the <code>List*</code> operations. These operations can occasionally return
   *     an empty or shorter than expected list of results even when there more results become available.
   *     When this happens, the <code>NextToken</code> response parameter contains a value to pass to the
   *     next call to the same API to request the next part of the list.</p>
   *          </note>
   *          <p>
   *             <b>Minimum
   *       permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:ListSecretVersionIds</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To list the secrets in an account, use <a>ListSecrets</a>.</p>
   *             </li>
   *          </ul>
   */
  public listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecretVersionIdsCommandOutput>;
  public listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    cb: (err: any, data?: ListSecretVersionIdsCommandOutput) => void
  ): void;
  public listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecretVersionIdsCommandOutput) => void
  ): void;
  public listSecretVersionIds(
    args: ListSecretVersionIdsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSecretVersionIdsCommandOutput) => void),
    cb?: (err: any, data?: ListSecretVersionIdsCommandOutput) => void
  ): Promise<ListSecretVersionIdsCommandOutput> | void {
    const command = new ListSecretVersionIdsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches the contents of the specified resource-based permission policy to a secret. A
   *       resource-based policy is optional. Alternatively, you can use IAM identity-based policies
   *       that specify the secret's Amazon Resource Name (ARN) in the policy statement's
   *         <code>Resources</code> element. You can also use a combination of both identity-based and
   *       resource-based policies. The affected users and roles receive the permissions that are
   *       permitted by all of the relevant policies. For more information, see <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html">Using Resource-Based
   *         Policies for Amazon Web Services Secrets Manager</a>. For the complete description of the Amazon Web Services policy syntax and
   *       grammar, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON
   *         Policy Reference</a> in the <i>IAM User Guide</i>.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:PutResourcePolicy</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To retrieve the resource policy attached to a secret, use <a>GetResourcePolicy</a>.</p>
   *             </li>
   *             <li>
   *                <p>To delete the resource-based policy attached to a secret, use <a>DeleteResourcePolicy</a>.</p>
   *             </li>
   *             <li>
   *                <p>To list all of the currently available secrets, use <a>ListSecrets</a>.</p>
   *             </li>
   *          </ul>
   */
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): Promise<PutResourcePolicyCommandOutput> | void {
    const command = new PutResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stores a new encrypted secret value in the specified secret. To do this, the operation
   *       creates a new version and attaches it to the secret. The version can contain a new
   *         <code>SecretString</code> value or a new <code>SecretBinary</code> value. You can also
   *       specify the staging labels that are initially attached to the new version.</p>
   *          <note>
   *             <p>The Secrets Manager console uses only the <code>SecretString</code> field. To add binary data to a
   *         secret with the <code>SecretBinary</code> field you must use the Amazon Web Services CLI or one of the
   *         Amazon Web Services SDKs.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>If this operation creates the first version for the secret then Secrets Manager
   *           automatically attaches the staging label <code>AWSCURRENT</code> to the new version.</p>
   *             </li>
   *             <li>
   *                <p>If you do not specify a value for VersionStages then Secrets Manager automatically
   *           moves the staging label <code>AWSCURRENT</code> to this new version.</p>
   *             </li>
   *             <li>
   *                <p>If this operation moves the staging label <code>AWSCURRENT</code> from another version to this
   *           version, then Secrets Manager also automatically moves the staging label <code>AWSPREVIOUS</code> to
   *           the version that <code>AWSCURRENT</code> was removed from.</p>
   *             </li>
   *             <li>
   *                <p>This operation is idempotent. If a version with a <code>VersionId</code> with the same
   *           value as the <code>ClientRequestToken</code> parameter already exists and you specify the
   *           same secret data, the operation succeeds but does nothing. However, if the secret data is
   *           different, then the operation fails because you cannot modify an existing version; you can
   *           only create new ones.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If you call an operation to encrypt or decrypt the <code>SecretString</code>
   *           or <code>SecretBinary</code> for a secret in the same account as the calling user and that
   *           secret doesn't specify a Amazon Web Services KMS encryption key, Secrets Manager uses the account's default
   *           Amazon Web Services managed customer master key (CMK) with the alias <code>aws/secretsmanager</code>. If this key
   *           doesn't already exist in your account then Secrets Manager creates it for you automatically. All
   *           users and roles in the same Amazon Web Services account automatically have access to use the default CMK.
   *           Note that if an Secrets Manager API call results in Amazon Web Services creating the account's
   *           Amazon Web Services-managed CMK, it can result in a one-time significant delay in returning the
   *           result.</p>
   *                </li>
   *                <li>
   *                   <p>If the secret resides in a different Amazon Web Services account from the credentials calling an API that
   *           requires encryption or decryption of the secret value then you must create and use a custom
   *           Amazon Web Services KMS CMK because you can't access the default CMK for the account using credentials
   *           from a different Amazon Web Services account. Store the ARN of the CMK in the secret when you create the
   *           secret or when you update it by including it in the <code>KMSKeyId</code>. If you call an
   *           API that must encrypt or decrypt <code>SecretString</code> or <code>SecretBinary</code>
   *           using credentials from a different account then the Amazon Web Services KMS key policy must grant cross-account
   *           access to that other account's user or role for both the kms:GenerateDataKey and
   *           kms:Decrypt operations.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:PutSecretValue</p>
   *             </li>
   *             <li>
   *                <p>kms:GenerateDataKey - needed only if you use a customer-managed Amazon Web Services KMS key to encrypt
   *           the secret. You do not need this permission to use the account's default Amazon Web Services managed CMK
   *           for Secrets Manager.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To retrieve the encrypted value you store in the version of a secret, use <a>GetSecretValue</a>.</p>
   *             </li>
   *             <li>
   *                <p>To create a secret, use <a>CreateSecret</a>.</p>
   *             </li>
   *             <li>
   *                <p>To get the details for a secret, use <a>DescribeSecret</a>.</p>
   *             </li>
   *             <li>
   *                <p>To list the versions attached to a secret, use <a>ListSecretVersionIds</a>.</p>
   *             </li>
   *          </ul>
   */
  public putSecretValue(
    args: PutSecretValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSecretValueCommandOutput>;
  public putSecretValue(
    args: PutSecretValueCommandInput,
    cb: (err: any, data?: PutSecretValueCommandOutput) => void
  ): void;
  public putSecretValue(
    args: PutSecretValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSecretValueCommandOutput) => void
  ): void;
  public putSecretValue(
    args: PutSecretValueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutSecretValueCommandOutput) => void),
    cb?: (err: any, data?: PutSecretValueCommandOutput) => void
  ): Promise<PutSecretValueCommandOutput> | void {
    const command = new PutSecretValueCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Remove regions from replication.</p>
   */
  public removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveRegionsFromReplicationCommandOutput>;
  public removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    cb: (err: any, data?: RemoveRegionsFromReplicationCommandOutput) => void
  ): void;
  public removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveRegionsFromReplicationCommandOutput) => void
  ): void;
  public removeRegionsFromReplication(
    args: RemoveRegionsFromReplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveRegionsFromReplicationCommandOutput) => void),
    cb?: (err: any, data?: RemoveRegionsFromReplicationCommandOutput) => void
  ): Promise<RemoveRegionsFromReplicationCommandOutput> | void {
    const command = new RemoveRegionsFromReplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Converts an existing secret to a multi-Region secret and begins replication the secret to a
   *       list of new regions. </p>
   */
  public replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReplicateSecretToRegionsCommandOutput>;
  public replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    cb: (err: any, data?: ReplicateSecretToRegionsCommandOutput) => void
  ): void;
  public replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReplicateSecretToRegionsCommandOutput) => void
  ): void;
  public replicateSecretToRegions(
    args: ReplicateSecretToRegionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReplicateSecretToRegionsCommandOutput) => void),
    cb?: (err: any, data?: ReplicateSecretToRegionsCommandOutput) => void
  ): Promise<ReplicateSecretToRegionsCommandOutput> | void {
    const command = new ReplicateSecretToRegionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels the scheduled deletion of a secret by removing the <code>DeletedDate</code> time
   *       stamp. This makes the secret accessible to query once again.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:RestoreSecret</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To delete a secret, use <a>DeleteSecret</a>.</p>
   *             </li>
   *          </ul>
   */
  public restoreSecret(
    args: RestoreSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreSecretCommandOutput>;
  public restoreSecret(
    args: RestoreSecretCommandInput,
    cb: (err: any, data?: RestoreSecretCommandOutput) => void
  ): void;
  public restoreSecret(
    args: RestoreSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreSecretCommandOutput) => void
  ): void;
  public restoreSecret(
    args: RestoreSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreSecretCommandOutput) => void),
    cb?: (err: any, data?: RestoreSecretCommandOutput) => void
  ): Promise<RestoreSecretCommandOutput> | void {
    const command = new RestoreSecretCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configures and starts the asynchronous process of rotating this secret. If you include the
   *       configuration parameters, the operation sets those values for the secret and then immediately
   *       starts a rotation. If you do not include the configuration parameters, the operation starts a
   *       rotation with the values already stored in the secret. After the rotation completes, the
   *       protected service and its clients all use the new version of the secret. </p>
   *          <p>This required configuration information includes the ARN of an Amazon Web Services Lambda function and
   *       optionally, the time between scheduled rotations. The Lambda rotation function creates a new
   *       version of the secret and creates or updates the credentials on the protected service to
   *       match. After testing the new credentials, the function marks the new secret with the staging
   *       label <code>AWSCURRENT</code> so that your clients all immediately begin to use the new version. For more
   *       information about rotating secrets and how to configure a Lambda function to rotate the
   *       secrets for your protected service, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html">Rotating Secrets in Amazon Web Services Secrets Manager</a> in the
   *         <i>Amazon Web Services Secrets Manager User Guide</i>.</p>
   *          <p>Secrets Manager schedules the next rotation when the previous
   *     one completes. Secrets Manager schedules the date by adding the rotation interval (number of days) to the
   *     actual date of the last rotation. The service chooses the hour within that 24-hour date window
   *     randomly. The minute is also chosen somewhat randomly, but weighted towards the top of the hour
   *     and influenced by a variety of factors that help distribute load.</p>
   *          <p>The
   *       rotation function must end with the versions of the secret in one of two states:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>AWSPENDING</code> and <code>AWSCURRENT</code> staging labels are attached to the same version of
   *           the secret, or</p>
   *             </li>
   *             <li>
   *                <p>The <code>AWSPENDING</code> staging label is not attached to any version of the secret.</p>
   *             </li>
   *          </ul>
   *          <p>If the <code>AWSPENDING</code> staging label is present but not attached to the same version as
   *       <code>AWSCURRENT</code> then any later invocation of <code>RotateSecret</code> assumes that a previous
   *       rotation request is still in progress and returns an error.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:RotateSecret</p>
   *             </li>
   *             <li>
   *                <p>lambda:InvokeFunction (on the function specified in the secret's metadata)</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To list the secrets in your account, use <a>ListSecrets</a>.</p>
   *             </li>
   *             <li>
   *                <p>To get the details for a version of a secret, use <a>DescribeSecret</a>.</p>
   *             </li>
   *             <li>
   *                <p>To create a new version of a secret, use <a>CreateSecret</a>.</p>
   *             </li>
   *             <li>
   *                <p>To attach staging labels to or remove staging labels from a version of a secret, use
   *             <a>UpdateSecretVersionStage</a>.</p>
   *             </li>
   *          </ul>
   */
  public rotateSecret(
    args: RotateSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RotateSecretCommandOutput>;
  public rotateSecret(args: RotateSecretCommandInput, cb: (err: any, data?: RotateSecretCommandOutput) => void): void;
  public rotateSecret(
    args: RotateSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RotateSecretCommandOutput) => void
  ): void;
  public rotateSecret(
    args: RotateSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RotateSecretCommandOutput) => void),
    cb?: (err: any, data?: RotateSecretCommandOutput) => void
  ): Promise<RotateSecretCommandOutput> | void {
    const command = new RotateSecretCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the secret from replication and promotes the secret to a regional secret in the replica Region.</p>
   */
  public stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopReplicationToReplicaCommandOutput>;
  public stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    cb: (err: any, data?: StopReplicationToReplicaCommandOutput) => void
  ): void;
  public stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopReplicationToReplicaCommandOutput) => void
  ): void;
  public stopReplicationToReplica(
    args: StopReplicationToReplicaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopReplicationToReplicaCommandOutput) => void),
    cb?: (err: any, data?: StopReplicationToReplicaCommandOutput) => void
  ): Promise<StopReplicationToReplicaCommandOutput> | void {
    const command = new StopReplicationToReplicaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches one or more tags, each consisting of a key name and a value, to the specified
   *       secret. Tags are part of the secret's overall metadata, and are not associated with any
   *       specific version of the secret. This operation only appends tags to the existing list of tags.
   *       To remove tags, you must use <a>UntagResource</a>.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                <p>Maximum number of tags per secret—50</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length—127 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length—255 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use the <code>aws:</code> prefix in your tag names or values because Amazon Web Services reserves it
   *             for Amazon Web Services use. You can't edit or delete tag names or values with this
   *               prefix. Tags with this prefix do not count against your tags per secret limit.</p>
   *             </li>
   *             <li>
   *                <p>If you use your tagging schema across multiple services and resources,
   *               remember other services might have restrictions on allowed characters. Generally
   *               allowed characters: letters, spaces, and numbers representable in UTF-8, plus the
   *               following special characters: + - = . _ : / @.</p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>If you use tags as part of your security strategy, then adding or removing a tag can
   *         change permissions. If successfully completing this operation would result in you losing
   *         your permissions for this secret, then the operation is blocked and returns an Access Denied
   *         error.</p>
   *          </important>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:TagResource</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To remove one or more tags from the collection attached to a secret, use <a>UntagResource</a>.</p>
   *             </li>
   *             <li>
   *                <p>To view the list of tags attached to a secret, use <a>DescribeSecret</a>.</p>
   *             </li>
   *          </ul>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes one or more tags from the specified secret.</p>
   *          <p>This operation is idempotent. If a requested tag is not attached to the secret, no error
   *       is returned and the secret metadata is unchanged.</p>
   *          <important>
   *             <p>If you use tags as part of your security strategy, then removing a tag can change
   *         permissions. If successfully completing this operation would result in you losing your
   *         permissions for this secret, then the operation is blocked and returns an Access Denied
   *         error.</p>
   *          </important>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:UntagResource</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To add one or more tags to the collection attached to a secret, use <a>TagResource</a>.</p>
   *             </li>
   *             <li>
   *                <p>To view the list of tags attached to a secret, use <a>DescribeSecret</a>.</p>
   *             </li>
   *          </ul>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies many of the details of the specified secret. If you include a
   *         <code>ClientRequestToken</code> and <i>either</i>
   *             <code>SecretString</code> or <code>SecretBinary</code> then it also creates a new version
   *       attached to the secret.</p>
   *          <p>To modify the rotation configuration of a secret, use <a>RotateSecret</a>
   *       instead.</p>
   *          <note>
   *             <p>The Secrets Manager console uses only the <code>SecretString</code> parameter and therefore limits
   *         you to encrypting and storing only a text string. To encrypt and store binary data as part
   *         of the version of a secret, you must use either the Amazon Web Services CLI or one of the Amazon Web Services
   *         SDKs.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>If a version with a <code>VersionId</code> with the same value as the
   *             <code>ClientRequestToken</code> parameter already exists, the operation results in an
   *           error. You cannot modify an existing version, you can only create a new version.</p>
   *             </li>
   *             <li>
   *                <p>If you include <code>SecretString</code> or <code>SecretBinary</code> to create a new
   *           secret version, Secrets Manager automatically attaches the staging label <code>AWSCURRENT</code> to the new
   *           version. </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If you call an operation to encrypt or decrypt the <code>SecretString</code>
   *           or <code>SecretBinary</code> for a secret in the same account as the calling user and that
   *           secret doesn't specify a Amazon Web Services KMS encryption key, Secrets Manager uses the account's default
   *           Amazon Web Services managed customer master key (CMK) with the alias <code>aws/secretsmanager</code>. If this key
   *           doesn't already exist in your account then Secrets Manager creates it for you automatically. All
   *           users and roles in the same Amazon Web Services account automatically have access to use the default CMK.
   *           Note that if an Secrets Manager API call results in Amazon Web Services creating the account's
   *           Amazon Web Services-managed CMK, it can result in a one-time significant delay in returning the
   *           result.</p>
   *                </li>
   *                <li>
   *                   <p>If the secret resides in a different Amazon Web Services account from the credentials calling an API that
   *           requires encryption or decryption of the secret value then you must create and use a custom
   *           Amazon Web Services KMS CMK because you can't access the default CMK for the account using credentials
   *           from a different Amazon Web Services account. Store the ARN of the CMK in the secret when you create the
   *           secret or when you update it by including it in the <code>KMSKeyId</code>. If you call an
   *           API that must encrypt or decrypt <code>SecretString</code> or <code>SecretBinary</code>
   *           using credentials from a different account then the Amazon Web Services KMS key policy must grant cross-account
   *           access to that other account's user or role for both the kms:GenerateDataKey and
   *           kms:Decrypt operations.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:UpdateSecret</p>
   *             </li>
   *             <li>
   *                <p>kms:GenerateDataKey - needed only if you use a custom Amazon Web Services KMS key to encrypt the secret.
   *           You do not need this permission to use the account's Amazon Web Services managed CMK for
   *           Secrets Manager.</p>
   *             </li>
   *             <li>
   *                <p>kms:Decrypt - needed only if you use a custom Amazon Web Services KMS key to encrypt the secret. You do
   *           not need this permission to use the account's Amazon Web Services managed CMK for Secrets Manager.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To create a new secret, use <a>CreateSecret</a>.</p>
   *             </li>
   *             <li>
   *                <p>To add only a new version to an existing secret, use <a>PutSecretValue</a>.</p>
   *             </li>
   *             <li>
   *                <p>To get the details for a secret, use <a>DescribeSecret</a>.</p>
   *             </li>
   *             <li>
   *                <p>To list the versions contained in a secret, use <a>ListSecretVersionIds</a>.</p>
   *             </li>
   *          </ul>
   */
  public updateSecret(
    args: UpdateSecretCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecretCommandOutput>;
  public updateSecret(args: UpdateSecretCommandInput, cb: (err: any, data?: UpdateSecretCommandOutput) => void): void;
  public updateSecret(
    args: UpdateSecretCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecretCommandOutput) => void
  ): void;
  public updateSecret(
    args: UpdateSecretCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSecretCommandOutput) => void),
    cb?: (err: any, data?: UpdateSecretCommandOutput) => void
  ): Promise<UpdateSecretCommandOutput> | void {
    const command = new UpdateSecretCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the staging labels attached to a version of a secret. Staging labels are used to
   *       track a version as it progresses through the secret rotation process. You can attach a staging
   *       label to only one version of a secret at a time. If a staging label to be added is already
   *       attached to another version, then it is moved--removed from the other version first and
   *       then attached to this one. For more information about staging labels, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/terms-concepts.html#term_staging-label">Staging
   *         Labels</a> in the <i>Amazon Web Services Secrets Manager User Guide</i>. </p>
   *          <p>The staging labels that you specify in the <code>VersionStage</code> parameter are added
   *       to the existing list of staging labels--they don't replace it.</p>
   *          <p>You can move the <code>AWSCURRENT</code> staging label to this version by including it in this
   *       call.</p>
   *          <note>
   *             <p>Whenever you move <code>AWSCURRENT</code>, Secrets Manager automatically moves the label <code>AWSPREVIOUS</code>
   *         to the version that <code>AWSCURRENT</code> was removed from.</p>
   *          </note>
   *          <p>If this action results in the last label being removed from a version, then the version is
   *       considered to be 'deprecated' and can be deleted by Secrets Manager.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>secretsmanager:UpdateSecretVersionStage</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To get the list of staging labels that are currently associated with a version of a
   *           secret, use <code>
   *                      <a>DescribeSecret</a>
   *                   </code> and examine the
   *             <code>SecretVersionsToStages</code> response value. </p>
   *             </li>
   *          </ul>
   */
  public updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSecretVersionStageCommandOutput>;
  public updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    cb: (err: any, data?: UpdateSecretVersionStageCommandOutput) => void
  ): void;
  public updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSecretVersionStageCommandOutput) => void
  ): void;
  public updateSecretVersionStage(
    args: UpdateSecretVersionStageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSecretVersionStageCommandOutput) => void),
    cb?: (err: any, data?: UpdateSecretVersionStageCommandOutput) => void
  ): Promise<UpdateSecretVersionStageCommandOutput> | void {
    const command = new UpdateSecretVersionStageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Validates that the resource policy does not grant a wide range of IAM principals access to
   *       your secret. The JSON request string input and response output displays formatted code
   *       with white space and line breaks for better readability. Submit your input as a single line
   *       JSON string. A resource-based policy is optional for secrets.</p>
   *          <p>The API performs three checks when validating the secret:</p>
   *          <ul>
   *             <li>
   *                <p>Sends a call to <a href="https://aws.amazon.com/blogs/security/protect-sensitive-data-in-the-cloud-with-automated-reasoning-zelkova/">Zelkova</a>, an automated reasoning engine, to ensure your Resource Policy does not
   *           allow broad access to your secret.</p>
   *             </li>
   *             <li>
   *                <p>Checks for correct syntax in a policy.</p>
   *             </li>
   *             <li>
   *                <p>Verifies the policy does not lock out a caller.</p>
   *             </li>
   *          </ul>
   *
   *
   *          <p>
   *             <b>Minimum Permissions</b>
   *          </p>
   *          <p>You must have the permissions required to access the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>secretsmanager:PutResourcePolicy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>secretsmanager:ValidateResourcePolicy</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateResourcePolicyCommandOutput>;
  public validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    cb: (err: any, data?: ValidateResourcePolicyCommandOutput) => void
  ): void;
  public validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateResourcePolicyCommandOutput) => void
  ): void;
  public validateResourcePolicy(
    args: ValidateResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ValidateResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: ValidateResourcePolicyCommandOutput) => void
  ): Promise<ValidateResourcePolicyCommandOutput> | void {
    const command = new ValidateResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
