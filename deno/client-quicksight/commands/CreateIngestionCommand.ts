import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { CreateIngestionRequest, CreateIngestionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateIngestionCommand,
  serializeAws_restJson1CreateIngestionCommand,
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

export interface CreateIngestionCommandInput extends CreateIngestionRequest {}
export interface CreateIngestionCommandOutput extends CreateIngestionResponse, __MetadataBearer {}

/**
 * <p>Creates and starts a new SPICE ingestion on a dataset</p>
 *
 * 		       <p>Any ingestions operating on tagged datasets inherit the same tags automatically for use in
 * 			access control. For an example, see <a href="http://aws.amazon.com/premiumsupport/knowledge-center/iam-ec2-resource-tags/">How do I create an IAM policy to control access to Amazon EC2 resources using
 * 				tags?</a> in the Amazon Web Services Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateIngestionCommand } from "../../client-quicksight/mod.ts";
 * // const { QuickSightClient, CreateIngestionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateIngestionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIngestionCommandInput} for command's `input` shape.
 * @see {@link CreateIngestionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateIngestionCommand extends $Command<
  CreateIngestionCommandInput,
  CreateIngestionCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateIngestionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateIngestionCommandInput, CreateIngestionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CreateIngestionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateIngestionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateIngestionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateIngestionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateIngestionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateIngestionCommandOutput> {
    return deserializeAws_restJson1CreateIngestionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
