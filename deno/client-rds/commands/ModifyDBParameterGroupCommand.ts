import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { DBParameterGroupNameMessage, ModifyDBParameterGroupMessage } from "../models/models_1.ts";
import {
  deserializeAws_queryModifyDBParameterGroupCommand,
  serializeAws_queryModifyDBParameterGroupCommand,
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

export interface ModifyDBParameterGroupCommandInput extends ModifyDBParameterGroupMessage {}
export interface ModifyDBParameterGroupCommandOutput extends DBParameterGroupNameMessage, __MetadataBearer {}

/**
 * <p>
 *         Modifies the parameters of a DB parameter group. To modify more than one parameter,
 *         submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and
 *         <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.
 *         </p>
 *          <important>
 *             <p>After you modify a DB parameter group, you should wait at least 5 minutes
 *             before creating your first DB instance that uses that DB parameter group as the default parameter
 *             group. This allows Amazon RDS to fully complete the modify action before the parameter
 *             group is used as the default for a new DB instance. This is especially important for parameters
 *             that are critical when creating the default database for a DB instance, such as the character set
 *             for the default database defined by the <code>character_set_database</code> parameter. You can use the
 *             <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
 *             <i>DescribeDBParameters</i> command to verify
 *             that your DB parameter group has been created or modified.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBParameterGroupCommand } from "../../client-rds/mod.ts";
 * // const { RDSClient, ModifyDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyDBParameterGroupCommand extends $Command<
  ModifyDBParameterGroupCommandInput,
  ModifyDBParameterGroupCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyDBParameterGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBParameterGroupCommandInput, ModifyDBParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBParameterGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBParameterGroupNameMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDBParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBParameterGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBParameterGroupCommandOutput> {
    return deserializeAws_queryModifyDBParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
