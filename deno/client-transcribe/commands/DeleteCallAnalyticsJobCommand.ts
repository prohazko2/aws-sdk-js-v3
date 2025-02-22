import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient.ts";
import { DeleteCallAnalyticsJobRequest, DeleteCallAnalyticsJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteCallAnalyticsJobCommand,
  serializeAws_json1_1DeleteCallAnalyticsJobCommand,
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

export interface DeleteCallAnalyticsJobCommandInput extends DeleteCallAnalyticsJobRequest {}
export interface DeleteCallAnalyticsJobCommandOutput extends DeleteCallAnalyticsJobResponse, __MetadataBearer {}

/**
 * <p>Deletes a call analytics job using its name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteCallAnalyticsJobCommand } from "../../client-transcribe/mod.ts";
 * // const { TranscribeClient, DeleteCallAnalyticsJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new DeleteCallAnalyticsJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCallAnalyticsJobCommandInput} for command's `input` shape.
 * @see {@link DeleteCallAnalyticsJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteCallAnalyticsJobCommand extends $Command<
  DeleteCallAnalyticsJobCommandInput,
  DeleteCallAnalyticsJobCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCallAnalyticsJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCallAnalyticsJobCommandInput, DeleteCallAnalyticsJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "DeleteCallAnalyticsJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCallAnalyticsJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCallAnalyticsJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCallAnalyticsJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCallAnalyticsJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCallAnalyticsJobCommandOutput> {
    return deserializeAws_json1_1DeleteCallAnalyticsJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
