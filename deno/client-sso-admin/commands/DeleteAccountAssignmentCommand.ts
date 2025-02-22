import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient.ts";
import { DeleteAccountAssignmentRequest, DeleteAccountAssignmentResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteAccountAssignmentCommand,
  serializeAws_json1_1DeleteAccountAssignmentCommand,
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

export interface DeleteAccountAssignmentCommandInput extends DeleteAccountAssignmentRequest {}
export interface DeleteAccountAssignmentCommandOutput extends DeleteAccountAssignmentResponse, __MetadataBearer {}

/**
 * <p>Deletes a principal's access from a specified Amazon Web Services account using a specified permission
 *       set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DeleteAccountAssignmentCommand } from "../../client-sso-admin/mod.ts";
 * // const { SSOAdminClient, DeleteAccountAssignmentCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DeleteAccountAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountAssignmentCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountAssignmentCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteAccountAssignmentCommand extends $Command<
  DeleteAccountAssignmentCommandInput,
  DeleteAccountAssignmentCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAccountAssignmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAccountAssignmentCommandInput, DeleteAccountAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DeleteAccountAssignmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAccountAssignmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAccountAssignmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAccountAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAccountAssignmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAccountAssignmentCommandOutput> {
    return deserializeAws_json1_1DeleteAccountAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
