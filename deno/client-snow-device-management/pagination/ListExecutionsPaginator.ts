import { SnowDeviceManagement } from "../SnowDeviceManagement.ts";
import { SnowDeviceManagementClient } from "../SnowDeviceManagementClient.ts";
import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "../commands/ListExecutionsCommand.ts";
import { SnowDeviceManagementPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SnowDeviceManagementClient,
  input: ListExecutionsCommandInput,
  ...args: any
): Promise<ListExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SnowDeviceManagement,
  input: ListExecutionsCommandInput,
  ...args: any
): Promise<ListExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listExecutions(input, ...args);
};
export async function* paginateListExecutions(
  config: SnowDeviceManagementPaginationConfiguration,
  input: ListExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExecutionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SnowDeviceManagement) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SnowDeviceManagementClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SnowDeviceManagement | SnowDeviceManagementClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
