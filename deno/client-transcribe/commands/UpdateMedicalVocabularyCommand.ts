import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient.ts";
import { UpdateMedicalVocabularyRequest, UpdateMedicalVocabularyResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateMedicalVocabularyCommand,
  serializeAws_json1_1UpdateMedicalVocabularyCommand,
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

export interface UpdateMedicalVocabularyCommandInput extends UpdateMedicalVocabularyRequest {}
export interface UpdateMedicalVocabularyCommandOutput extends UpdateMedicalVocabularyResponse, __MetadataBearer {}

/**
 * <p>Updates a vocabulary with new values that you provide in a different text file from the one you used to create
 *             the vocabulary. The <code>UpdateMedicalVocabulary</code> operation overwrites all of the existing information
 *             with the values that you provide in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, UpdateMedicalVocabularyCommand } from "../../client-transcribe/mod.ts";
 * // const { TranscribeClient, UpdateMedicalVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new UpdateMedicalVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMedicalVocabularyCommandInput} for command's `input` shape.
 * @see {@link UpdateMedicalVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateMedicalVocabularyCommand extends $Command<
  UpdateMedicalVocabularyCommandInput,
  UpdateMedicalVocabularyCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateMedicalVocabularyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMedicalVocabularyCommandInput, UpdateMedicalVocabularyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "UpdateMedicalVocabularyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMedicalVocabularyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMedicalVocabularyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMedicalVocabularyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateMedicalVocabularyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMedicalVocabularyCommandOutput> {
    return deserializeAws_json1_1UpdateMedicalVocabularyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
