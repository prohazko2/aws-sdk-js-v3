import { OpenSearch } from "../OpenSearch.ts";
import { OpenSearchClient } from "../OpenSearchClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface OpenSearchPaginationConfiguration extends PaginationConfiguration {
  client: OpenSearch | OpenSearchClient;
}
