import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DescribeSpotPriceHistoryRequest, DescribeSpotPriceHistoryResult } from "../models/models_3.ts";
import {
  deserializeAws_ec2DescribeSpotPriceHistoryCommand,
  serializeAws_ec2DescribeSpotPriceHistoryCommand,
} from "../protocols/Aws_ec2.ts";
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

export interface DescribeSpotPriceHistoryCommandInput extends DescribeSpotPriceHistoryRequest {}
export interface DescribeSpotPriceHistoryCommandOutput extends DescribeSpotPriceHistoryResult, __MetadataBearer {}

/**
 * <p>Describes the Spot price history. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances-history.html">Spot Instance pricing history</a> in the
 *             <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 *         <p>When you specify a start and end time, the operation returns the prices of the
 *             instance types within that time range. It also returns the last price change before the
 *             start time, which is the effective price as of the start time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotPriceHistoryCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, DescribeSpotPriceHistoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotPriceHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotPriceHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotPriceHistoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeSpotPriceHistoryCommand extends $Command<
  DescribeSpotPriceHistoryCommandInput,
  DescribeSpotPriceHistoryCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSpotPriceHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSpotPriceHistoryCommandInput, DescribeSpotPriceHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSpotPriceHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSpotPriceHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSpotPriceHistoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSpotPriceHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeSpotPriceHistoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSpotPriceHistoryCommandOutput> {
    return deserializeAws_ec2DescribeSpotPriceHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
