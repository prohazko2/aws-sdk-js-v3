import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "../../types/mod.ts";

/**
 * <p>A timestamp, and a single numerical value, which together represent a measurement at a particular point in time.</p>
 */
export interface DataPoint {
  /**
   * <p>The time, in epoch format, associated with a particular <code>Value</code>.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>The actual value associated with a particular <code>Timestamp</code>.</p>
   */
  Value: number | undefined;
}

export namespace DataPoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataPoint): any => ({
    ...obj,
  });
}

/**
 * <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the
 *         <code>db.sql</code> dimension group consists of the following dimensions:
 *         <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and
 *         <code>db.sql.tokenized_id</code>.</p>
 *          <note>
 *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
 *         only the first 500 bytes are returned.</p>
 *          </note>
 */
export interface DimensionGroup {
  /**
   * <p>The name of the dimension group.  Valid values are:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db</code> - The name of the database to which the client is connected (only Aurora PostgreSQL, RDS
   *         PostgreSQL, Aurora MySQL, RDS MySQL, and MariaDB)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.application</code> - The name of the application that is connected to the database (only Aurora
   *         PostgreSQL and RDS PostgreSQL)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.host</code> - The host name of the connected client (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.session_type</code> - The type of the current session (only Aurora PostgreSQL and RDS PostgreSQL)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql</code> - The SQL that is currently executing (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql_tokenized</code> - The SQL digest (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event</code> - The event for which the database backend is waiting  (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event_type</code> - The type of event for which the database backend is waiting (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.user</code> - The user logged in to the database (all engines)</p>
   *             </li>
   *          </ul>
   */
  Group: string | undefined;

  /**
   * <p>A list of specific dimensions from a dimension group. If this parameter is not present,
   *       then it signifies that all of the dimensions in the group were requested, or are present in
   *       the response.</p>
   *          <p>Valid values for elements in the <code>Dimensions</code> array are:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.application.name</code> - The name of the application that is connected to the database (only
   *       Aurora PostgreSQL and RDS PostgreSQL)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.host.id</code> - The host ID of the connected client (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.host.name</code> - The host name of the connected client (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.name</code> - The name of the database to which the client is connected (only Aurora
   *       PostgreSQL, RDS PostgreSQL, Aurora MySQL, RDS MySQL, and MariaDB)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.session_type.name</code> - The type of the current session (only Aurora PostgreSQL and RDS PostgreSQL)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.id</code> - The SQL ID generated by Performance Insights (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.db_id</code> - The SQL ID generated by the database (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.statement</code> - The SQL text that is being executed (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.tokenized_id</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql_tokenized.id</code> - The SQL digest ID generated by Performance Insights (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql_tokenized.db_id</code> - SQL digest ID generated by the database (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql_tokenized.statement</code> - The SQL digest text (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.user.id</code> - The ID of the user logged in to the database (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.user.name</code> - The name of the user logged in to the database (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event.name</code> - The event for which the backend is waiting (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event.type</code> - The type of event for which the backend is waiting (all engines)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event_type.name</code> - The name of the event type for which the backend is waiting (all
   *       engines)</p>
   *             </li>
   *          </ul>
   */
  Dimensions?: string[];

  /**
   * <p>The maximum number of items to fetch for this dimension group.</p>
   */
  Limit?: number;
}

export namespace DimensionGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DimensionGroup): any => ({
    ...obj,
  });
}

export enum ServiceType {
  RDS = "RDS",
}

export interface DescribeDimensionKeysRequest {
  /**
   * <p>The AWS service for which Performance Insights will return metrics. The only valid value for <i>ServiceType</i> is
   *         <code>RDS</code>.</p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * <p>An immutable, AWS Region-unique identifier for a data source. Performance Insights gathers metrics from
   *       this data source.</p>
   *          <p>To use an Amazon RDS instance as a data source, you specify its <code>DbiResourceId</code> value. For example,
   *       specify <code>db-FAIHNTYBKTGAUSUZQYPDS2GW4A</code>
   *          </p>
   */
  Identifier: string | undefined;

