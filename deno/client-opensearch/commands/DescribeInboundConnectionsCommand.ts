import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient.ts";
import { DescribeInboundConnectionsRequest, DescribeInboundConnectionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeInboundConnectionsCommand,
  serializeAws_restJson1DescribeInboundConnectionsCommand,
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

export interface DescribeInboundConnectionsCommandInput extends DescribeInboundConnectionsRequest {}
export interface DescribeInboundConnectionsCommandOutput extends DescribeInboundConnectionsResponse, __MetadataBearer {}

/**
 * <p>Lists all the inbound cross-cluster connections for a remote domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeInboundConnectionsCommand } from "../../client-opensearch/mod.ts";
 * // const { OpenSearchClient, DescribeInboundConnectionsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new DescribeInboundConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInboundConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeInboundConnectionsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeInboundConnectionsCommand extends $Command<
  DescribeInboundConnectionsCommandInput,
  DescribeInboundConnectionsCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInboundConnectionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInboundConnectionsCommandInput, DescribeInboundConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "DescribeInboundConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInboundConnectionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInboundConnectionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInboundConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeInboundConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInboundConnectionsCommandOutput> {
    return deserializeAws_restJson1DescribeInboundConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
