import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ChimeSDKMessagingClientConfig } from "./ChimeSDKMessagingClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ChimeSDKMessagingClientConfig) => ({
  apiVersion: "2021-05-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Chime SDK Messaging",
  urlParser: config?.urlParser ?? parseUrl,
});
