import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { DeleteMLTransformRequest, DeleteMLTransformResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteMLTransformCommand,
  serializeAws_json1_1DeleteMLTransformCommand,
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

export interface DeleteMLTransformCommandInput extends DeleteMLTransformRequest {}
export interface DeleteMLTransformCommandOutput extends DeleteMLTransformResponse, __MetadataBearer {}

/**
 * <p>Deletes an Glue machine learning transform. Machine learning transforms are a special
 *       type of transform that use machine learning to learn the details of the transformation to be
 *       performed by learning from examples provided by humans. These transformations are then saved
 *       by Glue. If you no longer need a transform, you can delete it by calling
 *         <code>DeleteMLTransforms</code>. However, any Glue jobs that still reference the deleted
 *       transform will no longer succeed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteMLTransformCommand } from "../../client-glue/mod.ts";
 * // const { GlueClient, DeleteMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteMLTransformCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMLTransformCommandInput} for command's `input` shape.
 * @see {@link DeleteMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteMLTransformCommand extends $Command<
  DeleteMLTransformCommandInput,
  DeleteMLTransformCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMLTransformCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMLTransformCommandInput, DeleteMLTransformCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeleteMLTransformCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMLTransformRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMLTransformResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMLTransformCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteMLTransformCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMLTransformCommandOutput> {
    return deserializeAws_json1_1DeleteMLTransformCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
