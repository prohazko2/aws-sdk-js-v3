import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient.ts";
import { AcceptEnvironmentAccountConnectionInput, AcceptEnvironmentAccountConnectionOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0AcceptEnvironmentAccountConnectionCommand,
  serializeAws_json1_0AcceptEnvironmentAccountConnectionCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface AcceptEnvironmentAccountConnectionCommandInput extends AcceptEnvironmentAccountConnectionInput {}
export interface AcceptEnvironmentAccountConnectionCommandOutput
  extends AcceptEnvironmentAccountConnectionOutput,
    __MetadataBearer {}

/**
 * <p>In a management account, an environment account connection request is accepted. When the environment account connection request is
 *             accepted, AWS Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment
 *             account.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-account-connections.html">Environment account
 *                 connections</a> in the <i>AWS Proton Administrator guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, AcceptEnvironmentAccountConnectionCommand } from "../../client-proton/mod.ts";
 * // const { ProtonClient, AcceptEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new AcceptEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link AcceptEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AcceptEnvironmentAccountConnectionCommand extends $Command<
  AcceptEnvironmentAccountConnectionCommandInput,
  AcceptEnvironmentAccountConnectionCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptEnvironmentAccountConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptEnvironmentAccountConnectionCommandInput, AcceptEnvironmentAccountConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "AcceptEnvironmentAccountConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptEnvironmentAccountConnectionInput.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptEnvironmentAccountConnectionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AcceptEnvironmentAccountConnectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0AcceptEnvironmentAccountConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptEnvironmentAccountConnectionCommandOutput> {
    return deserializeAws_json1_0AcceptEnvironmentAccountConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
