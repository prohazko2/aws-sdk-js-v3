import { OpenSearch } from "../OpenSearch.ts";
import { OpenSearchClient } from "../OpenSearchClient.ts";
import {
  DescribeInboundConnectionsCommand,
  DescribeInboundConnectionsCommandInput,
  DescribeInboundConnectionsCommandOutput,
} from "../commands/DescribeInboundConnectionsCommand.ts";
import { OpenSearchPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OpenSearchClient,
  input: DescribeInboundConnectionsCommandInput,
  ...args: any
): Promise<DescribeInboundConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInboundConnectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: OpenSearch,
  input: DescribeInboundConnectionsCommandInput,
  ...args: any
): Promise<DescribeInboundConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.describeInboundConnections(input, ...args);
};
export async function* paginateDescribeInboundConnections(
  config: OpenSearchPaginationConfiguration,
  input: DescribeInboundConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInboundConnectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInboundConnectionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpenSearch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OpenSearchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearch | OpenSearchClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