  /**
   * <p>The date and time specifying the beginning of the requested time series data. You must specify a
   *         <code>StartTime</code> within the past 7 days. The value specified is <i>inclusive</i>, which means
   *       that data points equal to or greater than <code>StartTime</code> are returned.</p>
   *          <p>The value for <code>StartTime</code> must be earlier than the value for
   *         <code>EndTime</code>.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The date and time specifying the end of the requested time series data. The value specified is
   *       <i>exclusive</i>, which means that data points less than (but not equal to) <code>EndTime</code> are
   *       returned.</p>
   *          <p>The value for <code>EndTime</code> must be later than the value for
   *       <code>StartTime</code>.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The name of a Performance Insights metric to be measured.</p>
   *          <p>Valid values for <code>Metric</code> are:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.load.avg</code> - a scaled representation of the number of active sessions
   *           for the database engine.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sampledload.avg</code> - the raw number of active sessions for the
   *           database engine.</p>
   *             </li>
   *          </ul>
   *          <p>If the number of active sessions is less than an internal Performance Insights threshold, <code>db.load.avg</code> and <code>db.sampledload.avg</code>
   *           are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with <code>db.load.avg</code>
   *           showing the scaled values, <code>db.sampledload.avg</code> showing the raw values, and <code>db.sampledload.avg</code> less than <code>db.load.avg</code>.
   *           For most use cases, you can query <code>db.load.avg</code> only. </p>
   */
  Metric: string | undefined;

  /**
   * <p>The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as
   *       one second, or as long as one day (86400 seconds).  Valid values are:</p>
   *
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>1</code> (one second)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>60</code> (one minute)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>300</code> (five minutes)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>3600</code> (one hour)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>86400</code> (twenty-four hours)</p>
   *             </li>
   *          </ul>
   *
   *          <p>If you don't specify <code>PeriodInSeconds</code>, then Performance Insights chooses a value for you, with a goal of returning
   *       roughly 100-200 data points in the response.</p>
   */
  PeriodInSeconds?: number;

  /**
   * <p>A specification for how to aggregate the data points from a query result. You must specify a valid dimension group.
   *       Performance Insights returns all dimensions within this group, unless you provide the names of specific dimensions within this group.
   *       You can also request that Performance Insights return a limited number of values for a dimension.</p>
   */
  GroupBy: DimensionGroup | undefined;

  /**
   * <p>For each dimension specified in
   *       <code>GroupBy</code>, specify a secondary dimension to further subdivide the partition keys in the response.</p>
   */
  PartitionBy?: DimensionGroup;

  /**
   * <p>One or more filters to apply in the request.  Restrictions:</p>
   *          <ul>
   *             <li>
   *                <p>Any number of filters by the same dimension, as specified in the <code>GroupBy</code> or
   *           <code>Partition</code> parameters.</p>
   *             </li>
   *             <li>
   *                <p>A single filter for any other dimension in this dimension group.</p>
   *             </li>
   *          </ul>
   */
  Filter?: { [key: string]: string };

  /**
   * <p>The maximum number of items to return in the response.
   *       If more items exist than the specified <code>MaxRecords</code> value, a pagination
   *       token is included in the response so that the remaining
   *       results can be retrieved.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If
   *       this parameter is specified, the response includes only records beyond the token, up to the
   *       value specified by <code>MaxRecords</code>.</p>
   */
  NextToken?: string;
}

export namespace DescribeDimensionKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDimensionKeysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An array of descriptions and aggregated values for
 *       each dimension within a dimension group.</p>
 */
export interface DimensionKeyDescription {
  /**
   * <p>A map of name-value pairs for the dimensions in the group.</p>
   */
  Dimensions?: { [key: string]: string };

  /**
   * <p>The aggregated metric value for the dimension(s), over the requested time range.</p>
   */
  Total?: number;

  /**
   * <p>If <code>PartitionBy</code> was specified, <code>PartitionKeys</code> contains the dimensions that were.</p>
   */
  Partitions?: number[];
}

export namespace DimensionKeyDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DimensionKeyDescription): any => ({
    ...obj,
  });
}

/**
 * <p>If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code>
 *       request, the dimensions are returned in an array. Each element in the array specifies one
 *       dimension. </p>
 */
export interface ResponsePartitionKey {
  /**
   * <p>A dimension map that contains the dimension(s) for this partition.</p>
   */
  Dimensions: { [key: string]: string } | undefined;
}

