import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { PeerVpcRequest, PeerVpcResult } from "../models/models_1.ts";
import { deserializeAws_json1_1PeerVpcCommand, serializeAws_json1_1PeerVpcCommand } from "../protocols/Aws_json1_1.ts";
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

export interface PeerVpcCommandInput extends PeerVpcRequest {}
export interface PeerVpcCommandOutput extends PeerVpcResult, __MetadataBearer {}

/**
 * <p>Peers the Lightsail VPC with the user's default VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, PeerVpcCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, PeerVpcCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new PeerVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PeerVpcCommandInput} for command's `input` shape.
 * @see {@link PeerVpcCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PeerVpcCommand extends $Command<PeerVpcCommandInput, PeerVpcCommandOutput, LightsailClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PeerVpcCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PeerVpcCommandInput, PeerVpcCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "PeerVpcCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PeerVpcRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PeerVpcResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PeerVpcCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PeerVpcCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PeerVpcCommandOutput> {
    return deserializeAws_json1_1PeerVpcCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
