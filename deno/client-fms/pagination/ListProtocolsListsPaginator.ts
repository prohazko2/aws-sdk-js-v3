import { FMS } from "../FMS.ts";
import { FMSClient } from "../FMSClient.ts";
import {
  ListProtocolsListsCommand,
  ListProtocolsListsCommandInput,
  ListProtocolsListsCommandOutput,
} from "../commands/ListProtocolsListsCommand.ts";
import { FMSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FMSClient,
  input: ListProtocolsListsCommandInput,
  ...args: any
): Promise<ListProtocolsListsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProtocolsListsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: FMS,
  input: ListProtocolsListsCommandInput,
  ...args: any
): Promise<ListProtocolsListsCommandOutput> => {
  // @ts-ignore
  return await client.listProtocolsLists(input, ...args);
};
export async function* paginateListProtocolsLists(
  config: FMSPaginationConfiguration,
  input: ListProtocolsListsCommandInput,
  ...additionalArguments: any
): Paginator<ListProtocolsListsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProtocolsListsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FMS | FMSClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
