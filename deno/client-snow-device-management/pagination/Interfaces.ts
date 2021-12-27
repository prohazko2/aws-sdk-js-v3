import { SnowDeviceManagement } from "../SnowDeviceManagement.ts";
import { SnowDeviceManagementClient } from "../SnowDeviceManagementClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface SnowDeviceManagementPaginationConfiguration extends PaginationConfiguration {
  client: SnowDeviceManagement | SnowDeviceManagementClient;
}
