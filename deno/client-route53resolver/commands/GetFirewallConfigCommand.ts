import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient.ts";
import { GetFirewallConfigRequest, GetFirewallConfigResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetFirewallConfigCommand,
  serializeAws_json1_1GetFirewallConfigCommand,
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

export interface GetFirewallConfigCommandInput extends GetFirewallConfigRequest {}
export interface GetFirewallConfigCommandOutput extends GetFirewallConfigResponse, __MetadataBearer {}

/**
 * <p>Retrieves the configuration of the firewall behavior provided by DNS Firewall for a
 * 			single VPC from Amazon Virtual Private Cloud (Amazon VPC). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetFirewallConfigCommand } from "../../client-route53resolver/mod.ts";
 * // const { Route53ResolverClient, GetFirewallConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetFirewallConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFirewallConfigCommandInput} for command's `input` shape.
 * @see {@link GetFirewallConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetFirewallConfigCommand extends $Command<
  GetFirewallConfigCommandInput,
  GetFirewallConfigCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFirewallConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFirewallConfigCommandInput, GetFirewallConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetFirewallConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFirewallConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFirewallConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFirewallConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetFirewallConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFirewallConfigCommandOutput> {
    return deserializeAws_json1_1GetFirewallConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
