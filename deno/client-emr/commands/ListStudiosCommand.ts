import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient.ts";
import { ListStudiosInput, ListStudiosOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListStudiosCommand,
  serializeAws_json1_1ListStudiosCommand,
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

export interface ListStudiosCommandInput extends ListStudiosInput {}
export interface ListStudiosCommandOutput extends ListStudiosOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list
 *          includes details such as ID, Studio Access URL, and creation time for each Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStudiosCommand } from "../../client-emr/mod.ts";
 * // const { EMRClient, ListStudiosCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListStudiosCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStudiosCommandInput} for command's `input` shape.
 * @see {@link ListStudiosCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListStudiosCommand extends $Command<
  ListStudiosCommandInput,
  ListStudiosCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStudiosCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStudiosCommandInput, ListStudiosCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListStudiosCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStudiosInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStudiosOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStudiosCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListStudiosCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStudiosCommandOutput> {
    return deserializeAws_json1_1ListStudiosCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
