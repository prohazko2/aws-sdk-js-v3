import process from "https://deno.land/std@0.119.0/node/process.ts";
import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient.ts";
import { PutReplicationConfigurationRequest, PutReplicationConfigurationResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutReplicationConfigurationCommand,
  serializeAws_json1_1PutReplicationConfigurationCommand,
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

export interface PutReplicationConfigurationCommandInput extends PutReplicationConfigurationRequest {}
export interface PutReplicationConfigurationCommandOutput
  extends PutReplicationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates or updates the replication configuration for a registry. The existing
 *             replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the
 *             PutReplicationConfiguration API is called, a service-linked IAM role is created in
 *             your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using
 *                 service-linked roles for Amazon ECR</a> in the
 *             <i>Amazon Elastic Container Registry User Guide</i>.</p>
 *         <note>
 *             <p>When configuring cross-account replication, the destination account must grant the
 *                 source account permission to replicate. This permission is controlled using a
 *                 registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutReplicationConfigurationCommand } from "../../client-ecr/mod.ts";
 * // const { ECRClient, PutReplicationConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutReplicationConfigurationCommand extends $Command<
  PutReplicationConfigurationCommandInput,
  PutReplicationConfigurationCommandOutput,
  ECRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutReplicationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutReplicationConfigurationCommandInput, PutReplicationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "PutReplicationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutReplicationConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutReplicationConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutReplicationConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutReplicationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutReplicationConfigurationCommandOutput> {
    return deserializeAws_json1_1PutReplicationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
