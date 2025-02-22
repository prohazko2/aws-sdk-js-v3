import { EC2Client } from "../EC2Client.ts";
import { DescribeInstancesCommand, DescribeInstancesCommandInput } from "../commands/DescribeInstancesCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (client: EC2Client, input: DescribeInstancesCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeInstancesCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Reservations);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Instances;
        });
        let flat_4: any[] = [].concat(...projection_3);
        let projection_6 = flat_4.map((element_5: any) => {
          return element_5.State.Name;
        });
        return projection_6;
      };
      let allStringEq_8 = returnComparator().length > 0;
      for (let element_7 of returnComparator()) {
        allStringEq_8 = allStringEq_8 && element_7 == "running";
      }
      if (allStringEq_8) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Reservations);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Instances;
        });
        let flat_4: any[] = [].concat(...projection_3);
        let projection_6 = flat_4.map((element_5: any) => {
          return element_5.State.Name;
        });
        return projection_6;
      };
      for (let anyStringEq_7 of returnComparator()) {
        if (anyStringEq_7 == "shutting-down") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Reservations);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Instances;
        });
        let flat_4: any[] = [].concat(...projection_3);
        let projection_6 = flat_4.map((element_5: any) => {
          return element_5.State.Name;
        });
        return projection_6;
      };
      for (let anyStringEq_7 of returnComparator()) {
        if (anyStringEq_7 == "terminated") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Reservations);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Instances;
        });
        let flat_4: any[] = [].concat(...projection_3);
        let projection_6 = flat_4.map((element_5: any) => {
          return element_5.State.Name;
        });
        return projection_6;
      };
      for (let anyStringEq_7 of returnComparator()) {
        if (anyStringEq_7 == "stopping") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InvalidInstanceID.NotFound") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilInstanceRunning instead. waitForInstanceRunning does not throw error in non-success cases.
 */
export const waitForInstanceRunning = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeInstancesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstancesCommand for polling.
 */
export const waitUntilInstanceRunning = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeInstancesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
