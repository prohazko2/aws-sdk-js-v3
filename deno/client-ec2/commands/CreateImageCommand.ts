import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { CreateImageRequest, CreateImageResult } from "../models/models_0.ts";
import { deserializeAws_ec2CreateImageCommand, serializeAws_ec2CreateImageCommand } from "../protocols/Aws_ec2.ts";
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

export interface CreateImageCommandInput extends CreateImageRequest {}
export interface CreateImageCommandOutput extends CreateImageResult, __MetadataBearer {}

/**
 * <p>Creates an Amazon EBS-backed AMI from an Amazon EBS-backed instance
 *      	that is either running or stopped.</p>
 *
 *
 *
 *
 *    	     <p>If you customized your instance with instance store volumes or Amazon EBS volumes in addition to the root device volume, the
 *      	new AMI contains block device mapping information for those volumes. When you launch an instance from this new AMI,
 *      	the instance automatically launches with those additional volumes.</p>
 *    	     <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html">Creating Amazon EBS-Backed Linux AMIs</a>
 * 				in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateImageCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, CreateImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageCommandInput} for command's `input` shape.
 * @see {@link CreateImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateImageCommand extends $Command<
  CreateImageCommandInput,
  CreateImageCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateImageCommandInput) {
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
  ): Handler<CreateImageCommandInput, CreateImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateImageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateImageCommandOutput> {
    return deserializeAws_ec2CreateImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
