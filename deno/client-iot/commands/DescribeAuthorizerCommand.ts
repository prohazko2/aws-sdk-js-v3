import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { DescribeAuthorizerRequest, DescribeAuthorizerResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1DescribeAuthorizerCommand,
  serializeAws_restJson1DescribeAuthorizerCommand,
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

export interface DescribeAuthorizerCommandInput extends DescribeAuthorizerRequest {}
export interface DescribeAuthorizerCommandOutput extends DescribeAuthorizerResponse, __MetadataBearer {}

/**
 * <p>Describes an authorizer.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuthorizer</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuthorizerCommand } from "../../client-iot/mod.ts";
 * // const { IoTClient, DescribeAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAuthorizerCommandInput} for command's `input` shape.
 * @see {@link DescribeAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAuthorizerCommand extends $Command<
  DescribeAuthorizerCommandInput,
  DescribeAuthorizerCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAuthorizerCommandInput) {
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
  ): Handler<DescribeAuthorizerCommandInput, DescribeAuthorizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeAuthorizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAuthorizerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAuthorizerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAuthorizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAuthorizerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAuthorizerCommandOutput> {
    return deserializeAws_restJson1DescribeAuthorizerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
