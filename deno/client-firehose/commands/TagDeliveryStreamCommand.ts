import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient.ts";
import { TagDeliveryStreamInput, TagDeliveryStreamOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1TagDeliveryStreamCommand,
  serializeAws_json1_1TagDeliveryStreamCommand,
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

export interface TagDeliveryStreamCommandInput extends TagDeliveryStreamInput {}
export interface TagDeliveryStreamCommandOutput extends TagDeliveryStreamOutput, __MetadataBearer {}

/**
 * <p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair
 *          that you can define and assign to AWS resources. If you specify a tag that already exists,
 *          the tag value is replaced with the value that you specify in the request. Tags are
 *          metadata. For example, you can add friendly names and descriptions or other types of
 *          information that can help you distinguish the delivery stream. For more information about
 *          tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
 *             Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
 *          <p>Each delivery stream can have up to 50 tags. </p>
 *          <p>This operation has a limit of five transactions per second per account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, TagDeliveryStreamCommand } from "../../client-firehose/mod.ts";
 * // const { FirehoseClient, TagDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const command = new TagDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link TagDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class TagDeliveryStreamCommand extends $Command<
  TagDeliveryStreamCommandInput,
  TagDeliveryStreamCommandOutput,
  FirehoseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TagDeliveryStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagDeliveryStreamCommandInput, TagDeliveryStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "TagDeliveryStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagDeliveryStreamInput.filterSensitiveLog,
      outputFilterSensitiveLog: TagDeliveryStreamOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagDeliveryStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TagDeliveryStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagDeliveryStreamCommandOutput> {
    return deserializeAws_json1_1TagDeliveryStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
