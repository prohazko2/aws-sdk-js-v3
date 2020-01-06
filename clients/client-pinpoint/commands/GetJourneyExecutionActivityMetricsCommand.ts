import {
  PinpointClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../PinpointClient";
import {
  GetJourneyExecutionActivityMetricsRequest,
  GetJourneyExecutionActivityMetricsResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1GetJourneyExecutionActivityMetricsCommand,
  serializeAws_restJson1_1GetJourneyExecutionActivityMetricsCommand
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

export type GetJourneyExecutionActivityMetricsCommandInput = GetJourneyExecutionActivityMetricsRequest;
export type GetJourneyExecutionActivityMetricsCommandOutput = GetJourneyExecutionActivityMetricsResponse;

export class GetJourneyExecutionActivityMetricsCommand extends $Command<
  GetJourneyExecutionActivityMetricsCommandInput,
  GetJourneyExecutionActivityMetricsCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetJourneyExecutionActivityMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetJourneyExecutionActivityMetricsCommandInput,
    GetJourneyExecutionActivityMetricsCommandOutput
  > {
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
    input: GetJourneyExecutionActivityMetricsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetJourneyExecutionActivityMetricsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetJourneyExecutionActivityMetricsCommandOutput> {
    return deserializeAws_restJson1_1GetJourneyExecutionActivityMetricsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}