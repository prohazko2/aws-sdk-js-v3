import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient.ts";
import { ListInstanceTypeDetailsRequest, ListInstanceTypeDetailsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListInstanceTypeDetailsCommand,
  serializeAws_restJson1ListInstanceTypeDetailsCommand,
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

export interface ListInstanceTypeDetailsCommandInput extends ListInstanceTypeDetailsRequest {}
export interface ListInstanceTypeDetailsCommandOutput extends ListInstanceTypeDetailsResponse, __MetadataBearer {}

export class ListInstanceTypeDetailsCommand extends $Command<
  ListInstanceTypeDetailsCommandInput,
  ListInstanceTypeDetailsCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInstanceTypeDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstanceTypeDetailsCommandInput, ListInstanceTypeDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "ListInstanceTypeDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstanceTypeDetailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListInstanceTypeDetailsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstanceTypeDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListInstanceTypeDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstanceTypeDetailsCommandOutput> {
    return deserializeAws_restJson1ListInstanceTypeDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
