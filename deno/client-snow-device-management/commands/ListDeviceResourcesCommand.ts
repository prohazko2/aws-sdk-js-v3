import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient.ts";
import { ListDeviceResourcesInput, ListDeviceResourcesOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListDeviceResourcesCommand,
  serializeAws_restJson1ListDeviceResourcesCommand,
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

export interface ListDeviceResourcesCommandInput extends ListDeviceResourcesInput {}
export interface ListDeviceResourcesCommandOutput extends ListDeviceResourcesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, ListDeviceResourcesCommand } from "../../client-snow-device-management/mod.ts";
 * // const { SnowDeviceManagementClient, ListDeviceResourcesCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * const client = new SnowDeviceManagementClient(config);
 * const command = new ListDeviceResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeviceResourcesCommandInput} for command's `input` shape.
 * @see {@link ListDeviceResourcesCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDeviceResourcesCommand extends $Command<
  ListDeviceResourcesCommandInput,
  ListDeviceResourcesCommandOutput,
  SnowDeviceManagementClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDeviceResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowDeviceManagementClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeviceResourcesCommandInput, ListDeviceResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowDeviceManagementClient";
    const commandName = "ListDeviceResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeviceResourcesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListDeviceResourcesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeviceResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDeviceResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeviceResourcesCommandOutput> {
    return deserializeAws_restJson1ListDeviceResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
