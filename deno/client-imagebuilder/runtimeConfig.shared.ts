import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { ImagebuilderClientConfig } from "./ImagebuilderClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ImagebuilderClientConfig) => ({
  apiVersion: "2019-12-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "imagebuilder",
  urlParser: config?.urlParser ?? parseUrl,
});
