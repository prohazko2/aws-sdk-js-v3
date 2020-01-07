import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *          <p>You aren't authorized to perform the action.</p>
 *
 */
export interface AccessDeniedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "AccessDeniedException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return _smithy.isa(o, "AccessDeniedException");
  }
}

export interface AnalyzeDocumentRequest {
  __type?: "AnalyzeDocumentRequest";
  /**
   *
   *          <p>The input document as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI
   *          to call Amazon Textract operations, you can't pass image bytes. The document must be an image
   *          in JPEG or PNG format.</p>
   *          <p>If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode
   *          image bytes that are passed using the <code>Bytes</code> field. </p>
   *
   */
  Document: Document | undefined;

  /**
   *
   *          <p>A list of the types of analysis to perform. Add TABLES to the list to return information
   *          about the tables that are detected in the input document. Add FORMS to return detected form data.
   *          To perform both types of analysis, add TABLES and FORMS to
   *             <code>FeatureTypes</code>. All lines and words detected in the document are included in
   *          the response (including text that isn't related to the value of <code>FeatureTypes</code>). </p>
   *
   */
  FeatureTypes: Array<FeatureType | string> | undefined;

  /**
   *
   *          <p>Sets the configuration for the human in the loop workflow for analyzing documents.</p>
   *
   */
  HumanLoopConfig?: HumanLoopConfig;
}

export namespace AnalyzeDocumentRequest {
  export function isa(o: any): o is AnalyzeDocumentRequest {
    return _smithy.isa(o, "AnalyzeDocumentRequest");
  }
}

export interface AnalyzeDocumentResponse extends $MetadataBearer {
  __type?: "AnalyzeDocumentResponse";
  /**
   *
   *          <p>The version of the model used to analyze the document.</p>
   *
   */
  AnalyzeDocumentModelVersion?: string;

  /**
   *
   *          <p>The items that are detected and analyzed by <code>AnalyzeDocument</code>.</p>
   *
   */
  Blocks?: Array<Block>;

  /**
   *
   *          <p>Metadata about the analyzed document. An example is the number of pages.</p>
   *
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   *
   *          <p>Shows the results of the human in the loop evaluation.</p>
   *
   */
  HumanLoopActivationOutput?: HumanLoopActivationOutput;
}

export namespace AnalyzeDocumentResponse {
  export function isa(o: any): o is AnalyzeDocumentResponse {
    return _smithy.isa(o, "AnalyzeDocumentResponse");
  }
}

/**
 *
 *          <p>Amazon Textract isn't able to read the document.</p>
 *
 */
export interface BadDocumentException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "BadDocumentException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace BadDocumentException {
  export function isa(o: any): o is BadDocumentException {
    return _smithy.isa(o, "BadDocumentException");
  }
}

/**
 *
 *          <p>A <code>Block</code> represents items that are recognized in a document within a group
 *          of pixels close to each other. The information returned in a <code>Block</code> object
 *          depends on the type of operation. In text detection for documents (for example <a>DetectDocumentText</a>), you get information about the detected words and lines
 *          of text. In text analysis (for example <a>AnalyzeDocument</a>), you can also get
 *          information about the fields, tables, and selection elements that are detected in the
 *          document.</p>
 *          <p>An array of <code>Block</code> objects is returned by both synchronous and asynchronous
 *          operations. In synchronous operations, such as <a>DetectDocumentText</a>, the
 *          array of <code>Block</code> objects is the entire set of results. In asynchronous
 *          operations, such as <a>GetDocumentAnalysis</a>, the array is returned over one
 *          or more responses.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html">How Amazon Textract Works</a>.</p>
 *
 */
export interface Block {
  __type?: "Block";
  /**
   *
   *          <p>The type of text item that's recognized. In operations for text detection, the following
   *          types are returned:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>PAGE</i> - Contains a list of the LINE <code>Block</code> objects
   *                that are detected on a document page.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>WORD</i> - A word detected on a document page. A word is one or
   *                more ISO basic Latin script characters that aren't separated by spaces.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>LINE</i> - A string of tab-delimited, contiguous words that are
   *                detected on a document page.</p>
   *             </li>
   *          </ul>
   *          <p>In text analysis operations, the following types are returned:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>PAGE</i> - Contains a list of child <code>Block</code> objects
   *                that are detected on a document page.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>KEY_VALUE_SET</i> - Stores the KEY and VALUE <code>Block</code>
   *                objects for linked text that's detected on a document page. Use the
   *                   <code>EntityType</code> field to determine if a KEY_VALUE_SET object is a KEY
   *                   <code>Block</code> object or a VALUE <code>Block</code> object. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>WORD</i> - A word that's detected on a document page. A word is
   *                one or more ISO basic Latin script characters that aren't separated by spaces.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>LINE</i> - A string of tab-delimited, contiguous words that are
   *                detected on a document page.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>TABLE</i> - A table that's detected on a document page. A table
   *                is grid-based information with two or more rows or columns, with a cell span of one
   *                row and one column each. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>CELL</i> - A cell within a detected table. The cell is the parent
   *                of the block that contains the text in the cell.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>SELECTION_ELEMENT</i> - A selection element such as an option
   *                button (radio button) or a check box that's detected on a document page. Use the
   *                value of <code>SelectionStatus</code> to determine the status of the selection
   *                element.</p>
   *             </li>
   *          </ul>
   *
   */
  BlockType?: BlockType | string;

