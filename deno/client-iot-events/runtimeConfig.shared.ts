import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { IoTEventsClientConfig } from "./IoTEventsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTEventsClientConfig) => ({
  apiVersion: "2018-07-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoT Events",
  urlParser: config?.urlParser ?? parseUrl,
});
