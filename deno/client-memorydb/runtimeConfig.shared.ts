import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { MemoryDBClientConfig } from "./MemoryDBClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MemoryDBClientConfig = {}) => ({
  apiVersion: "2021-01-01",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "MemoryDB",
  urlParser: config.urlParser ?? parseUrl,
});
