import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient.ts";
import { DescribeTableStatisticsMessage, DescribeTableStatisticsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeTableStatisticsCommand,
  serializeAws_json1_1DescribeTableStatisticsCommand,
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

export interface DescribeTableStatisticsCommandInput extends DescribeTableStatisticsMessage {}
export interface DescribeTableStatisticsCommandOutput extends DescribeTableStatisticsResponse, __MetadataBearer {}

/**
 * <p>Returns table statistics on the database migration task, including table name, rows
 *          inserted, rows updated, and rows deleted.</p>
 *          <p>Note that the "last updated" column the DMS console only indicates the time that DMS
 *          last updated the table statistics record for a table. It does not indicate the time of the
 *          last update to the table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeTableStatisticsCommand } from "../../client-database-migration-service/mod.ts";
 * // const { DatabaseMigrationServiceClient, DescribeTableStatisticsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeTableStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableStatisticsCommandInput} for command's `input` shape.
 * @see {@link DescribeTableStatisticsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeTableStatisticsCommand extends $Command<
  DescribeTableStatisticsCommandInput,
  DescribeTableStatisticsCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTableStatisticsCommandInput) {
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
  ): Handler<DescribeTableStatisticsCommandInput, DescribeTableStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeTableStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTableStatisticsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTableStatisticsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTableStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTableStatisticsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTableStatisticsCommandOutput> {
    return deserializeAws_json1_1DescribeTableStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