  /**
   *
   *          <p>The column in which a table cell appears. The first column position is 1.
   *             <code>ColumnIndex</code> isn't returned by <code>DetectDocumentText</code> and
   *             <code>GetDocumentTextDetection</code>.</p>
   *
   */
  ColumnIndex?: number;

  /**
   *
   *          <p>The number of columns that a table cell spans. Currently this value is always 1, even
   *          if the number of columns spanned is greater than 1. <code>ColumnSpan</code> isn't returned by
   *             <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>. </p>
   *
   */
  ColumnSpan?: number;

  /**
   *
   *          <p>The confidence score that Amazon Textract has in the accuracy of the recognized text and
   *          the accuracy of the geometry points around the recognized text.</p>
   *
   */
  Confidence?: number;

  /**
   *
   *          <p>The type of entity. The following can be returned:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>KEY</i> - An identifier for a field on the document.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>VALUE</i> - The field text.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>EntityTypes</code> isn't returned by <code>DetectDocumentText</code> and
   *             <code>GetDocumentTextDetection</code>.</p>
   *
   */
  EntityTypes?: Array<EntityType | string>;

  /**
   *
   *          <p>The location of the recognized text on the image. It includes an axis-aligned, coarse
   *          bounding box that surrounds the text, and a finer-grain polygon for more accurate spatial
   *          information. </p>
   *
   */
  Geometry?: Geometry;

  /**
   *
   *          <p>The identifier for the recognized text. The identifier is only unique for a single
   *          operation. </p>
   *
   */
  Id?: string;

  /**
   *
   *          <p>The page on which a block was detected. <code>Page</code> is returned by asynchronous
   *          operations. Page values greater than 1 are only returned for multipage documents that are
   *          in PDF format. A scanned image (JPEG/PNG), even if it contains multiple document pages, is
   *          considered to be a single-page document. The value of <code>Page</code> is always 1.
   *          Synchronous operations don't return <code>Page</code> because every input document is
   *          considered to be a single-page document.</p>
   *
   */
  Page?: number;

  /**
   *
   *          <p>A list of child blocks of the current block. For example, a LINE object has child blocks
   *          for each WORD block that's part of the line of text. There aren't Relationship objects in
   *          the list for relationships that don't exist, such as when the current block has no child
   *          blocks. The list size can be the following:</p>
   *          <ul>
   *             <li>
   *                <p>0 - The block has no child blocks.</p>
   *             </li>
   *             <li>
   *                <p>1 - The block has child blocks.</p>
   *             </li>
   *          </ul>
   *
   */
  Relationships?: Array<Relationship>;

  /**
   *
   *          <p>The row in which a table cell is located. The first row position is 1.
   *             <code>RowIndex</code> isn't returned by <code>DetectDocumentText</code> and
   *             <code>GetDocumentTextDetection</code>.</p>
   *
   */
  RowIndex?: number;

  /**
   *
   *          <p>The number of rows that a table cell spans. Currently this value is always 1, even
   *          if the number of rows spanned is greater than 1. <code>RowSpan</code> isn't returned by
   *             <code>DetectDocumentText</code> and <code>GetDocumentTextDetection</code>.</p>
   *
   */
  RowSpan?: number;

  /**
   *
   *          <p>The selection status of a selection element, such as an option button or check box. </p>
   *
   */
  SelectionStatus?: SelectionStatus | string;

  /**
   *
   *          <p>The word or line of text that's recognized by Amazon Textract. </p>
   *
   */
  Text?: string;
}

export namespace Block {
  export function isa(o: any): o is Block {
    return _smithy.isa(o, "Block");
  }
}

export enum BlockType {
  CELL = "CELL",
  KEY_VALUE_SET = "KEY_VALUE_SET",
  LINE = "LINE",
  PAGE = "PAGE",
  SELECTION_ELEMENT = "SELECTION_ELEMENT",
  TABLE = "TABLE",
  WORD = "WORD"
}

