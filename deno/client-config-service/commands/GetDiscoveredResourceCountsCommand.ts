import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient.ts";
import { GetDiscoveredResourceCountsRequest, GetDiscoveredResourceCountsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetDiscoveredResourceCountsCommand,
  serializeAws_json1_1GetDiscoveredResourceCountsCommand,
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

export interface GetDiscoveredResourceCountsCommandInput extends GetDiscoveredResourceCountsRequest {}
export interface GetDiscoveredResourceCountsCommandOutput
  extends GetDiscoveredResourceCountsResponse,
    __MetadataBearer {}

/**
 * <p>Returns the resource types, the number of each resource type,
 * 			and the total number of resources that Config is recording in
 * 			this region for your Amazon Web Services account. </p>
 * 		       <p class="title">
 *             <b>Example</b>
 *          </p>
 *          <ol>
 *             <li>
 * 				           <p>Config is recording three resource types in the US
 * 					East (Ohio) Region for your account: 25 EC2 instances, 20
 * 					IAM users, and 15 S3 buckets.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You make a call to the
 * 						<code>GetDiscoveredResourceCounts</code> action and
 * 					specify that you want all resource types. </p>
 * 			         </li>
 *             <li>
 * 				           <p>Config returns the following:</p>
 *
 * 				           <ul>
 *                   <li>
 * 						               <p>The resource types (EC2 instances, IAM users,
 * 							and S3 buckets).</p>
 * 					             </li>
 *                   <li>
 * 						               <p>The number of each resource type (25, 20, and
 * 							15).</p>
 * 					             </li>
 *                   <li>
 * 						               <p>The total number of all resources
 * 							(60).</p>
 * 					             </li>
 *                </ul>
 *
 * 			         </li>
 *          </ol>
 *
 * 		       <p>The response is paginated. By default, Config lists 100
 * 				<a>ResourceCount</a> objects on each page. You can
 * 			customize this number with the <code>limit</code> parameter. The
 * 			response includes a <code>nextToken</code> string. To get the next
 * 			page of results, run the request again and specify the string for
 * 			the <code>nextToken</code> parameter.</p>
 *
 * 		       <note>
 * 			         <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might
 * 				not immediately receive resource counts in the following
 * 				situations:</p>
 *
 * 			         <ul>
 *                <li>
 * 					             <p>You are a new Config customer.</p>
 * 				           </li>
 *                <li>
 * 					             <p>You just enabled resource recording.</p>
 * 				           </li>
 *             </ul>
 *
 * 			         <p>It might take a few minutes for Config to record and
 * 				count your resources. Wait a few minutes and then retry the
 * 					<a>GetDiscoveredResourceCounts</a> action.
 * 			</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetDiscoveredResourceCountsCommand } from "../../client-config-service/mod.ts";
 * // const { ConfigServiceClient, GetDiscoveredResourceCountsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetDiscoveredResourceCountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDiscoveredResourceCountsCommandInput} for command's `input` shape.
 * @see {@link GetDiscoveredResourceCountsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDiscoveredResourceCountsCommand extends $Command<
  GetDiscoveredResourceCountsCommandInput,
  GetDiscoveredResourceCountsCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDiscoveredResourceCountsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDiscoveredResourceCountsCommandInput, GetDiscoveredResourceCountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetDiscoveredResourceCountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDiscoveredResourceCountsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDiscoveredResourceCountsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDiscoveredResourceCountsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDiscoveredResourceCountsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDiscoveredResourceCountsCommandOutput> {
    return deserializeAws_json1_1GetDiscoveredResourceCountsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
