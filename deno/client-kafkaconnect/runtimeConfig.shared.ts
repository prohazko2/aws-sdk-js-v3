import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { KafkaConnectClientConfig } from "./KafkaConnectClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KafkaConnectClientConfig) => ({
  apiVersion: "2021-09-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "KafkaConnect",
  urlParser: config?.urlParser ?? parseUrl,
});
