import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { ListMeetingsRequest, ListMeetingsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListMeetingsCommand,
  serializeAws_restJson1ListMeetingsCommand,
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

export interface ListMeetingsCommandInput extends ListMeetingsRequest {}
export interface ListMeetingsCommandOutput extends ListMeetingsResponse, __MetadataBearer {}

/**
 * <p>
 * Lists up to 100 active Amazon Chime SDK meetings. For more information about the Amazon Chime SDK, see
 * <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 * in the <i>Amazon Chime Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListMeetingsCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, ListMeetingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListMeetingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMeetingsCommandInput} for command's `input` shape.
 * @see {@link ListMeetingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListMeetingsCommand extends $Command<
  ListMeetingsCommandInput,
  ListMeetingsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMeetingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMeetingsCommandInput, ListMeetingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListMeetingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMeetingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMeetingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMeetingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListMeetingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMeetingsCommandOutput> {
    return deserializeAws_restJson1ListMeetingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
