import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient.ts";
import { DescribeExecutionRequest, DescribeExecutionResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeExecutionCommand,
  serializeAws_json1_1DescribeExecutionCommand,
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

export interface DescribeExecutionCommandInput extends DescribeExecutionRequest {}
export interface DescribeExecutionCommandOutput extends DescribeExecutionResponse, __MetadataBearer {}

/**
 * <p>You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeExecutionCommand } from "../../client-transfer/mod.ts";
 * // const { TransferClient, DescribeExecutionCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DescribeExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeExecutionCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeExecutionCommand extends $Command<
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExecutionCommandInput, DescribeExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "DescribeExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeExecutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeExecutionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExecutionCommandOutput> {
    return deserializeAws_json1_1DescribeExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
