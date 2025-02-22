import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient.ts";
import { DescribeTapeArchivesInput, DescribeTapeArchivesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeTapeArchivesCommand,
  serializeAws_json1_1DescribeTapeArchivesCommand,
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

export interface DescribeTapeArchivesCommandInput extends DescribeTapeArchivesInput {}
export interface DescribeTapeArchivesCommandOutput extends DescribeTapeArchivesOutput, __MetadataBearer {}

/**
 * <p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This
 *          operation is only supported in the tape gateway type.</p>
 *
 *          <p>If a specific <code>TapeARN</code> is not specified, Storage Gateway returns a
 *          description of all virtual tapes found in the VTS associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeTapeArchivesCommand } from "../../client-storage-gateway/mod.ts";
 * // const { StorageGatewayClient, DescribeTapeArchivesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeTapeArchivesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTapeArchivesCommandInput} for command's `input` shape.
 * @see {@link DescribeTapeArchivesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeTapeArchivesCommand extends $Command<
  DescribeTapeArchivesCommandInput,
  DescribeTapeArchivesCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTapeArchivesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTapeArchivesCommandInput, DescribeTapeArchivesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeTapeArchivesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTapeArchivesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTapeArchivesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTapeArchivesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTapeArchivesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTapeArchivesCommandOutput> {
    return deserializeAws_json1_1DescribeTapeArchivesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
