import { Chime } from "../Chime.ts";
import { ChimeClient } from "../ChimeClient.ts";
import {
  ListMediaCapturePipelinesCommand,
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
} from "../commands/ListMediaCapturePipelinesCommand.ts";
import { ChimePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListMediaCapturePipelinesCommandInput,
  ...args: any
): Promise<ListMediaCapturePipelinesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMediaCapturePipelinesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Chime,
  input: ListMediaCapturePipelinesCommandInput,
  ...args: any
): Promise<ListMediaCapturePipelinesCommandOutput> => {
  // @ts-ignore
  return await client.listMediaCapturePipelines(input, ...args);
};
export async function* paginateListMediaCapturePipelines(
  config: ChimePaginationConfiguration,
  input: ListMediaCapturePipelinesCommandInput,
  ...additionalArguments: any
): Paginator<ListMediaCapturePipelinesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMediaCapturePipelinesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
