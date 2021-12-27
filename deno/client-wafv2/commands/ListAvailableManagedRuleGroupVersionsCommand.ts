import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client.ts";
import {
  ListAvailableManagedRuleGroupVersionsRequest,
  ListAvailableManagedRuleGroupVersionsResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommand,
  serializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommand,
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

export interface ListAvailableManagedRuleGroupVersionsCommandInput
  extends ListAvailableManagedRuleGroupVersionsRequest {}
export interface ListAvailableManagedRuleGroupVersionsCommandOutput
  extends ListAvailableManagedRuleGroupVersionsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of the available versions for the specified managed rule group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListAvailableManagedRuleGroupVersionsCommand } from "../../client-wafv2/mod.ts";
 * // const { WAFV2Client, ListAvailableManagedRuleGroupVersionsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListAvailableManagedRuleGroupVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAvailableManagedRuleGroupVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableManagedRuleGroupVersionsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAvailableManagedRuleGroupVersionsCommand extends $Command<
  ListAvailableManagedRuleGroupVersionsCommandInput,
  ListAvailableManagedRuleGroupVersionsCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAvailableManagedRuleGroupVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAvailableManagedRuleGroupVersionsCommandInput, ListAvailableManagedRuleGroupVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "ListAvailableManagedRuleGroupVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAvailableManagedRuleGroupVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAvailableManagedRuleGroupVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAvailableManagedRuleGroupVersionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAvailableManagedRuleGroupVersionsCommandOutput> {
    return deserializeAws_json1_1ListAvailableManagedRuleGroupVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