/**
 *
 *          <p>The bounding box around the detected page, text, key-value pair, table, table cell, or selection element on a
 *          document page. The <code>left</code> (x-coordinate) and <code>top</code> (y-coordinate) are
 *          coordinates that represent the top and left sides of the bounding box. Note that the
 *          upper-left corner of the image is the origin (0,0). </p>
 *          <p>The <code>top</code> and <code>left</code> values returned are ratios of the overall
 *          document page size. For example, if the input image is 700 x 200 pixels, and the top-left
 *          coordinate of the bounding box is 350 x 50 pixels, the API returns a <code>left</code>
 *          value of 0.5 (350/700) and a <code>top</code> value of 0.25 (50/200).</p>
 *          <p>The <code>width</code> and <code>height</code> values represent the dimensions of the
 *          bounding box as a ratio of the overall document page dimension. For example, if the
 *          document page size is 700 x 200 pixels, and the bounding box width is 70 pixels, the width
 *          returned is 0.1. </p>
 *
 */
export interface BoundingBox {
  __type?: "BoundingBox";
  /**
   *
   *          <p>The height of the bounding box as a ratio of the overall document page
   *          height.</p>
   *
   */
  Height?: number;

  /**
   *
   *          <p>The left coordinate of the bounding box as a ratio of overall document page
   *          width.</p>
   *
   */
  Left?: number;

  /**
   *
   *          <p>The top coordinate of the bounding box as a ratio of overall document page
   *          height.</p>
   *
   */
  Top?: number;

  /**
   *
   *          <p>The width of the bounding box as a ratio of the overall document page
   *          width.</p>
   *
   */
  Width?: number;
}

export namespace BoundingBox {
  export function isa(o: any): o is BoundingBox {
    return _smithy.isa(o, "BoundingBox");
  }
}

export enum ContentClassifier {
  FREE_OF_ADULT_CONTENT = "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION = "FreeOfPersonallyIdentifiableInformation"
}

export interface DetectDocumentTextRequest {
  __type?: "DetectDocumentTextRequest";
  /**
   *
   *          <p>The input document as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI
   *          to call Amazon Textract operations, you can't pass image bytes. The document must be an image
   *       in JPEG or PNG format.</p>
   *          <p>If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode
   *          image bytes that are passed using the <code>Bytes</code> field. </p>
   *
   */
  Document: Document | undefined;
}

export namespace DetectDocumentTextRequest {
  export function isa(o: any): o is DetectDocumentTextRequest {
    return _smithy.isa(o, "DetectDocumentTextRequest");
  }
}

export interface DetectDocumentTextResponse extends $MetadataBearer {
  __type?: "DetectDocumentTextResponse";
  /**
   *
   *          <p>An array of <code>Block</code> objects that contain the text that's detected in the
   *          document.</p>
   *
   */
  Blocks?: Array<Block>;

  /**
   *
   *          <p></p>
   *
   */
  DetectDocumentTextModelVersion?: string;

  /**
   *
   *          <p>Metadata about the document. It contains the number of pages that are detected in the
   *          document.</p>
   *
   */
  DocumentMetadata?: DocumentMetadata;
}

export namespace DetectDocumentTextResponse {
  export function isa(o: any): o is DetectDocumentTextResponse {
    return _smithy.isa(o, "DetectDocumentTextResponse");
  }
}

/**
 *
 *
 *          <p>The input document, either as bytes or as an S3 object.</p>
 *          <p>You pass image bytes to an Amazon Textract API operation by using the <code>Bytes</code>
 *          property. For example, you would use the <code>Bytes</code> property to pass a document
 *          loaded from a local file system. Image bytes passed by using the <code>Bytes</code>
 *          property must be base64 encoded. Your code might not need to encode document file bytes if
 *          you're using an AWS SDK to call Amazon Textract API operations. </p>
 *          <p>You pass images stored in an S3 bucket to an Amazon Textract API operation by using the
 *             <code>S3Object</code> property. Documents stored in an S3 bucket don't need to be base64
 *          encoded.</p>
 *          <p>The AWS Region for the S3 bucket that contains the S3 object must match the AWS
 *          Region that you use for Amazon Textract operations.</p>
 *          <p>If you use the AWS CLI to call Amazon Textract operations, passing image bytes using
 *          the Bytes property isn't supported. You must first upload the document to an Amazon S3
 *          bucket, and then call the operation using the S3Object property.</p>
 *
 *          <p>For Amazon Textract to process an S3 object, the user must have permission
 *          to access the S3 object. </p>
 *
 */
