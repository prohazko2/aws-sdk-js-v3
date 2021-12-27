import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { RollbackStackInput, RollbackStackOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryRollbackStackCommand,
  serializeAws_queryRollbackStackCommand,
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

export interface RollbackStackCommandInput extends RollbackStackInput {}
export interface RollbackStackCommandOutput extends RollbackStackOutput, __MetadataBearer {}

/**
 * <p>When specifying <code>RollbackStack</code>, you preserve the state of previously provisioned resources when an operation fails. You can check the status of the stack through the <a>DescribeStacks</a> API.</p>
 *          <p>Rolls back the specified stack to the last known stable state from <code>CREATE_FAILED</code> or <code>UPDATE_FAILED</code> stack statuses.</p>
 *          <p>This operation will delete a stack if it doesn't contain a last known stable state. A last known stable state includes any status in a <code>*_COMPLETE</code>. This includes the following stack statuses.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CREATE_COMPLETE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UPDATE_COMPLETE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UPDATE_ROLLBACK_COMPLETE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IMPORT_COMPLETE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IMPORT_ROLLBACK_COMPLETE</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RollbackStackCommand } from "../../client-cloudformation/mod.ts";
 * // const { CloudFormationClient, RollbackStackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new RollbackStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RollbackStackCommandInput} for command's `input` shape.
 * @see {@link RollbackStackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RollbackStackCommand extends $Command<
  RollbackStackCommandInput,
  RollbackStackCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RollbackStackCommandInput) {
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
  ): Handler<RollbackStackCommandInput, RollbackStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "RollbackStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RollbackStackInput.filterSensitiveLog,
      outputFilterSensitiveLog: RollbackStackOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RollbackStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRollbackStackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RollbackStackCommandOutput> {
    return deserializeAws_queryRollbackStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
