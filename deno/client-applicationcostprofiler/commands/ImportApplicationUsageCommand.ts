import {
  ApplicationCostProfilerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationCostProfilerClient.ts";
import { ImportApplicationUsageRequest, ImportApplicationUsageResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ImportApplicationUsageCommand,
  serializeAws_restJson1ImportApplicationUsageCommand,
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

export interface ImportApplicationUsageCommandInput extends ImportApplicationUsageRequest {}
export interface ImportApplicationUsageCommandOutput extends ImportApplicationUsageResult, __MetadataBearer {}

/**
 * <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p>
 *          <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler
 *       copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing
 *       asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, ImportApplicationUsageCommand } from "../../client-applicationcostprofiler/mod.ts";
 * // const { ApplicationCostProfilerClient, ImportApplicationUsageCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const command = new ImportApplicationUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportApplicationUsageCommandInput} for command's `input` shape.
 * @see {@link ImportApplicationUsageCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ImportApplicationUsageCommand extends $Command<
  ImportApplicationUsageCommandInput,
  ImportApplicationUsageCommandOutput,
  ApplicationCostProfilerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportApplicationUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationCostProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportApplicationUsageCommandInput, ImportApplicationUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationCostProfilerClient";
    const commandName = "ImportApplicationUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportApplicationUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportApplicationUsageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportApplicationUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ImportApplicationUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportApplicationUsageCommandOutput> {
    return deserializeAws_restJson1ImportApplicationUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