export interface Document {
  __type?: "Document";
  /**
   *
   *          <p>A blob of base64-encoded document bytes. The maximum size of a document that's provided
   *          in a blob of bytes is 5 MB. The document bytes must be in PNG or JPEG format.</p>
   *          <p>If you're using an AWS SDK to call Amazon Textract, you might not need to base64-encode
   *          image bytes passed using the <code>Bytes</code> field. </p>
   *
   */
  Bytes?: Uint8Array;

  /**
   *
   *          <p>Identifies an S3 object as the document source. The maximum size of a document that's
   *          stored in an S3 bucket is 5 MB.</p>
   *
   */
  S3Object?: S3Object;
}

export namespace Document {
  export function isa(o: any): o is Document {
    return _smithy.isa(o, "Document");
  }
}

/**
 *
 *          <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous
 *          operations such as <a>StartDocumentTextDetection</a>.</p>
 *          <p>The input document can be an image file in JPEG or PNG format. It can also be a file in
 *          PDF format.</p>
 *
 */
export interface DocumentLocation {
  __type?: "DocumentLocation";
  /**
   *
   *          <p>The Amazon S3 bucket that contains the input document.</p>
   *
   */
  S3Object?: S3Object;
}

export namespace DocumentLocation {
  export function isa(o: any): o is DocumentLocation {
    return _smithy.isa(o, "DocumentLocation");
  }
}

/**
 *
 *          <p>Information about the input document.</p>
 *
 */
export interface DocumentMetadata {
  __type?: "DocumentMetadata";
  /**
   *
   *          <p>The number of pages that are detected in the document.</p>
   *
   */
  Pages?: number;
}

export namespace DocumentMetadata {
  export function isa(o: any): o is DocumentMetadata {
    return _smithy.isa(o, "DocumentMetadata");
  }
}

/**
 *
 *          <p>The document can't be processed because it's too large. The maximum document size for
 *          synchronous operations 5 MB. The maximum document size for asynchronous operations is 500
 *          MB for PDF files.</p>
 *
 */
export interface DocumentTooLargeException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DocumentTooLargeException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace DocumentTooLargeException {
  export function isa(o: any): o is DocumentTooLargeException {
    return _smithy.isa(o, "DocumentTooLargeException");
  }
}

export enum EntityType {
  KEY = "KEY",
  VALUE = "VALUE"
}

export enum FeatureType {
  FORMS = "FORMS",
  TABLES = "TABLES"
}

/**
 *
 *          <p>Information about where the following items are located on a document page: detected
 *          page, text, key-value pairs, tables, table cells, and selection elements.</p>
 *
 */
export interface Geometry {
  __type?: "Geometry";
  /**
   *
   *          <p>An axis-aligned coarse representation of the location of the recognized item on the
   *          document page.</p>
   *
   */
  BoundingBox?: BoundingBox;

  /**
   *
   *          <p>Within the bounding box, a fine-grained polygon around the recognized item.</p>
   *
   */
  Polygon?: Array<Point>;
}

export namespace Geometry {
  export function isa(o: any): o is Geometry {
    return _smithy.isa(o, "Geometry");
  }
}

export interface GetDocumentAnalysisRequest {
  __type?: "GetDocumentAnalysisRequest";
  /**
   *
   *          <p>A unique identifier for the text-detection job. The <code>JobId</code> is returned from
   *          <code>StartDocumentAnalysis</code>. A <code>JobId</code> value is only valid for 7 days.</p>
   *
   */
  JobId: string | undefined;

  /**
   *
   *          <p>The maximum number of results to return per paginated call. The largest value that you
   *          can specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results
   *          is returned. The default value is 1,000.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *          <p>If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination
   *          token in the response. You can use this pagination token to retrieve the next set of blocks.</p>
   *
   */
  NextToken?: string;
}

export namespace GetDocumentAnalysisRequest {
  export function isa(o: any): o is GetDocumentAnalysisRequest {
    return _smithy.isa(o, "GetDocumentAnalysisRequest");
  }
}

export interface GetDocumentAnalysisResponse extends $MetadataBearer {
  __type?: "GetDocumentAnalysisResponse";
  /**
   *
   *          <p></p>
   *
   */
  AnalyzeDocumentModelVersion?: string;

  /**
   *
   *          <p>The results of the text-analysis operation.</p>
   *
   */
  Blocks?: Array<Block>;

  /**
   *
   *          <p>Information about a document that Amazon Textract processed. <code>DocumentMetadata</code> is
   *          returned in every page of paginated responses from an Amazon Textract video operation.</p>
   *
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   *
   *          <p>The current status of the text detection job.</p>
   *
   */
  JobStatus?: JobStatus | string;

  /**
   *
   *          <p>If the response is truncated, Amazon Textract returns this token. You can use this token in
   *          the subsequent request to retrieve the next set of text detection results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>The current status of an asynchronous document-analysis operation.</p>
   *
   */
  StatusMessage?: string;

