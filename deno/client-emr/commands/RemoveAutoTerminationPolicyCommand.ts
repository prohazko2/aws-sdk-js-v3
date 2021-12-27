import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient.ts";
import { RemoveAutoTerminationPolicyInput, RemoveAutoTerminationPolicyOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RemoveAutoTerminationPolicyCommand,
  serializeAws_json1_1RemoveAutoTerminationPolicyCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface RemoveAutoTerminationPolicyCommandInput extends RemoveAutoTerminationPolicyInput {}
export interface RemoveAutoTerminationPolicyCommandOutput extends RemoveAutoTerminationPolicyOutput, __MetadataBearer {}

/**
 * <p>Removes an auto-termination policy from an Amazon EMR cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, RemoveAutoTerminationPolicyCommand } from "../../client-emr/mod.ts";
 * // const { EMRClient, RemoveAutoTerminationPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new RemoveAutoTerminationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveAutoTerminationPolicyCommandInput} for command's `input` shape.
 * @see {@link RemoveAutoTerminationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveAutoTerminationPolicyCommand extends $Command<
  RemoveAutoTerminationPolicyCommandInput,
  RemoveAutoTerminationPolicyCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveAutoTerminationPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveAutoTerminationPolicyCommandInput, RemoveAutoTerminationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "RemoveAutoTerminationPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveAutoTerminationPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveAutoTerminationPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveAutoTerminationPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveAutoTerminationPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveAutoTerminationPolicyCommandOutput> {
    return deserializeAws_json1_1RemoveAutoTerminationPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
