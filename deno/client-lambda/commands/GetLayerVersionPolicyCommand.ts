import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient.ts";
import { GetLayerVersionPolicyRequest, GetLayerVersionPolicyResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetLayerVersionPolicyCommand,
  serializeAws_restJson1GetLayerVersionPolicyCommand,
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

export interface GetLayerVersionPolicyCommandInput extends GetLayerVersionPolicyRequest {}
export interface GetLayerVersionPolicyCommandOutput extends GetLayerVersionPolicyResponse, __MetadataBearer {}

/**
 * <p>Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>. For more information, see <a>AddLayerVersionPermission</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetLayerVersionPolicyCommand } from "../../client-lambda/mod.ts";
 * // const { LambdaClient, GetLayerVersionPolicyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetLayerVersionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLayerVersionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetLayerVersionPolicyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetLayerVersionPolicyCommand extends $Command<
  GetLayerVersionPolicyCommandInput,
  GetLayerVersionPolicyCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLayerVersionPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLayerVersionPolicyCommandInput, GetLayerVersionPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "GetLayerVersionPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLayerVersionPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLayerVersionPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLayerVersionPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLayerVersionPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLayerVersionPolicyCommandOutput> {
    return deserializeAws_restJson1GetLayerVersionPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
