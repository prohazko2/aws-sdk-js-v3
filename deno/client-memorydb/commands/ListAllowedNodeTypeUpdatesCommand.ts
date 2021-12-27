import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient.ts";
import { ListAllowedNodeTypeUpdatesRequest, ListAllowedNodeTypeUpdatesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListAllowedNodeTypeUpdatesCommand,
  serializeAws_json1_1ListAllowedNodeTypeUpdatesCommand,
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

export interface ListAllowedNodeTypeUpdatesCommandInput extends ListAllowedNodeTypeUpdatesRequest {}
export interface ListAllowedNodeTypeUpdatesCommandOutput extends ListAllowedNodeTypeUpdatesResponse, __MetadataBearer {}

/**
 * <p>Lists all available node types that you can scale to from your cluster's current node type.
 *
 *          When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, ListAllowedNodeTypeUpdatesCommand } from "../../client-memorydb/mod.ts";
 * // const { MemoryDBClient, ListAllowedNodeTypeUpdatesCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const command = new ListAllowedNodeTypeUpdatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAllowedNodeTypeUpdatesCommandInput} for command's `input` shape.
 * @see {@link ListAllowedNodeTypeUpdatesCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAllowedNodeTypeUpdatesCommand extends $Command<
  ListAllowedNodeTypeUpdatesCommandInput,
  ListAllowedNodeTypeUpdatesCommandOutput,
  MemoryDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAllowedNodeTypeUpdatesCommandInput) {
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
  ): Handler<ListAllowedNodeTypeUpdatesCommandInput, ListAllowedNodeTypeUpdatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "ListAllowedNodeTypeUpdatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAllowedNodeTypeUpdatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAllowedNodeTypeUpdatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAllowedNodeTypeUpdatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAllowedNodeTypeUpdatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAllowedNodeTypeUpdatesCommandOutput> {
    return deserializeAws_json1_1ListAllowedNodeTypeUpdatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
