import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { AssociateDataShareConsumerMessage, DataShare } from "../models/models_0.ts";
import {
  deserializeAws_queryAssociateDataShareConsumerCommand,
  serializeAws_queryAssociateDataShareConsumerCommand,
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

export interface AssociateDataShareConsumerCommandInput extends AssociateDataShareConsumerMessage {}
export interface AssociateDataShareConsumerCommandOutput extends DataShare, __MetadataBearer {}

/**
 * <p>From a datashare consumer account, associates a datashare with the
 *             account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer
 *             can consume the datashare.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AssociateDataShareConsumerCommand } from "../../client-redshift/mod.ts";
 * // const { RedshiftClient, AssociateDataShareConsumerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new AssociateDataShareConsumerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDataShareConsumerCommandInput} for command's `input` shape.
 * @see {@link AssociateDataShareConsumerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateDataShareConsumerCommand extends $Command<
  AssociateDataShareConsumerCommandInput,
  AssociateDataShareConsumerCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateDataShareConsumerCommandInput) {
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
  ): Handler<AssociateDataShareConsumerCommandInput, AssociateDataShareConsumerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "AssociateDataShareConsumerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateDataShareConsumerMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DataShare.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateDataShareConsumerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAssociateDataShareConsumerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateDataShareConsumerCommandOutput> {
    return deserializeAws_queryAssociateDataShareConsumerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