export namespace ResponsePartitionKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponsePartitionKey): any => ({
    ...obj,
  });
}

export interface DescribeDimensionKeysResponse {
  /**
   * <p>The start time for the returned dimension keys, after alignment to a granular boundary (as
   *       specified by <code>PeriodInSeconds</code>). <code>AlignedStartTime</code> will be less than or
   *       equal to the value of the user-specified <code>StartTime</code>.</p>
   */
  AlignedStartTime?: Date;

  /**
   * <p>The end time for the returned dimension keys, after alignment to a granular boundary (as
   *       specified by <code>PeriodInSeconds</code>). <code>AlignedEndTime</code> will be greater than
   *       or equal to the value of the user-specified <code>Endtime</code>.</p>
   */
  AlignedEndTime?: Date;

  /**
   * <p>If <code>PartitionBy</code> was present in the request, <code>PartitionKeys</code> contains the breakdown of dimension keys by the specified partitions.</p>
   */
  PartitionKeys?: ResponsePartitionKey[];

  /**
   * <p>The dimension keys that were requested.</p>
   */
  Keys?: DimensionKeyDescription[];

  /**
   * <p>An optional pagination token provided by a previous request. If
   *       this parameter is specified, the response includes only records beyond the token, up to the
   *       value specified by <code>MaxRecords</code>.</p>
   */
  NextToken?: string;
}

export namespace DescribeDimensionKeysResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDimensionKeysResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request failed due to an unknown error.</p>
 */
export interface InternalServiceError extends __SmithyException, $MetadataBearer {
  name: "InternalServiceError";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServiceError): any => ({
    ...obj,
  });
}

/**
 * <p>One of the arguments provided is invalid for this request.</p>
 */
export interface InvalidArgumentException extends __SmithyException, $MetadataBearer {
  name: "InvalidArgumentException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArgumentException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidArgumentException): any => ({
    ...obj,
  });
}

/**
 * <p>The user is not authorized to perform this request.</p>
 */
export interface NotAuthorizedException extends __SmithyException, $MetadataBearer {
  name: "NotAuthorizedException";
  $fault: "client";
  Message?: string;
}

export namespace NotAuthorizedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotAuthorizedException): any => ({
    ...obj,
  });
}

export enum DetailStatus {
  AVAILABLE = "AVAILABLE",
  PROCESSING = "PROCESSING",
  UNAVAILABLE = "UNAVAILABLE",
}

/**
 * <p>An object that describes the details for a specified dimension.</p>
 */
export interface DimensionKeyDetail {
  /**
   * <p>The value of the dimension detail data. For the <code>db.sql.statement</code> dimension, this value is either the
   *       full or truncated SQL query, depending on the return status.</p>
   */
  Value?: string;

  /**
   * <p>The full name of the dimension. The full name includes the group name and key name. The only valid value is
   *         <code>db.sql.statement</code>. </p>
   */
  Dimension?: string;

  /**
   * <p>The status of the dimension detail data. Possible values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The dimension detail data is ready to be retrieved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PROCESSING</code> - The dimension detail data isn't ready to be retrieved because more processing time is
   *           required. If the requested detail data for <code>db.sql.statement</code> has the status <code>PROCESSING</code>,
   *           Performance Insights returns the truncated query.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNAVAILABLE</code> - The dimension detail data could not be collected successfully.</p>
   *             </li>
   *          </ul>
   */
  Status?: DetailStatus | string;
}

export namespace DimensionKeyDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DimensionKeyDetail): any => ({
    ...obj,
  });
}

export interface GetDimensionKeyDetailsRequest {
  /**
   * <p>The AWS service for which Performance Insights returns data. The only valid value is <code>RDS</code>.</p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * <p>The ID for a data source from which to gather dimension data. This ID must be immutable and unique within an AWS
   *       Region. When a DB instance is the data source, specify its <code>DbiResourceId</code> value. For example, specify
   *         <code>db-ABCDEFGHIJKLMNOPQRSTU1VW2X</code>. </p>
   */
  Identifier: string | undefined;

  /**
   * <p>The name of the dimension group. The only valid value is <code>db.sql</code>. Performance Insights searches the
   *       specified group for the dimension group ID.</p>
   */
  Group: string | undefined;

