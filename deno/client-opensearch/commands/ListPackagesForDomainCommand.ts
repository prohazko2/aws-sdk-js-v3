import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient.ts";
import { ListPackagesForDomainRequest, ListPackagesForDomainResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListPackagesForDomainCommand,
  serializeAws_restJson1ListPackagesForDomainCommand,
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

export interface ListPackagesForDomainCommandInput extends ListPackagesForDomainRequest {}
export interface ListPackagesForDomainCommandOutput extends ListPackagesForDomainResponse, __MetadataBearer {}

/**
 * <p>Lists all packages associated with the Amazon OpenSearch Service domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListPackagesForDomainCommand } from "../../client-opensearch/mod.ts";
 * // const { OpenSearchClient, ListPackagesForDomainCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new ListPackagesForDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackagesForDomainCommandInput} for command's `input` shape.
 * @see {@link ListPackagesForDomainCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListPackagesForDomainCommand extends $Command<
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPackagesForDomainCommandInput) {
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
  ): Handler<ListPackagesForDomainCommandInput, ListPackagesForDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "ListPackagesForDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPackagesForDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPackagesForDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPackagesForDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPackagesForDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPackagesForDomainCommandOutput> {
    return deserializeAws_restJson1ListPackagesForDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
