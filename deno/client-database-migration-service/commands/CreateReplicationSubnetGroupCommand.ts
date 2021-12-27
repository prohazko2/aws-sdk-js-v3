import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient.ts";
import { CreateReplicationSubnetGroupMessage, CreateReplicationSubnetGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateReplicationSubnetGroupCommand,
  serializeAws_json1_1CreateReplicationSubnetGroupCommand,
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

export interface CreateReplicationSubnetGroupCommandInput extends CreateReplicationSubnetGroupMessage {}
export interface CreateReplicationSubnetGroupCommandOutput
  extends CreateReplicationSubnetGroupResponse,
    __MetadataBearer {}

/**
 * <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p>
 *          <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the
 *           service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateReplicationSubnetGroupCommand } from "../../client-database-migration-service/mod.ts";
 * // const { DatabaseMigrationServiceClient, CreateReplicationSubnetGroupCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new CreateReplicationSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateReplicationSubnetGroupCommand extends $Command<
  CreateReplicationSubnetGroupCommandInput,
  CreateReplicationSubnetGroupCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateReplicationSubnetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReplicationSubnetGroupCommandInput, CreateReplicationSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CreateReplicationSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReplicationSubnetGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateReplicationSubnetGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReplicationSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateReplicationSubnetGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReplicationSubnetGroupCommandOutput> {
    return deserializeAws_json1_1CreateReplicationSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
