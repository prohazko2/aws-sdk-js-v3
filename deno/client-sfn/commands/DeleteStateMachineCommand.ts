import process from "https://deno.land/std@0.119.0/node/process.ts";
import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient.ts";
import { DeleteStateMachineInput, DeleteStateMachineOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DeleteStateMachineCommand,
  serializeAws_json1_0DeleteStateMachineCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface DeleteStateMachineCommandInput extends DeleteStateMachineInput {}
export interface DeleteStateMachineCommandOutput extends DeleteStateMachineOutput, __MetadataBearer {}

/**
 * <p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's
 *       status to <code>DELETING</code> and begins the deletion process. </p>
 *          <note>
 *             <p>For <code>EXPRESS</code>state machines, the deletion will happen eventually (usually
 *         less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code>
 *         API is called.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DeleteStateMachineCommand } from "../../client-sfn/mod.ts";
 * // const { SFNClient, DeleteStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DeleteStateMachineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStateMachineCommandInput} for command's `input` shape.
 * @see {@link DeleteStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteStateMachineCommand extends $Command<
  DeleteStateMachineCommandInput,
  DeleteStateMachineCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteStateMachineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStateMachineCommandInput, DeleteStateMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "DeleteStateMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStateMachineInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteStateMachineOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteStateMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteStateMachineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStateMachineCommandOutput> {
    return deserializeAws_json1_0DeleteStateMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
