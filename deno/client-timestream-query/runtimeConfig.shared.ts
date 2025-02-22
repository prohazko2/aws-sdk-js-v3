import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { TimestreamQueryClientConfig } from "./TimestreamQueryClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TimestreamQueryClientConfig) => ({
  apiVersion: "2018-11-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Timestream Query",
  urlParser: config?.urlParser ?? parseUrl,
});
