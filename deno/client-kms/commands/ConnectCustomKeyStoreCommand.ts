import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient.ts";
import { ConnectCustomKeyStoreRequest, ConnectCustomKeyStoreResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ConnectCustomKeyStoreCommand,
  serializeAws_json1_1ConnectCustomKeyStoreCommand,
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

export interface ConnectCustomKeyStoreCommandInput extends ConnectCustomKeyStoreRequest {}
export interface ConnectCustomKeyStoreCommandOutput extends ConnectCustomKeyStoreResponse, __MetadataBearer {}

/**
 * <p>Connects or reconnects a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> to its associated CloudHSM cluster.</p>
 *          <p>The custom key store must be connected before you can create KMS keys
 *       in the key store or use the KMS keys it contains. You can disconnect and reconnect a custom key
 *       store at any time.</p>
 *          <p>To connect a custom key store, its associated CloudHSM cluster must have at least one active
 *       HSM. To get the number of active HSMs in a cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation. To add HSMs
 *       to the cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html">CreateHsm</a> operation. Also, the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser">
 *                <code>kmsuser</code> crypto
 *         user</a> (CU) must not be logged into the cluster. This prevents KMS from using this
 *       account to log in.</p>
 *          <p>The connection process can take an extended amount of time to complete; up to 20 minutes.
 *       This operation starts the connection process, but it does not wait for it to complete. When it
 *       succeeds, this operation quickly returns an HTTP 200 response and a JSON object with no
 *       properties. However, this response does not indicate that the custom key store is connected.
 *       To get the connection state of the custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
 *          <p>During the connection process, KMS finds the CloudHSM cluster that is associated with the
 *       custom key store, creates the connection infrastructure, connects to the cluster, logs into
 *       the CloudHSM client as the <code>kmsuser</code> CU, and rotates its password.</p>
 *          <p>The <code>ConnectCustomKeyStore</code> operation might fail for various reasons. To find
 *       the reason, use the <a>DescribeCustomKeyStores</a> operation and see the
 *         <code>ConnectionErrorCode</code> in the response. For help interpreting the
 *         <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p>
 *          <p>To fix the failure, use the <a>DisconnectCustomKeyStore</a> operation to
 *       disconnect the custom key store, correct the error, use the <a>UpdateCustomKeyStore</a> operation if necessary, and then use
 *         <code>ConnectCustomKeyStore</code> again.</p>
 *          <p>If you are having trouble connecting or disconnecting a custom key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting a Custom Key
 *         Store</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ConnectCustomKeyStore</a> (IAM policy)</p>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeCustomKeyStores</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisconnectCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateCustomKeyStore</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ConnectCustomKeyStoreCommand } from "../../client-kms/mod.ts";
 * // const { KMSClient, ConnectCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ConnectCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConnectCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link ConnectCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ConnectCustomKeyStoreCommand extends $Command<
  ConnectCustomKeyStoreCommandInput,
  ConnectCustomKeyStoreCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConnectCustomKeyStoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConnectCustomKeyStoreCommandInput, ConnectCustomKeyStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ConnectCustomKeyStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConnectCustomKeyStoreRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConnectCustomKeyStoreResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConnectCustomKeyStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ConnectCustomKeyStoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConnectCustomKeyStoreCommandOutput> {
    return deserializeAws_json1_1ConnectCustomKeyStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
