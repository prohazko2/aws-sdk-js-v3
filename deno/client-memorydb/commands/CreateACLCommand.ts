import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient.ts";
import { CreateACLRequest, CreateACLResponse } from "../models/models_0.ts";
import { deserializeAws_json1_1CreateACLCommand, serializeAws_json1_1CreateACLCommand } from "../protocols/Aws_json1_1.ts";
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

export interface CreateACLCommandInput extends CreateACLRequest {}
export interface CreateACLCommandOutput extends CreateACLResponse, __MetadataBearer {}

/**
 * <p>Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/AmazonMemoryDB/latest/devguide/Clusters.ACLs.html">Authenticating users with Access Contol Lists (ACLs)</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, CreateACLCommand } from "../../client-memorydb/mod.ts";
 * // const { MemoryDBClient, CreateACLCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const command = new CreateACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateACLCommandInput} for command's `input` shape.
 * @see {@link CreateACLCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateACLCommand extends $Command<
  CreateACLCommandInput,
  CreateACLCommandOutput,
  MemoryDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateACLCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateACLCommandInput, CreateACLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "CreateACLCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateACLRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateACLResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateACLCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateACLCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateACLCommandOutput> {
    return deserializeAws_json1_1CreateACLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
