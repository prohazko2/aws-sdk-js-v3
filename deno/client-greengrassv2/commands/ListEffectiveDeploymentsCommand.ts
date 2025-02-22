import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client.ts";
import { ListEffectiveDeploymentsRequest, ListEffectiveDeploymentsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListEffectiveDeploymentsCommand,
  serializeAws_restJson1ListEffectiveDeploymentsCommand,
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

export interface ListEffectiveDeploymentsCommandInput extends ListEffectiveDeploymentsRequest {}
export interface ListEffectiveDeploymentsCommandOutput extends ListEffectiveDeploymentsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core
 *       devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListEffectiveDeploymentsCommand } from "../../client-greengrassv2/mod.ts";
 * // const { GreengrassV2Client, ListEffectiveDeploymentsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListEffectiveDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEffectiveDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListEffectiveDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListEffectiveDeploymentsCommand extends $Command<
  ListEffectiveDeploymentsCommandInput,
  ListEffectiveDeploymentsCommandOutput,
  GreengrassV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEffectiveDeploymentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEffectiveDeploymentsCommandInput, ListEffectiveDeploymentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "ListEffectiveDeploymentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEffectiveDeploymentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEffectiveDeploymentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEffectiveDeploymentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEffectiveDeploymentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEffectiveDeploymentsCommandOutput> {
    return deserializeAws_restJson1ListEffectiveDeploymentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