  /**
   *
   *          <p>A list of warnings that occurred during the document-analysis operation.</p>
   *
   */
  Warnings?: Array<Warning>;
}

export namespace GetDocumentAnalysisResponse {
  export function isa(o: any): o is GetDocumentAnalysisResponse {
    return _smithy.isa(o, "GetDocumentAnalysisResponse");
  }
}

export interface GetDocumentTextDetectionRequest {
  __type?: "GetDocumentTextDetectionRequest";
  /**
   *
   *          <p>A unique identifier for the text detection job. The <code>JobId</code> is returned from
   *          <code>StartDocumentTextDetection</code>. A <code>JobId</code> value is only valid for 7 days.</p>
   *
   */
  JobId: string | undefined;

  /**
   *
   *          <p>The maximum number of results to return per paginated call. The largest value you can
   *          specify is 1,000. If you specify a value greater than 1,000, a maximum of 1,000 results is
   *          returned. The default value is 1,000.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   *          <p>If the previous response was incomplete (because there are more blocks to retrieve), Amazon Textract returns a pagination
   *          token in the response. You can use this pagination token to retrieve the next set of blocks.</p>
   *
   */
  NextToken?: string;
}

export namespace GetDocumentTextDetectionRequest {
  export function isa(o: any): o is GetDocumentTextDetectionRequest {
    return _smithy.isa(o, "GetDocumentTextDetectionRequest");
  }
}

export interface GetDocumentTextDetectionResponse extends $MetadataBearer {
  __type?: "GetDocumentTextDetectionResponse";
  /**
   *
   *          <p>The results of the text-detection operation.</p>
   *
   */
  Blocks?: Array<Block>;

  /**
   *
   *          <p></p>
   *
   */
  DetectDocumentTextModelVersion?: string;

  /**
   *
   *          <p>Information about a document that Amazon Textract processed. <code>DocumentMetadata</code> is
   *          returned in every page of paginated responses from an Amazon Textract video operation.</p>
   *
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   *
   *          <p>The current status of the text detection job.</p>
   *
   */
  JobStatus?: JobStatus | string;

  /**
   *
   *          <p>If the response is truncated, Amazon Textract returns this token. You can use this token in
   *          the subsequent request to retrieve the next set of text-detection results.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *          <p>The current status of an asynchronous text-detection operation for the document. </p>
   *
   */
  StatusMessage?: string;

  /**
   *
   *          <p>A list of warnings that occurred during the text-detection operation for the
   *          document.</p>
   *
   */
  Warnings?: Array<Warning>;
}

export namespace GetDocumentTextDetectionResponse {
  export function isa(o: any): o is GetDocumentTextDetectionResponse {
    return _smithy.isa(o, "GetDocumentTextDetectionResponse");
  }
}

/**
 *
 *          <p>Shows the results of the human in the loop evaluation. If there is no HumanLoopArn, the input
 *          did not trigger human review.</p>
 *
 */
export interface HumanLoopActivationOutput {
  __type?: "HumanLoopActivationOutput";
  /**
   *
   *          <p>Shows the result of condition evaluations, including those conditions which activated a human review.</p>
   *
   */
  HumanLoopActivationConditionsEvaluationResults?: string;

  /**
   *
   *          <p>Shows if and why human review was needed.</p>
   *
   */
  HumanLoopActivationReasons?: Array<string>;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the HumanLoop created.</p>
   *
   */
  HumanLoopArn?: string;
}

export namespace HumanLoopActivationOutput {
  export function isa(o: any): o is HumanLoopActivationOutput {
    return _smithy.isa(o, "HumanLoopActivationOutput");
  }
}

/**
 *
 *          <p>Sets up the human review workflow the document will be sent to if one of the conditions is met. You can also set certain attributes
 *          of the image before review. </p>
 *
 */
export interface HumanLoopConfig {
  __type?: "HumanLoopConfig";
  /**
   *
   *          <p>Sets attributes of the input data.</p>
   *
   */
  DataAttributes?: HumanLoopDataAttributes;

  /**
   *
   *          <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   *
   */
  FlowDefinitionArn: string | undefined;

  /**
   *
   *          <p>The name of the human workflow used for this image. This should be kept unique within a region.</p>
   *
   */
  HumanLoopName: string | undefined;
}

export namespace HumanLoopConfig {
  export function isa(o: any): o is HumanLoopConfig {
    return _smithy.isa(o, "HumanLoopConfig");
  }
}

/**
 *
 *          <p>Allows you to set attributes of the image. Currently, you can declare an image as free of
 *          personally identifiable information and adult content. </p>
 *
 */
