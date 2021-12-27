import { ChimeSDKMessaging } from "../ChimeSDKMessaging.ts";
import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient.ts";
import {
  ListChannelMembershipsCommand,
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput,
} from "../commands/ListChannelMembershipsCommand.ts";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKMessagingClient,
  input: ListChannelMembershipsCommandInput,
  ...args: any
): Promise<ListChannelMembershipsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelMembershipsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKMessaging,
  input: ListChannelMembershipsCommandInput,
  ...args: any
): Promise<ListChannelMembershipsCommandOutput> => {
  // @ts-ignore
  return await client.listChannelMemberships(input, ...args);
};
export async function* paginateListChannelMemberships(
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelMembershipsCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelMembershipsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelMembershipsCommandOutput;
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
