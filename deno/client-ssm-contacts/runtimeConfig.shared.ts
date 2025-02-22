import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SSMContactsClientConfig } from "./SSMContactsClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSMContactsClientConfig) => ({
  apiVersion: "2021-05-03",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SSM Contacts",
  urlParser: config?.urlParser ?? parseUrl,
});
