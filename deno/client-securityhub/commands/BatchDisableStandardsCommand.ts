import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient.ts";
import { BatchDisableStandardsRequest, BatchDisableStandardsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1BatchDisableStandardsCommand,
  serializeAws_restJson1BatchDisableStandardsCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface BatchDisableStandardsCommandInput extends BatchDisableStandardsRequest {}
export interface BatchDisableStandardsCommandOutput extends BatchDisableStandardsResponse, __MetadataBearer {}

/**
 * <p>Disables the standards specified by the provided
 *          <code>StandardsSubscriptionArns</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>Security Hub User
 *          Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchDisableStandardsCommand } from "../../client-securityhub/mod.ts";
 * // const { SecurityHubClient, BatchDisableStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new BatchDisableStandardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisableStandardsCommandInput} for command's `input` shape.
 * @see {@link BatchDisableStandardsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchDisableStandardsCommand extends $Command<
  BatchDisableStandardsCommandInput,
  BatchDisableStandardsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDisableStandardsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDisableStandardsCommandInput, BatchDisableStandardsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "BatchDisableStandardsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDisableStandardsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDisableStandardsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDisableStandardsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDisableStandardsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDisableStandardsCommandOutput> {
    return deserializeAws_restJson1BatchDisableStandardsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
