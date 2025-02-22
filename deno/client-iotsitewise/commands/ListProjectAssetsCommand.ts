import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient.ts";
import { ListProjectAssetsRequest, ListProjectAssetsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListProjectAssetsCommand,
  serializeAws_restJson1ListProjectAssetsCommand,
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

export interface ListProjectAssetsCommandInput extends ListProjectAssetsRequest {}
export interface ListProjectAssetsCommandOutput extends ListProjectAssetsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListProjectAssetsCommand } from "../../client-iotsitewise/mod.ts";
 * // const { IoTSiteWiseClient, ListProjectAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListProjectAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProjectAssetsCommandInput} for command's `input` shape.
 * @see {@link ListProjectAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListProjectAssetsCommand extends $Command<
  ListProjectAssetsCommandInput,
  ListProjectAssetsCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProjectAssetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProjectAssetsCommandInput, ListProjectAssetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "ListProjectAssetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProjectAssetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProjectAssetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProjectAssetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProjectAssetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProjectAssetsCommandOutput> {
    return deserializeAws_restJson1ListProjectAssetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
