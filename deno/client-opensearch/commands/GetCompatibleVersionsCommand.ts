import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient.ts";
import { GetCompatibleVersionsRequest, GetCompatibleVersionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetCompatibleVersionsCommand,
  serializeAws_restJson1GetCompatibleVersionsCommand,
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

export interface GetCompatibleVersionsCommandInput extends GetCompatibleVersionsRequest {}
export interface GetCompatibleVersionsCommandOutput extends GetCompatibleVersionsResponse, __MetadataBearer {}

/**
 * <p>
 *       Returns a list of upgrade-compatible versions of OpenSearch/Elasticsearch.
 *       You can optionally pass a
 *       <code>
 *         <a>DomainName</a>
 *       </code>
 *       to get all upgrade-compatible versions of OpenSearch/Elasticsearch for that specific domain.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, GetCompatibleVersionsCommand } from "../../client-opensearch/mod.ts";
 * // const { OpenSearchClient, GetCompatibleVersionsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new GetCompatibleVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCompatibleVersionsCommandInput} for command's `input` shape.
 * @see {@link GetCompatibleVersionsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetCompatibleVersionsCommand extends $Command<
  GetCompatibleVersionsCommandInput,
  GetCompatibleVersionsCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCompatibleVersionsCommandInput) {
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
  ): Handler<GetCompatibleVersionsCommandInput, GetCompatibleVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "GetCompatibleVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCompatibleVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCompatibleVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCompatibleVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCompatibleVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCompatibleVersionsCommandOutput> {
    return deserializeAws_restJson1GetCompatibleVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
