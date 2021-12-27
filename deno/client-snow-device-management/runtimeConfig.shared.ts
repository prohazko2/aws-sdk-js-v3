import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SnowDeviceManagementClientConfig } from "./SnowDeviceManagementClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SnowDeviceManagementClientConfig) => ({
  apiVersion: "2021-08-04",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Snow Device Management",
  urlParser: config?.urlParser ?? parseUrl,
});
