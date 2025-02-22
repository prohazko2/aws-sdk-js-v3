import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ForecastqueryClientConfig } from "./ForecastqueryClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ForecastqueryClientConfig) => ({
  apiVersion: "2018-06-26",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "forecastquery",
  urlParser: config?.urlParser ?? parseUrl,
});
