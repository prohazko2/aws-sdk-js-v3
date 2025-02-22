import { RAM } from "../RAM.ts";
import { RAMClient } from "../RAMClient.ts";
import {
  ListResourceSharePermissionsCommand,
  ListResourceSharePermissionsCommandInput,
  ListResourceSharePermissionsCommandOutput,
} from "../commands/ListResourceSharePermissionsCommand.ts";
import { RAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RAMClient,
  input: ListResourceSharePermissionsCommandInput,
  ...args: any
): Promise<ListResourceSharePermissionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourceSharePermissionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RAM,
  input: ListResourceSharePermissionsCommandInput,
  ...args: any
): Promise<ListResourceSharePermissionsCommandOutput> => {
  // @ts-ignore
  return await client.listResourceSharePermissions(input, ...args);
};
export async function* paginateListResourceSharePermissions(
  config: RAMPaginationConfiguration,
  input: ListResourceSharePermissionsCommandInput,
  ...additionalArguments: any
): Paginator<ListResourceSharePermissionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourceSharePermissionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RAM | RAMClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
