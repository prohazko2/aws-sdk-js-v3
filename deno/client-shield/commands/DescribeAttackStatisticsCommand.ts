import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient.ts";
import { DescribeAttackStatisticsRequest, DescribeAttackStatisticsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeAttackStatisticsCommand,
  serializeAws_json1_1DescribeAttackStatisticsCommand,
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

export interface DescribeAttackStatisticsCommandInput extends DescribeAttackStatisticsRequest {}
export interface DescribeAttackStatisticsCommandOutput extends DescribeAttackStatisticsResponse, __MetadataBearer {}

/**
 * <p>Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p>
 *          <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p>
 *          <p>The time range indicates the period covered by the attack statistics data items.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeAttackStatisticsCommand } from "../../client-shield/mod.ts";
 * // const { ShieldClient, DescribeAttackStatisticsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DescribeAttackStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAttackStatisticsCommandInput} for command's `input` shape.
 * @see {@link DescribeAttackStatisticsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAttackStatisticsCommand extends $Command<
  DescribeAttackStatisticsCommandInput,
  DescribeAttackStatisticsCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAttackStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAttackStatisticsCommandInput, DescribeAttackStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DescribeAttackStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAttackStatisticsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAttackStatisticsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAttackStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAttackStatisticsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAttackStatisticsCommandOutput> {
    return deserializeAws_json1_1DescribeAttackStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