  /**
   * <p>The ID of the dimension group from which to retrieve dimension details. For dimension group <code>db.sql</code>,
   *       the group ID is <code>db.sql.id</code>.</p>
   */
  GroupIdentifier: string | undefined;

  /**
   * <p>A list of dimensions to retrieve the detail data for within the given dimension group. For the dimension group
   *                 <code>db.sql</code>, specify either the full dimension name <code>db.sql.statement</code> or the short
   *             dimension name <code>statement</code>. If you don't specify this parameter, Performance Insights returns all
   *             dimension data within the specified dimension group.</p>
   */
  RequestedDimensions?: string[];
}

export namespace GetDimensionKeyDetailsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDimensionKeyDetailsRequest): any => ({
    ...obj,
  });
}

export interface GetDimensionKeyDetailsResponse {
  /**
   * <p>The details for the requested dimensions.</p>
   */
  Dimensions?: DimensionKeyDetail[];
}

export namespace GetDimensionKeyDetailsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDimensionKeyDetailsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A single query to be processed. You must provide the metric to query. If no other
 *       parameters are specified, Performance Insights returns all of the data points for that metric. You can
 *       optionally request that the data points be aggregated by dimension group (
 *       <code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>).</p>
 */
export interface MetricQuery {
  /**
   * <p>The name of a Performance Insights metric to be measured.</p>
   *          <p>Valid values for <code>Metric</code> are:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.load.avg</code> - a scaled representation of the number of active sessions
   *           for the database engine.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sampledload.avg</code> - the raw number of active sessions for the
   *           database engine.</p>
   *             </li>
   *          </ul>
   *          <p>If the number of active sessions is less than an internal Performance Insights threshold, <code>db.load.avg</code> and <code>db.sampledload.avg</code>
   *           are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with <code>db.load.avg</code>
   *           showing the scaled values, <code>db.sampledload.avg</code> showing the raw values, and <code>db.sampledload.avg</code> less than <code>db.load.avg</code>.
   *           For most use cases, you can query <code>db.load.avg</code> only. </p>
   */
  Metric: string | undefined;

  /**
   * <p>A specification for how to aggregate the data points from a query result. You must
   *       specify a valid dimension group.  Performance Insights will return all of the dimensions within that group,
   *       unless you provide the names of specific dimensions within that group. You can also request
   *       that Performance Insights return a limited number of values for a dimension.</p>
   */
  GroupBy?: DimensionGroup;

  /**
   * <p>One or more filters to apply in the request.  Restrictions:</p>
   *          <ul>
   *             <li>
   *                <p>Any number of filters by the same dimension, as specified in the <code>GroupBy</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>A single filter for any other dimension in this dimension group.</p>
   *             </li>
   *          </ul>
   */
  Filter?: { [key: string]: string };
}

export namespace MetricQuery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricQuery): any => ({
    ...obj,
  });
}

export interface GetResourceMetricsRequest {
  /**
   * <p>The AWS service for which Performance Insights returns metrics. The only valid value for <i>ServiceType</i> is
   *         <code>RDS</code>.</p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * <p>An immutable, AWS Region-unique identifier for a data source. Performance Insights gathers metrics from
   *       this data source.</p>
   *          <p>To use a DB instance as a data source, specify its <code>DbiResourceId</code> value. For example, specify
   *         <code>db-FAIHNTYBKTGAUSUZQYPDS2GW4A</code>.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>An array of one or more queries to perform. Each query must specify a Performance Insights metric, and
   *       can optionally specify aggregation and filtering criteria.</p>
   */
  MetricQueries: MetricQuery[] | undefined;

  /**
   * <p>The date and time specifying the beginning of the requested time series data. You can't
   *       specify a <code>StartTime</code> that's earlier than 7 days ago. The value specified is
   *         <i>inclusive</i> - data points equal to or greater than <code>StartTime</code>
   *       will be returned.</p>
   *          <p>The value for <code>StartTime</code> must be earlier than the value for <code>EndTime</code>.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The date and time specifying the end of the requested time series data.  The value specified is
   *       <i>exclusive</i> - data points less than (but not equal to) <code>EndTime</code> will be returned.</p>
   *          <p>The value for <code>EndTime</code> must be later than the value for <code>StartTime</code>.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as
   *       one second, or as long as one day (86400 seconds).  Valid values are:</p>
   *
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>1</code> (one second)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>60</code> (one minute)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>300</code> (five minutes)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>3600</code> (one hour)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>86400</code> (twenty-four hours)</p>
   *             </li>
   *          </ul>
   *
   *          <p>If you don't specify <code>PeriodInSeconds</code>, then Performance Insights will choose a value for
   *       you, with a goal of returning roughly 100-200 data points in the response.</p>
   */
  PeriodInSeconds?: number;

