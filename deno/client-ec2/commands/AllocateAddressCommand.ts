import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { AllocateAddressRequest, AllocateAddressResult } from "../models/models_0.ts";
import { deserializeAws_ec2AllocateAddressCommand, serializeAws_ec2AllocateAddressCommand } from "../protocols/Aws_ec2.ts";
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

export interface AllocateAddressCommandInput extends AllocateAddressRequest {}
export interface AllocateAddressCommandOutput extends AllocateAddressResult, __MetadataBearer {}

/**
 * <p>Allocates an Elastic IP address to your Amazon Web Services account. After you allocate the Elastic IP address you can associate
 *          it with an instance or network interface. After you release an Elastic IP address, it is released to the IP address
 *          pool and can be allocated to a different Amazon Web Services account.</p>
 *          <p>You can allocate an Elastic IP address from an address pool owned by Amazon Web Services or from an address pool created
 *        from a public IPv4 address range that you have brought to Amazon Web Services for use with your Amazon Web Services resources using bring your own
 *          IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>[EC2-VPC] If you release an Elastic IP address, you might be able to recover it. You cannot recover an
 *        Elastic IP address that you released after it is allocated to another Amazon Web Services account. You cannot recover an Elastic IP
 *          address for EC2-Classic. To attempt to recover an Elastic IP address that you released, specify it in this operation.</p>
 *          <p>An Elastic IP address is for use either in the EC2-Classic platform or in a VPC. By default, you can allocate
 *          5 Elastic IP addresses for EC2-Classic per Region and 5 Elastic IP addresses for EC2-VPC per Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>You can allocate a carrier IP address which is a public IP address from a telecommunication carrier, to a network interface which resides in a subnet in a Wavelength Zone (for example an EC2 instance). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AllocateAddressCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, AllocateAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AllocateAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateAddressCommandInput} for command's `input` shape.
 * @see {@link AllocateAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AllocateAddressCommand extends $Command<
  AllocateAddressCommandInput,
  AllocateAddressCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AllocateAddressCommandInput) {
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
  ): Handler<AllocateAddressCommandInput, AllocateAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AllocateAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AllocateAddressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AllocateAddressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AllocateAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AllocateAddressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AllocateAddressCommandOutput> {
    return deserializeAws_ec2AllocateAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