export interface HumanLoopDataAttributes {
  __type?: "HumanLoopDataAttributes";
  /**
   *
   *          <p>Sets whether the input image is free of personally identifiable information or adult content.</p>
   *
   */
  ContentClassifiers?: Array<ContentClassifier | string>;
}

export namespace HumanLoopDataAttributes {
  export function isa(o: any): o is HumanLoopDataAttributes {
    return _smithy.isa(o, "HumanLoopDataAttributes");
  }
}

/**
 *
 *          <p>Indicates you have exceeded the maximum number of active human in the loop workflows available</p>
 *
 */
export interface HumanLoopQuotaExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "HumanLoopQuotaExceededException";
  $fault: "client";
  Code?: string;
  Message?: string;
  QuotaCode?: string;
  ResourceType?: string;
  ServiceCode?: string;
}

export namespace HumanLoopQuotaExceededException {
  export function isa(o: any): o is HumanLoopQuotaExceededException {
    return _smithy.isa(o, "HumanLoopQuotaExceededException");
  }
}

/**
 *
 *          <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at
 *          least one of the other input parameters is different from the previous call to the
 *          operation. </p>
 *
 */
export interface IdempotentParameterMismatchException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "IdempotentParameterMismatchException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace IdempotentParameterMismatchException {
  export function isa(o: any): o is IdempotentParameterMismatchException {
    return _smithy.isa(o, "IdempotentParameterMismatchException");
  }
}

/**
 *
 *          <p>Amazon Textract experienced a service issue. Try your call again.</p>
 *
 */
export interface InternalServerError
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InternalServerError";
  $fault: "server";
  Code?: string;
  Message?: string;
}

export namespace InternalServerError {
  export function isa(o: any): o is InternalServerError {
    return _smithy.isa(o, "InternalServerError");
  }
}

/**
 *
 *          <p>An invalid job identifier was passed to <a>GetDocumentAnalysis</a> or to
 *       <a>GetDocumentAnalysis</a>.</p>
 *
 */
export interface InvalidJobIdException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidJobIdException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace InvalidJobIdException {
  export function isa(o: any): o is InvalidJobIdException {
    return _smithy.isa(o, "InvalidJobIdException");
  }
}

/**
 *
 *          <p>An input parameter violated a constraint. For example, in synchronous operations,
 *        an <code>InvalidParameterException</code> exception occurs
 *       when neither of the <code>S3Object</code> or <code>Bytes</code> values are supplied in the <code>Document</code>
 *       request parameter.
 *        Validate your parameter before calling the API operation again.</p>
 *
 */
export interface InvalidParameterException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidParameterException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return _smithy.isa(o, "InvalidParameterException");
  }
}

/**
 *
 *          <p>Amazon Textract is unable to access the S3 object that's specified in the request.</p>
 *
 */
export interface InvalidS3ObjectException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidS3ObjectException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace InvalidS3ObjectException {
  export function isa(o: any): o is InvalidS3ObjectException {
    return _smithy.isa(o, "InvalidS3ObjectException");
  }
}

export enum JobStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PARTIAL_SUCCESS = "PARTIAL_SUCCESS",
  SUCCEEDED = "SUCCEEDED"
}

/**
 *
 *          <p>An Amazon Textract service limit was exceeded. For example, if you start too many
 *          asynchronous jobs concurrently, calls to start operations
 *             (<code>StartDocumentTextDetection</code>, for example) raise a LimitExceededException
 *          exception (HTTP status code: 400) until the number of concurrently running jobs is below
 *          the Amazon Textract service limit. </p>
 *
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LimitExceededException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

/**
 *
 *          <p>The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of
 *          an asynchronous document operation, such as <a>StartDocumentTextDetection</a>. </p>
 *
 */
export interface NotificationChannel {
  __type?: "NotificationChannel";
  /**
   *
   *          <p>The Amazon Resource Name (ARN) of an IAM role that gives Amazon Textract publishing permissions to the Amazon SNS topic. </p>
   *
   */
  RoleArn: string | undefined;

  /**
   *
   *          <p>The Amazon SNS topic that Amazon Textract posts the completion status to.</p>
   *
   */
  SNSTopicArn: string | undefined;
}

export namespace NotificationChannel {
  export function isa(o: any): o is NotificationChannel {
    return _smithy.isa(o, "NotificationChannel");
  }
}

/**
 *
 *
 *          <p>The X and Y coordinates of a point on a document page. The X and Y
 *          values that are returned are ratios of the overall document page size. For example, if the
 *          input document is 700 x 200 and the operation returns X=0.5 and Y=0.25, then the point is
 *          at the (350,50) pixel coordinate on the document page.</p>
 *
 *          <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned
 *          by <a>DetectDocumentText</a>. <code>Polygon</code> represents a fine-grained
 *          polygon around detected text. For more information, see Geometry in the Amazon Textract
 *          Developer Guide. </p>
 *
 */
