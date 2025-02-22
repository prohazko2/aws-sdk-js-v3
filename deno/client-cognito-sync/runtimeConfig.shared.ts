import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { CognitoSyncClientConfig } from "./CognitoSyncClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CognitoSyncClientConfig) => ({
  apiVersion: "2014-06-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Cognito Sync",
  urlParser: config?.urlParser ?? parseUrl,
});
