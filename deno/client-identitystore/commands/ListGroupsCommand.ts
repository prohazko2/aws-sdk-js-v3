import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient.ts";
import { ListGroupsRequest, ListGroupsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListGroupsCommand,
  serializeAws_json1_1ListGroupsCommand,
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

export interface ListGroupsCommandInput extends ListGroupsRequest {}
export interface ListGroupsCommandOutput extends ListGroupsResponse, __MetadataBearer {}

/**
 * <p>Lists the attribute name and value of the group that you specified in the search. We only support <code>DisplayName</code> as a valid filter
 *          attribute path currently, and filter is required. This API returns minimum attributes, including <code>GroupId</code> and group
 *             <code>DisplayName</code> in the response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, ListGroupsCommand } from "../../client-identitystore/mod.ts";
 * // const { IdentitystoreClient, ListGroupsCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const command = new ListGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupsCommandInput} for command's `input` shape.
 * @see {@link ListGroupsCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListGroupsCommand extends $Command<
  ListGroupsCommandInput,
  ListGroupsCommandOutput,
  IdentitystoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IdentitystoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGroupsCommandInput, ListGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentitystoreClient";
    const commandName = "ListGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGroupsCommandOutput> {
    return deserializeAws_json1_1ListGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