export interface Point {
  __type?: "Point";
  /**
   *
   *          <p>The value of the X coordinate for a point on a <code>Polygon</code>.</p>
   *
   */
  X?: number;

  /**
   *
   *          <p>The value of the Y coordinate for a point on a <code>Polygon</code>.</p>
   *
   */
  Y?: number;
}

export namespace Point {
  export function isa(o: any): o is Point {
    return _smithy.isa(o, "Point");
  }
}

/**
 *
 *          <p>The number of requests exceeded your throughput limit. If you want to increase this limit,
 *          contact Amazon Textract.</p>
 *
 */
export interface ProvisionedThroughputExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ProvisionedThroughputExceededException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace ProvisionedThroughputExceededException {
  export function isa(o: any): o is ProvisionedThroughputExceededException {
    return _smithy.isa(o, "ProvisionedThroughputExceededException");
  }
}

/**
 *
 *          <p>Information about how blocks are related to each other. A <code>Block</code> object
 *          contains 0 or more <code>Relation</code> objects in a list, <code>Relationships</code>. For
 *          more information, see <a>Block</a>.</p>
 *          <p>The <code>Type</code> element provides the type of the relationship for all blocks in
 *          the <code>IDs</code> array. </p>
 *
 */
export interface Relationship {
  __type?: "Relationship";
  /**
   *
   *          <p>An
   *          array of IDs for related blocks. You can get the type of the relationship from the
   *             <code>Type</code> element.</p>
   *
   */
  Ids?: Array<string>;

  /**
   *
   *          <p>The type of relationship that the blocks in the IDs array have with the current block.
   *          The relationship can be <code>VALUE</code> or <code>CHILD</code>. A relationship of type
   *          VALUE is a list that contains the ID of the VALUE block that's associated with the KEY of a key-value pair.
   *          A relationship of type CHILD is a list of IDs that identify WORD blocks.</p>
   *
   */
  Type?: RelationshipType | string;
}

export namespace Relationship {
  export function isa(o: any): o is Relationship {
    return _smithy.isa(o, "Relationship");
  }
}

export enum RelationshipType {
  CHILD = "CHILD",
  VALUE = "VALUE"
}

/**
 *
 *          <p>The S3 bucket name and file name that identifies the document.</p>
 *          <p>The AWS Region for the S3 bucket that contains the document must match the Region that
 *          you use for Amazon Textract operations.</p>
 *
 *          <p>For Amazon Textract to process a file in an S3 bucket, the user must have
 *          permission to access the S3 bucket and file.
 *
 *       </p>
 *
 */
export interface S3Object {
  __type?: "S3Object";
  /**
   *
   *          <p>The name of the S3 bucket.</p>
   *
   */
  Bucket?: string;

  /**
   *
   *          <p>The file name of the input document. Synchronous operations can use image files that are
   *          in JPEG or PNG format. Asynchronous operations also support PDF format files.</p>
   *
   */
  Name?: string;

  /**
   *
   *          <p>If the bucket has versioning enabled, you can specify the object version. </p>
   *
   */
  Version?: string;
}

export namespace S3Object {
  export function isa(o: any): o is S3Object {
    return _smithy.isa(o, "S3Object");
  }
}

export enum SelectionStatus {
  NOT_SELECTED = "NOT_SELECTED",
  SELECTED = "SELECTED"
}

export interface StartDocumentAnalysisRequest {
  __type?: "StartDocumentAnalysisRequest";
  /**
   *
   *          <p>The idempotent token that you use to identify the start request. If you use the same
   *          token with multiple <code>StartDocumentAnalysis</code> requests, the same
   *             <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same
   *          job from being accidentally started more than once. For more information, see
   *          <a href="https://docs.aws.amazon.com/textract/latest/dg/api-async.html">Calling Amazon Textract Asynchronous Operations</a>.</p>
   *
   */
  ClientRequestToken?: string;

  /**
   *
   *          <p>The location of the document to be processed.</p>
   *
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   *
   *          <p>A list of the types of analysis to perform. Add TABLES to the list to return information
   *          about the tables that are detected in the input document. Add FORMS to return detected
   *          form data. To perform both types of analysis, add TABLES
   *          and FORMS to <code>FeatureTypes</code>. All lines and words detected in the document are
   *          included in the response (including text that isn't related to the value of
   *             <code>FeatureTypes</code>). </p>
   *
   */
  FeatureTypes: Array<FeatureType | string> | undefined;

