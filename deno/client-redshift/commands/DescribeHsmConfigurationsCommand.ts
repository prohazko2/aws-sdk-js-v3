import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { DescribeHsmConfigurationsMessage, HsmConfigurationMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeHsmConfigurationsCommand,
  serializeAws_queryDescribeHsmConfigurationsCommand,
} from "../protocols/Aws_query.ts";
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

export interface DescribeHsmConfigurationsCommandInput extends DescribeHsmConfigurationsMessage {}
export interface DescribeHsmConfigurationsCommandOutput extends HsmConfigurationMessage, __MetadataBearer {}

/**
 * <p>Returns information about the specified Amazon Redshift HSM configuration. If no
 *             configuration ID is specified, returns information about all the HSM configurations
 *             owned by your Amazon Web Services account.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all HSM connections that match any combination of the specified keys and values. For
 *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all HSM connections that
 *             have any combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, HSM connections are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeHsmConfigurationsCommand } from "../../client-redshift/mod.ts";
 * // const { RedshiftClient, DescribeHsmConfigurationsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeHsmConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHsmConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeHsmConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeHsmConfigurationsCommand extends $Command<
  DescribeHsmConfigurationsCommandInput,
  DescribeHsmConfigurationsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeHsmConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHsmConfigurationsCommandInput, DescribeHsmConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeHsmConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeHsmConfigurationsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: HsmConfigurationMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeHsmConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeHsmConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeHsmConfigurationsCommandOutput> {
    return deserializeAws_queryDescribeHsmConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
