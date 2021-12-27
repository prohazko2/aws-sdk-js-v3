import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient.ts";
import { ListWorkerConfigurationsRequest, ListWorkerConfigurationsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListWorkerConfigurationsCommand,
  serializeAws_restJson1ListWorkerConfigurationsCommand,
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

export interface ListWorkerConfigurationsCommandInput extends ListWorkerConfigurationsRequest {}
export interface ListWorkerConfigurationsCommandOutput extends ListWorkerConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all of the worker configurations in this account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, ListWorkerConfigurationsCommand } from "../../client-kafkaconnect/mod.ts";
 * // const { KafkaConnectClient, ListWorkerConfigurationsCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const command = new ListWorkerConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkerConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListWorkerConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListWorkerConfigurationsCommand extends $Command<
  ListWorkerConfigurationsCommandInput,
  ListWorkerConfigurationsCommandOutput,
  KafkaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWorkerConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkerConfigurationsCommandInput, ListWorkerConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaConnectClient";
    const commandName = "ListWorkerConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWorkerConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWorkerConfigurationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListWorkerConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWorkerConfigurationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkerConfigurationsCommandOutput> {
    return deserializeAws_restJson1ListWorkerConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
