import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { CreateNamespaceRequest, CreateNamespaceResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateNamespaceCommand,
  serializeAws_restJson1CreateNamespaceCommand,
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

export interface CreateNamespaceCommandInput extends CreateNamespaceRequest {}
export interface CreateNamespaceCommandOutput extends CreateNamespaceResponse, __MetadataBearer {}

/**
 * <p>(Enterprise edition only) Creates a new namespace for you to use with Amazon QuickSight.</p>
 *         <p>A namespace allows you to isolate the Amazon QuickSight users and groups that are registered
 *             for that namespace. Users that access the namespace can share assets only with other
 *             users or groups in the same namespace. They can't see users and groups in other
 *             namespaces. You can create a namespace after your Amazon Web Services account is subscribed to
 *             Amazon QuickSight. The namespace must be unique within the Amazon Web Services account. By default, there is a
 *             limit of 100 namespaces per Amazon Web Services account. To increase your limit, create a ticket with
 *             Amazon Web Services Support. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateNamespaceCommand } from "../../client-quicksight/mod.ts";
 * // const { QuickSightClient, CreateNamespaceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateNamespaceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateNamespaceCommand extends $Command<
  CreateNamespaceCommandInput,
  CreateNamespaceCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNamespaceCommandInput, CreateNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CreateNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNamespaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateNamespaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateNamespaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNamespaceCommandOutput> {
    return deserializeAws_restJson1CreateNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
