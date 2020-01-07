import {
  Cloud9ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../Cloud9Client";
import {
  CreateEnvironmentMembershipRequest,
  CreateEnvironmentMembershipResult
} from "../models/index";
import {
  deserializeAws_json1_1CreateEnvironmentMembershipCommand,
  serializeAws_json1_1CreateEnvironmentMembershipCommand
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

export type CreateEnvironmentMembershipCommandInput = CreateEnvironmentMembershipRequest;
export type CreateEnvironmentMembershipCommandOutput = CreateEnvironmentMembershipResult;

export class CreateEnvironmentMembershipCommand extends $Command<
  CreateEnvironmentMembershipCommandInput,
  CreateEnvironmentMembershipCommandOutput,
  Cloud9ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateEnvironmentMembershipCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Cloud9ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateEnvironmentMembershipCommandInput,
    CreateEnvironmentMembershipCommandOutput
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
    input: CreateEnvironmentMembershipCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEnvironmentMembershipCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateEnvironmentMembershipCommandOutput> {
    return deserializeAws_json1_1CreateEnvironmentMembershipCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}