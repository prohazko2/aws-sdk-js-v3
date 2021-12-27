import { ChimeSDKMessaging } from "../ChimeSDKMessaging.ts";
import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient.ts";
import {
  ListChannelModeratorsCommand,
  ListChannelModeratorsCommandInput,
  ListChannelModeratorsCommandOutput,
} from "../commands/ListChannelModeratorsCommand.ts";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKMessagingClient,
  input: ListChannelModeratorsCommandInput,
  ...args: any
): Promise<ListChannelModeratorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelModeratorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKMessaging,
  input: ListChannelModeratorsCommandInput,
  ...args: any
): Promise<ListChannelModeratorsCommandOutput> => {
  // @ts-ignore
  return await client.listChannelModerators(input, ...args);
};
export async function* paginateListChannelModerators(
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelModeratorsCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelModeratorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelModeratorsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeSDKMessaging) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeSDKMessagingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ChimeSDKMessaging | ChimeSDKMessagingClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
