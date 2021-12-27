import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { DataShare } from "../models/models_0.ts";
import { DisassociateDataShareConsumerMessage } from "../models/models_1.ts";
import {
  deserializeAws_queryDisassociateDataShareConsumerCommand,
  serializeAws_queryDisassociateDataShareConsumerCommand,
} from "../protocols/Aws_query.ts";
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

export interface DisassociateDataShareConsumerCommandInput extends DisassociateDataShareConsumerMessage {}
export interface DisassociateDataShareConsumerCommandOutput extends DataShare, __MetadataBearer {}

/**
 * <p>From a consumer account, remove association for the specified datashare.
 *             </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DisassociateDataShareConsumerCommand } from "../../client-redshift/mod.ts";
 * // const { RedshiftClient, DisassociateDataShareConsumerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DisassociateDataShareConsumerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDataShareConsumerCommandInput} for command's `input` shape.
 * @see {@link DisassociateDataShareConsumerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateDataShareConsumerCommand extends $Command<
  DisassociateDataShareConsumerCommandInput,
  DisassociateDataShareConsumerCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateDataShareConsumerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateDataShareConsumerCommandInput, DisassociateDataShareConsumerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DisassociateDataShareConsumerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateDataShareConsumerMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DataShare.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateDataShareConsumerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDisassociateDataShareConsumerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateDataShareConsumerCommandOutput> {
    return deserializeAws_queryDisassociateDataShareConsumerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
