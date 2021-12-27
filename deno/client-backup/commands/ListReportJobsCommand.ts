import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient.ts";
import { ListReportJobsInput, ListReportJobsOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListReportJobsCommand,
  serializeAws_restJson1ListReportJobsCommand,
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

export interface ListReportJobsCommandInput extends ListReportJobsInput {}
export interface ListReportJobsCommandOutput extends ListReportJobsOutput, __MetadataBearer {}

/**
 * <p>Returns details about your report jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListReportJobsCommand } from "../../client-backup/mod.ts";
 * // const { BackupClient, ListReportJobsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListReportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReportJobsCommandInput} for command's `input` shape.
 * @see {@link ListReportJobsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListReportJobsCommand extends $Command<
  ListReportJobsCommandInput,
  ListReportJobsCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReportJobsCommandInput) {
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
  ): Handler<ListReportJobsCommandInput, ListReportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListReportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReportJobsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListReportJobsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListReportJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReportJobsCommandOutput> {
    return deserializeAws_restJson1ListReportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
