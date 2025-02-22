import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { ListStackInstancesInput, ListStackInstancesOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryListStackInstancesCommand,
  serializeAws_queryListStackInstancesCommand,
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

export interface ListStackInstancesCommandInput extends ListStackInstancesInput {}
export interface ListStackInstancesCommandOutput extends ListStackInstancesOutput, __MetadataBearer {}

/**
 * <p>Returns summary information about stack instances that are associated with the
 *          specified stack set. You can filter for stack instances that are associated with a specific
 *          Amazon Web Services account name or Region, or that have a specific status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackInstancesCommand } from "../../client-cloudformation/mod.ts";
 * // const { CloudFormationClient, ListStackInstancesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStackInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStackInstancesCommandInput} for command's `input` shape.
 * @see {@link ListStackInstancesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListStackInstancesCommand extends $Command<
  ListStackInstancesCommandInput,
  ListStackInstancesCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStackInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStackInstancesCommandInput, ListStackInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListStackInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStackInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStackInstancesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStackInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListStackInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStackInstancesCommandOutput> {
    return deserializeAws_queryListStackInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
