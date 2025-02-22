import { ProtonClient } from "../ProtonClient.ts";
import { GetEnvironmentCommand, GetEnvironmentCommandInput } from "../commands/GetEnvironmentCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (client: ProtonClient, input: GetEnvironmentCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetEnvironmentCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.environment.deploymentStatus;
      };
      if (returnComparator() === "SUCCEEDED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.environment.deploymentStatus;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an Environment is deployed. Use this after invoking CreateEnvironment or UpdateEnvironment
 *  @deprecated Use waitUntilEnvironmentDeployed instead. waitForEnvironmentDeployed does not throw error in non-success cases.
 */
export const waitForEnvironmentDeployed = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetEnvironmentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 4999 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an Environment is deployed. Use this after invoking CreateEnvironment or UpdateEnvironment
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetEnvironmentCommand for polling.
 */
export const waitUntilEnvironmentDeployed = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetEnvironmentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 4999 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