  /**
   * <p>The maximum number of items to return in the response.
   *       If more items exist than the specified <code>MaxRecords</code> value, a pagination
   *       token is included in the response so that the remaining
   *       results can be retrieved.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If
   *       this parameter is specified, the response includes only records beyond the token, up to the
   *       value specified by <code>MaxRecords</code>.</p>
   */
  NextToken?: string;
}

export namespace GetResourceMetricsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceMetricsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object describing a Performance Insights metric and one or more dimensions for that metric.</p>
 */
export interface ResponseResourceMetricKey {
  /**
   * <p>The name of a Performance Insights metric to be measured.</p>
   *          <p>Valid values for <code>Metric</code> are:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.load.avg</code> - a scaled representation of the number of active sessions
   *           for the database engine.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sampledload.avg</code> - the raw number of active sessions for the
   *           database engine.</p>
   *             </li>
   *          </ul>
   *          <p>If the number of active sessions is less than an internal Performance Insights threshold, <code>db.load.avg</code> and <code>db.sampledload.avg</code>
   *           are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with <code>db.load.avg</code>
   *           showing the scaled values, <code>db.sampledload.avg</code> showing the raw values, and <code>db.sampledload.avg</code> less than <code>db.load.avg</code>.
   *           For most use cases, you can query <code>db.load.avg</code> only. </p>
   */
  Metric: string | undefined;

  /**
   * <p>The valid dimensions for the metric.</p>
   */
  Dimensions?: { [key: string]: string };
}

export namespace ResponseResourceMetricKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseResourceMetricKey): any => ({
    ...obj,
  });
}

/**
 * <p>A time-ordered series of data points, corresponding to a dimension of a Performance Insights
 *       metric.</p>
 */
export interface MetricKeyDataPoints {
  /**
   * <p>The dimension(s) to which the data points apply.</p>
   */
  Key?: ResponseResourceMetricKey;

  /**
   * <p>An array of timestamp-value pairs, representing measurements over a period of time.</p>
   */
  DataPoints?: DataPoint[];
}

export namespace MetricKeyDataPoints {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricKeyDataPoints): any => ({
    ...obj,
  });
}

export interface GetResourceMetricsResponse {
  /**
   * <p>The start time for the returned metrics, after alignment to a granular boundary (as
   *       specified by <code>PeriodInSeconds</code>). <code>AlignedStartTime</code> will be less than or
   *       equal to the value of the user-specified <code>StartTime</code>.</p>
   */
  AlignedStartTime?: Date;

  /**
   * <p>The end time for the returned metrics, after alignment to a granular boundary (as
   *       specified by <code>PeriodInSeconds</code>). <code>AlignedEndTime</code> will be greater than
   *       or equal to the value of the user-specified <code>Endtime</code>.</p>
   */
  AlignedEndTime?: Date;

  /**
   * <p>An immutable, AWS Region-unique identifier for a data source. Performance Insights gathers metrics from
   *       this data source.</p>
   *          <p>To use a DB instance as a data source, you specify its
   *       <code>DbiResourceId</code> value - for example:
   *       <code>db-FAIHNTYBKTGAUSUZQYPDS2GW4A</code>
   *          </p>
   */
  Identifier?: string;

  /**
   * <p>An array of metric results,, where each array element contains all of the data points for a particular dimension.</p>
   */
  MetricList?: MetricKeyDataPoints[];

  /**
   * <p>An optional pagination token provided by a previous request. If
   *       this parameter is specified, the response includes only records beyond the token, up to the
   *       value specified by <code>MaxRecords</code>.</p>
   */
  NextToken?: string;
}

export namespace GetResourceMetricsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourceMetricsResponse): any => ({
    ...obj,
  });
}
