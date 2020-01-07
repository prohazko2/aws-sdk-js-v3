import {
  SMSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SMSClient";
import {
  PutAppLaunchConfigurationRequest,
  PutAppLaunchConfigurationResponse
} from "../models/index";
import {
  deserializeAws_json1_1PutAppLaunchConfigurationCommand,
  serializeAws_json1_1PutAppLaunchConfigurationCommand
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

export type PutAppLaunchConfigurationCommandInput = PutAppLaunchConfigurationRequest;
export type PutAppLaunchConfigurationCommandOutput = PutAppLaunchConfigurationResponse;

export class PutAppLaunchConfigurationCommand extends $Command<
  PutAppLaunchConfigurationCommandInput,
  PutAppLaunchConfigurationCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAppLaunchConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutAppLaunchConfigurationCommandInput,
    PutAppLaunchConfigurationCommandOutput
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
    input: PutAppLaunchConfigurationCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAppLaunchConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<PutAppLaunchConfigurationCommandOutput> {
    return deserializeAws_json1_1PutAppLaunchConfigurationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}