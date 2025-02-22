import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient.ts";
import { ConnectDirectoryRequest, ConnectDirectoryResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ConnectDirectoryCommand,
  serializeAws_json1_1ConnectDirectoryCommand,
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

export interface ConnectDirectoryCommandInput extends ConnectDirectoryRequest {}
export interface ConnectDirectoryCommandOutput extends ConnectDirectoryResult, __MetadataBearer {}

/**
 * <p>Creates an AD Connector to connect to a self-managed directory.</p>
 *          <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions
 *       have been explicitly granted through a policy. For details about what permissions are required
 *       to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions
 *       Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ConnectDirectoryCommand } from "../../client-directory-service/mod.ts";
 * // const { DirectoryServiceClient, ConnectDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ConnectDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConnectDirectoryCommandInput} for command's `input` shape.
 * @see {@link ConnectDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ConnectDirectoryCommand extends $Command<
  ConnectDirectoryCommandInput,
  ConnectDirectoryCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConnectDirectoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConnectDirectoryCommandInput, ConnectDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "ConnectDirectoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConnectDirectoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConnectDirectoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConnectDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ConnectDirectoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConnectDirectoryCommandOutput> {
    return deserializeAws_json1_1ConnectDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
