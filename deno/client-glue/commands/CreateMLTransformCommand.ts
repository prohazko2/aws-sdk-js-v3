import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { CreateMLTransformRequest, CreateMLTransformResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateMLTransformCommand,
  serializeAws_json1_1CreateMLTransformCommand,
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

export interface CreateMLTransformCommandInput extends CreateMLTransformRequest {}
export interface CreateMLTransformCommandOutput extends CreateMLTransformResponse, __MetadataBearer {}

/**
 * <p>Creates an Glue machine learning transform. This operation creates the transform and
 *       all the necessary parameters to train it.</p>
 *
 * 	        <p>Call this operation as the first step in the process of using a machine learning transform
 *       (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an
 *       optional <code>Description</code>, in addition to the parameters that you want to use for your
 *       algorithm.</p>
 *
 *          <p>You must also specify certain parameters for the tasks that Glue runs on your
 *       behalf as part of learning from your data and creating a high-quality machine learning
 *       transform. These parameters include <code>Role</code>, and optionally,
 *         <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more
 *       information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateMLTransformCommand } from "../../client-glue/mod.ts";
 * // const { GlueClient, CreateMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateMLTransformCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMLTransformCommandInput} for command's `input` shape.
 * @see {@link CreateMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateMLTransformCommand extends $Command<
  CreateMLTransformCommandInput,
  CreateMLTransformCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMLTransformCommandInput) {
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
  ): Handler<CreateMLTransformCommandInput, CreateMLTransformCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateMLTransformCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMLTransformRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMLTransformResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMLTransformCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateMLTransformCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMLTransformCommandOutput> {
    return deserializeAws_json1_1CreateMLTransformCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
