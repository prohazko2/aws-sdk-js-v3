import { Buffer } from "https://deno.land/std@0.119.0/node/buffer.ts";
import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient.ts";
import { PutSnapshotBlockRequest, PutSnapshotBlockResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1PutSnapshotBlockCommand,
  serializeAws_restJson1PutSnapshotBlockCommand,
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

type PutSnapshotBlockCommandInputType = Omit<PutSnapshotBlockRequest, "BlockData"> & {
  /**
   * For *`PutSnapshotBlockRequest["BlockData"]`*, see {@link PutSnapshotBlockRequest.BlockData}.
   */
  BlockData: PutSnapshotBlockRequest["BlockData"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `PutSnapshotBlockRequest` interface. There are more parameters than `BlockData` defined in {@link PutSnapshotBlockRequest}
 */
export interface PutSnapshotBlockCommandInput extends PutSnapshotBlockCommandInputType {}
export interface PutSnapshotBlockCommandOutput extends PutSnapshotBlockResponse, __MetadataBearer {}

/**
 * <p>Writes a block of data to a snapshot. If the specified block contains
 *             data, the existing data is overwritten. The target snapshot must be in the
 *                 <code>pending</code> state.</p>
 *     	    <p>Data written to a snapshot must be aligned with 512-KiB sectors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, PutSnapshotBlockCommand } from "../../client-ebs/mod.ts";
 * // const { EBSClient, PutSnapshotBlockCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new PutSnapshotBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSnapshotBlockCommandInput} for command's `input` shape.
 * @see {@link PutSnapshotBlockCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutSnapshotBlockCommand extends $Command<
  PutSnapshotBlockCommandInput,
  PutSnapshotBlockCommandOutput,
  EBSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutSnapshotBlockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EBSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutSnapshotBlockCommandInput, PutSnapshotBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EBSClient";
    const commandName = "PutSnapshotBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSnapshotBlockRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutSnapshotBlockResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSnapshotBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutSnapshotBlockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSnapshotBlockCommandOutput> {
    return deserializeAws_restJson1PutSnapshotBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
