import { Backup } from "../Backup.ts";
import { BackupClient } from "../BackupClient.ts";
import {
  ListReportPlansCommand,
  ListReportPlansCommandInput,
  ListReportPlansCommandOutput,
} from "../commands/ListReportPlansCommand.ts";
import { BackupPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListReportPlansCommandInput,
  ...args: any
): Promise<ListReportPlansCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReportPlansCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Backup,
  input: ListReportPlansCommandInput,
  ...args: any
): Promise<ListReportPlansCommandOutput> => {
  // @ts-ignore
  return await client.listReportPlans(input, ...args);
};
export async function* paginateListReportPlans(
  config: BackupPaginationConfiguration,
  input: ListReportPlansCommandInput,
  ...additionalArguments: any
): Paginator<ListReportPlansCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReportPlansCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Backup) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BackupClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Backup | BackupClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
