import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient.ts";
import { AssociateKmsKeyRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AssociateKmsKeyCommand,
  serializeAws_json1_1AssociateKmsKeyCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export interface AssociateKmsKeyCommandInput extends AssociateKmsKeyRequest {}
export interface AssociateKmsKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates the specified Key Management Service customer master key (CMK) with the specified log group.</p>
 *          <p>Associating an KMS CMK with a log group overrides any existing associations between the log group and a CMK.
 *       After a CMK is associated with a log group, all newly ingested data for the log group is encrypted using the CMK.
 *       This association is stored as long as the data encrypted with the CMK is still within CloudWatch Logs.
 *       This enables CloudWatch Logs to decrypt this data whenever it is requested.</p>
 *          <important>
 *             <p>CloudWatch Logs supports only symmetric CMKs. Do not use an associate an asymmetric CMK
 *         with your log group. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric
 *           Keys</a>.</p>
 *          </important>
 *          <p>It can take up to 5 minutes for this operation to take effect.</p>
 *          <p>If you attempt to associate a CMK with a log group but the CMK does not exist or the
 *       CMK is disabled, you receive an <code>InvalidParameterException</code> error. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, AssociateKmsKeyCommand } from "../../client-cloudwatch-logs/mod.ts";
 * // const { CloudWatchLogsClient, AssociateKmsKeyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new AssociateKmsKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateKmsKeyCommandInput} for command's `input` shape.
 * @see {@link AssociateKmsKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateKmsKeyCommand extends $Command<
  AssociateKmsKeyCommandInput,
  AssociateKmsKeyCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateKmsKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateKmsKeyCommandInput, AssociateKmsKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "AssociateKmsKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateKmsKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateKmsKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateKmsKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateKmsKeyCommandOutput> {
    return deserializeAws_json1_1AssociateKmsKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