  /**
   *
   *          <p>An identifier that you specify that's included in the completion notification published
   *          to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of
   *          document that the completion notification corresponds to (such as a tax form or a
   *          receipt).</p>
   *
   */
  JobTag?: string;

  /**
   *
   *          <p>The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the
   *          operation to. </p>
   *
   */
  NotificationChannel?: NotificationChannel;
}

export namespace StartDocumentAnalysisRequest {
  export function isa(o: any): o is StartDocumentAnalysisRequest {
    return _smithy.isa(o, "StartDocumentAnalysisRequest");
  }
}

export interface StartDocumentAnalysisResponse extends $MetadataBearer {
  __type?: "StartDocumentAnalysisResponse";
  /**
   *
   *          <p>The identifier for the document text detection job. Use <code>JobId</code> to identify
   *          the job in a subsequent call to <code>GetDocumentAnalysis</code>. A <code>JobId</code> value
   *          is only valid for 7 days.</p>
   *
   */
  JobId?: string;
}

export namespace StartDocumentAnalysisResponse {
  export function isa(o: any): o is StartDocumentAnalysisResponse {
    return _smithy.isa(o, "StartDocumentAnalysisResponse");
  }
}

export interface StartDocumentTextDetectionRequest {
  __type?: "StartDocumentTextDetectionRequest";
  /**
   *
   *          <p>The idempotent token that's used to identify the start request. If you use the same
   *          token with multiple <code>StartDocumentTextDetection</code> requests, the same
   *             <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same
   *          job from being accidentally started more than once. For more information, see
   *          <a href="https://docs.aws.amazon.com/textract/latest/dg/api-async.html">Calling Amazon Textract Asynchronous Operations</a>.</p>
   *
   */
  ClientRequestToken?: string;

  /**
   *
   *          <p>The location of the document to be processed.</p>
   *
   */
  DocumentLocation: DocumentLocation | undefined;

  /**
   *
   *          <p>An identifier that you specify that's included in the completion notification published
   *          to the Amazon SNS topic. For example, you can use <code>JobTag</code> to identify the type of
   *          document that the completion notification corresponds to (such as a tax form or a
   *          receipt).</p>
   *
   */
  JobTag?: string;

  /**
   *
   *          <p>The Amazon SNS topic ARN that you want Amazon Textract to publish the completion status of the
   *          operation to. </p>
   *
   */
  NotificationChannel?: NotificationChannel;
}

export namespace StartDocumentTextDetectionRequest {
  export function isa(o: any): o is StartDocumentTextDetectionRequest {
    return _smithy.isa(o, "StartDocumentTextDetectionRequest");
  }
}

export interface StartDocumentTextDetectionResponse extends $MetadataBearer {
  __type?: "StartDocumentTextDetectionResponse";
  /**
   *
   *          <p>The identifier of the text detection job for the document. Use <code>JobId</code> to
   *          identify the job in a subsequent call to <code>GetDocumentTextDetection</code>.
   *          A <code>JobId</code> value is only valid for 7 days.</p>
   *
   */
  JobId?: string;
}

export namespace StartDocumentTextDetectionResponse {
  export function isa(o: any): o is StartDocumentTextDetectionResponse {
    return _smithy.isa(o, "StartDocumentTextDetectionResponse");
  }
}

/**
 *
 *          <p>Amazon Textract is temporarily unable to process the request. Try your call again.</p>
 *
 */
export interface ThrottlingException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ThrottlingException";
  $fault: "server";
  Code?: string;
  Message?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return _smithy.isa(o, "ThrottlingException");
  }
}

/**
 *
 *          <p>The format of the input document isn't supported. Documents for synchronous operations can be in
 *          PNG or JPEG format. Documents for asynchronous operations can also be in PDF format.</p>
 *
 */
export interface UnsupportedDocumentException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "UnsupportedDocumentException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace UnsupportedDocumentException {
  export function isa(o: any): o is UnsupportedDocumentException {
    return _smithy.isa(o, "UnsupportedDocumentException");
  }
}

/**
 *
 *          <p>A warning about an issue that occurred during asynchronous text analysis (<a>StartDocumentAnalysis</a>) or asynchronous document text detection (<a>StartDocumentTextDetection</a>). </p>
 *
 */
export interface Warning {
  __type?: "Warning";
  /**
   *
   *          <p>The error code for the warning.</p>
   *
   */
  ErrorCode?: string;

  /**
   *
   *          <p>A list of the pages that the warning applies to.</p>
   *
   */
  Pages?: Array<number>;
}

export namespace Warning {
  export function isa(o: any): o is Warning {
    return _smithy.isa(o, "Warning");
  }
}