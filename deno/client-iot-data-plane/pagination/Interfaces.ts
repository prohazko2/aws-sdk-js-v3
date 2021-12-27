import { IoTDataPlane } from "../IoTDataPlane.ts";
import { IoTDataPlaneClient } from "../IoTDataPlaneClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface IoTDataPlanePaginationConfiguration extends PaginationConfiguration {
  client: IoTDataPlane | IoTDataPlaneClient;
}
