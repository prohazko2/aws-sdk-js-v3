import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { TestAuthorizationRequest, TestAuthorizationResponse } from "../models/models_2.ts";
import {
  deserializeAws_restJson1TestAuthorizationCommand,
  serializeAws_restJson1TestAuthorizationCommand,
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

export interface TestAuthorizationCommandInput extends TestAuthorizationRequest {}
export interface TestAuthorizationCommandOutput extends TestAuthorizationResponse, __MetadataBearer {}

/**
 * <p>Tests if a specified principal is authorized to perform an IoT action on a
 *          specified resource. Use this to test and debug the authorization behavior of devices that
 *          connect to the IoT device gateway.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestAuthorization</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, TestAuthorizationCommand } from "../../client-iot/mod.ts";
 * // const { IoTClient, TestAuthorizationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new TestAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestAuthorizationCommandInput} for command's `input` shape.
 * @see {@link TestAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class TestAuthorizationCommand extends $Command<
  TestAuthorizationCommandInput,
  TestAuthorizationCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TestAuthorizationCommandInput) {
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
  ): Handler<TestAuthorizationCommandInput, TestAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "TestAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestAuthorizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TestAuthorizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TestAuthorizationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestAuthorizationCommandOutput> {
    return deserializeAws_restJson1TestAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
