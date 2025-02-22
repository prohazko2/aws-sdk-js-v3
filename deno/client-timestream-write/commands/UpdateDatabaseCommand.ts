import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient.ts";
import { UpdateDatabaseRequest, UpdateDatabaseResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0UpdateDatabaseCommand,
  serializeAws_json1_0UpdateDatabaseCommand,
} from "../protocols/Aws_json1_0.ts";
import { getEndpointDiscoveryPlugin } from "../../middleware-endpoint-discovery/mod.ts";
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

export interface UpdateDatabaseCommandInput extends UpdateDatabaseRequest {}
export interface UpdateDatabaseCommandOutput extends UpdateDatabaseResponse, __MetadataBearer {}

/**
 * <p>
 *     Modifies the KMS key for an existing database. While updating the database,
 *     you must specify the database name and the identifier of the new KMS key to be used (<code>KmsKeyId</code>).
 *     If there are any concurrent <code>UpdateDatabase</code> requests, first writer wins.
 *    </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, UpdateDatabaseCommand } from "../../client-timestream-write/mod.ts";
 * // const { TimestreamWriteClient, UpdateDatabaseCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new UpdateDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatabaseCommandInput} for command's `input` shape.
 * @see {@link UpdateDatabaseCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateDatabaseCommand extends $Command<
  UpdateDatabaseCommandInput,
  UpdateDatabaseCommandOutput,
  TimestreamWriteClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDatabaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamWriteClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamWriteClient";
    const commandName = "UpdateDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDatabaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDatabaseResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateDatabaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDatabaseCommandOutput> {
    return deserializeAws_json1_0UpdateDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
