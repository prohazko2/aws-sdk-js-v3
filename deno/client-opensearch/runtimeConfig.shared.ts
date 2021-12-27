import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { OpenSearchClientConfig } from "./OpenSearchClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OpenSearchClientConfig) => ({
  apiVersion: "2021-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "OpenSearch",
  urlParser: config?.urlParser ?? parseUrl,
});
