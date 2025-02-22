import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient.ts";
import { GetAssociatedResourceRequest, GetAssociatedResourceResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetAssociatedResourceCommand,
  serializeAws_restJson1GetAssociatedResourceCommand,
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

export interface GetAssociatedResourceCommandInput extends GetAssociatedResourceRequest {}
export interface GetAssociatedResourceCommandOutput extends GetAssociatedResourceResponse, __MetadataBearer {}

/**
 * <p>Gets the resource associated with the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, GetAssociatedResourceCommand } from "../../client-service-catalog-appregistry/mod.ts";
 * // const { ServiceCatalogAppRegistryClient, GetAssociatedResourceCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new GetAssociatedResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssociatedResourceCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetAssociatedResourceCommand extends $Command<
  GetAssociatedResourceCommandInput,
  GetAssociatedResourceCommandOutput,
  ServiceCatalogAppRegistryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAssociatedResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogAppRegistryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAssociatedResourceCommandInput, GetAssociatedResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogAppRegistryClient";
    const commandName = "GetAssociatedResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAssociatedResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAssociatedResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAssociatedResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAssociatedResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAssociatedResourceCommandOutput> {
    return deserializeAws_restJson1GetAssociatedResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
