import {
  CostExplorerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CostExplorerClient";
import {
  GetCostAndUsageWithResourcesRequest,
  GetCostAndUsageWithResourcesResponse
} from "../models/index";
import {
  deserializeAws_json1_1GetCostAndUsageWithResourcesCommand,
  serializeAws_json1_1GetCostAndUsageWithResourcesCommand
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

export type GetCostAndUsageWithResourcesCommandInput = GetCostAndUsageWithResourcesRequest;
export type GetCostAndUsageWithResourcesCommandOutput = GetCostAndUsageWithResourcesResponse;

export class GetCostAndUsageWithResourcesCommand extends $Command<
  GetCostAndUsageWithResourcesCommandInput,
  GetCostAndUsageWithResourcesCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCostAndUsageWithResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetCostAndUsageWithResourcesCommandInput,
    GetCostAndUsageWithResourcesCommandOutput
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
    input: GetCostAndUsageWithResourcesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCostAndUsageWithResourcesCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetCostAndUsageWithResourcesCommandOutput> {
    return deserializeAws_json1_1GetCostAndUsageWithResourcesCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}