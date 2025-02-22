import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { UpdateDevicesRequest } from "../models/models_3.ts";
import {
  deserializeAws_json1_1UpdateDevicesCommand,
  serializeAws_json1_1UpdateDevicesCommand,
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

export interface UpdateDevicesCommandInput extends UpdateDevicesRequest {}
export interface UpdateDevicesCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates one or more devices in a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateDevicesCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, UpdateDevicesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDevicesCommandInput} for command's `input` shape.
 * @see {@link UpdateDevicesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateDevicesCommand extends $Command<
  UpdateDevicesCommandInput,
  UpdateDevicesCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDevicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDevicesCommandInput, UpdateDevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateDevicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDevicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDevicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDevicesCommandOutput> {
    return deserializeAws_json1_1UpdateDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
