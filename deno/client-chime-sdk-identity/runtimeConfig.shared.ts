import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ChimeSDKIdentityClientConfig } from "./ChimeSDKIdentityClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ChimeSDKIdentityClientConfig = {}) => ({
  apiVersion: "2021-04-20",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Chime SDK Identity",
  urlParser: config.urlParser ?? parseUrl,
});
