import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient.ts";
import { BatchEnableStandardsRequest, BatchEnableStandardsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1BatchEnableStandardsCommand,
  serializeAws_restJson1BatchEnableStandardsCommand,
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

export interface BatchEnableStandardsCommandInput extends BatchEnableStandardsRequest {}
export interface BatchEnableStandardsCommandOutput extends BatchEnableStandardsResponse, __MetadataBearer {}

/**
 * <p>Enables the standards specified by the provided <code>StandardsArn</code>. To obtain the
 *          ARN for a standard, use the <code>DescribeStandards</code>
 *          operation.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a>
 *          section of the <i>Security Hub User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchEnableStandardsCommand } from "../../client-securityhub/mod.ts";
 * // const { SecurityHubClient, BatchEnableStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new BatchEnableStandardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchEnableStandardsCommandInput} for command's `input` shape.
 * @see {@link BatchEnableStandardsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchEnableStandardsCommand extends $Command<
  BatchEnableStandardsCommandInput,
  BatchEnableStandardsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchEnableStandardsCommandInput) {
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
  ): Handler<BatchEnableStandardsCommandInput, BatchEnableStandardsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "BatchEnableStandardsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchEnableStandardsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchEnableStandardsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchEnableStandardsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchEnableStandardsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchEnableStandardsCommandOutput> {
    return deserializeAws_restJson1BatchEnableStandardsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
