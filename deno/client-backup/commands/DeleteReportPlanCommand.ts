import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient.ts";
import { DeleteReportPlanInput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteReportPlanCommand,
  serializeAws_restJson1DeleteReportPlanCommand,
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

export interface DeleteReportPlanCommandInput extends DeleteReportPlanInput {}
export interface DeleteReportPlanCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the report plan specified by a report plan name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteReportPlanCommand } from "../../client-backup/mod.ts";
 * // const { BackupClient, DeleteReportPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DeleteReportPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReportPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteReportPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteReportPlanCommand extends $Command<
  DeleteReportPlanCommandInput,
  DeleteReportPlanCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteReportPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteReportPlanCommandInput, DeleteReportPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DeleteReportPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteReportPlanInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteReportPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteReportPlanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteReportPlanCommandOutput> {
    return deserializeAws_restJson1DeleteReportPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
