import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient.ts";
import { DescribeJournalKinesisStreamRequest, DescribeJournalKinesisStreamResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeJournalKinesisStreamCommand,
  serializeAws_restJson1DescribeJournalKinesisStreamCommand,
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

export interface DescribeJournalKinesisStreamCommandInput extends DescribeJournalKinesisStreamRequest {}
export interface DescribeJournalKinesisStreamCommandOutput
  extends DescribeJournalKinesisStreamResponse,
    __MetadataBearer {}

/**
 * <p>Returns detailed information about a given Amazon QLDB journal stream. The output
 *          includes the Amazon Resource Name (ARN), stream name, current status, creation time, and
 *          the parameters of the original stream creation request.</p>
 *          <p>This action does not return any expired journal streams. For more information, see
 *             <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/streams.create.html#streams.create.states.expiration">Expiration for terminal streams</a> in the <i>Amazon QLDB Developer
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, DescribeJournalKinesisStreamCommand } from "../../client-qldb/mod.ts";
 * // const { QLDBClient, DescribeJournalKinesisStreamCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new DescribeJournalKinesisStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJournalKinesisStreamCommandInput} for command's `input` shape.
 * @see {@link DescribeJournalKinesisStreamCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeJournalKinesisStreamCommand extends $Command<
  DescribeJournalKinesisStreamCommandInput,
  DescribeJournalKinesisStreamCommandOutput,
  QLDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeJournalKinesisStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJournalKinesisStreamCommandInput, DescribeJournalKinesisStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "DescribeJournalKinesisStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeJournalKinesisStreamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeJournalKinesisStreamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeJournalKinesisStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeJournalKinesisStreamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeJournalKinesisStreamCommandOutput> {
    return deserializeAws_restJson1DescribeJournalKinesisStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
