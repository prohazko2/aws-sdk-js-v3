import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EventBridgeClient";
import {
  PutPartnerEventsRequest,
  PutPartnerEventsResponse
} from "../models/index";
import {
  deserializeAws_json1_1PutPartnerEventsCommand,
  serializeAws_json1_1PutPartnerEventsCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type PutPartnerEventsCommandInput = PutPartnerEventsRequest;
export type PutPartnerEventsCommandOutput = PutPartnerEventsResponse;

export class PutPartnerEventsCommand extends $Command<
  PutPartnerEventsCommandInput,
  PutPartnerEventsCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutPartnerEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutPartnerEventsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutPartnerEventsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<PutPartnerEventsCommandOutput> {
    return deserializeAws_json1_1PutPartnerEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}