import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { DescribeAccountSettingsRequest, DescribeAccountSettingsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeAccountSettingsCommand,
  serializeAws_restJson1DescribeAccountSettingsCommand,
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

export interface DescribeAccountSettingsCommandInput extends DescribeAccountSettingsRequest {}
export interface DescribeAccountSettingsCommandOutput extends DescribeAccountSettingsResponse, __MetadataBearer {}

/**
 * <p>Describes the settings that were used when your Amazon QuickSight subscription was first
 *             created in this Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAccountSettingsCommand } from "../../client-quicksight/mod.ts";
 * // const { QuickSightClient, DescribeAccountSettingsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeAccountSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAccountSettingsCommand extends $Command<
  DescribeAccountSettingsCommandInput,
  DescribeAccountSettingsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAccountSettingsCommandInput) {
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
  ): Handler<DescribeAccountSettingsCommandInput, DescribeAccountSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeAccountSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAccountSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAccountSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAccountSettingsCommandOutput> {
    return deserializeAws_restJson1DescribeAccountSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
