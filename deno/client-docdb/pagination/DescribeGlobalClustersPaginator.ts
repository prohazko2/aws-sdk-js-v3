import { DocDB } from "../DocDB.ts";
import { DocDBClient } from "../DocDBClient.ts";
import {
  DescribeGlobalClustersCommand,
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
} from "../commands/DescribeGlobalClustersCommand.ts";
import { DocDBPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DocDBClient,
  input: DescribeGlobalClustersCommandInput,
  ...args: any
): Promise<DescribeGlobalClustersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeGlobalClustersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DocDB,
  input: DescribeGlobalClustersCommandInput,
  ...args: any
): Promise<DescribeGlobalClustersCommandOutput> => {
  // @ts-ignore
  return await client.describeGlobalClusters(input, ...args);
};
export async function* paginateDescribeGlobalClusters(
  config: DocDBPaginationConfiguration,
  input: DescribeGlobalClustersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeGlobalClustersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeGlobalClustersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DocDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DocDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DocDB | DocDBClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
