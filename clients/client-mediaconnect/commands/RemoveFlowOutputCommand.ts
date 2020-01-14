import {
  MediaConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MediaConnectClient";
import {
  RemoveFlowOutputRequest,
  RemoveFlowOutputResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1RemoveFlowOutputCommand,
  serializeAws_restJson1_1RemoveFlowOutputCommand
} from "../protocols/Aws_restJson1_1";
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

export type RemoveFlowOutputCommandInput = RemoveFlowOutputRequest;
export type RemoveFlowOutputCommandOutput = RemoveFlowOutputResponse;

export class RemoveFlowOutputCommand extends $Command<
  RemoveFlowOutputCommandInput,
  RemoveFlowOutputCommandOutput,
  MediaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveFlowOutputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveFlowOutputCommandInput, RemoveFlowOutputCommandOutput> {
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
    input: RemoveFlowOutputCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1RemoveFlowOutputCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<RemoveFlowOutputCommandOutput> {
    return deserializeAws_restJson1_1RemoveFlowOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}