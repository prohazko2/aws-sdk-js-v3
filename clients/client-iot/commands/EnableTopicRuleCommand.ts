import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { EnableTopicRuleRequest } from "../models/models_1";
import {
  deserializeAws_restJson1EnableTopicRuleCommand,
  serializeAws_restJson1EnableTopicRuleCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface EnableTopicRuleCommandInput extends EnableTopicRuleRequest {}
export interface EnableTopicRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables the rule.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">EnableTopicRule</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, EnableTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, EnableTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new EnableTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableTopicRuleCommandInput} for command's `input` shape.
 * @see {@link EnableTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class EnableTopicRuleCommand extends $Command<
  EnableTopicRuleCommandInput,
  EnableTopicRuleCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableTopicRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableTopicRuleCommandInput, EnableTopicRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "EnableTopicRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableTopicRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableTopicRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableTopicRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableTopicRuleCommandOutput> {
    return deserializeAws_restJson1EnableTopicRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
