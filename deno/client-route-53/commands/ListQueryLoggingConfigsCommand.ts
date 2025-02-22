import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client.ts";
import { ListQueryLoggingConfigsRequest, ListQueryLoggingConfigsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restXmlListQueryLoggingConfigsCommand,
  serializeAws_restXmlListQueryLoggingConfigsCommand,
} from "../protocols/Aws_restXml.ts";
import { getIdNormalizerPlugin } from "../../middleware-sdk-route53/mod.ts";
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

export interface ListQueryLoggingConfigsCommandInput extends ListQueryLoggingConfigsRequest {}
export interface ListQueryLoggingConfigsCommandOutput extends ListQueryLoggingConfigsResponse, __MetadataBearer {}

/**
 * <p>Lists the configurations for DNS query logging that are associated with the current Amazon Web Services account or the configuration
 * 			that is associated with a specified hosted zone.</p>
 *
 * 		       <p>For more information about DNS query logs, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>.
 * 			Additional information, including the format of DNS query logs, appears in
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListQueryLoggingConfigsCommand } from "../../client-route-53/mod.ts";
 * // const { Route53Client, ListQueryLoggingConfigsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListQueryLoggingConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueryLoggingConfigsCommandInput} for command's `input` shape.
 * @see {@link ListQueryLoggingConfigsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListQueryLoggingConfigsCommand extends $Command<
  ListQueryLoggingConfigsCommandInput,
  ListQueryLoggingConfigsCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListQueryLoggingConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListQueryLoggingConfigsCommandInput, ListQueryLoggingConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListQueryLoggingConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListQueryLoggingConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListQueryLoggingConfigsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListQueryLoggingConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListQueryLoggingConfigsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQueryLoggingConfigsCommandOutput> {
    return deserializeAws_restXmlListQueryLoggingConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
