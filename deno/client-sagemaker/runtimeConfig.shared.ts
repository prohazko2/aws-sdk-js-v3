import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";
import { SageMakerClientConfig } from "./SageMakerClient.ts";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerClientConfig) => ({
  apiVersion: "2017-07-24",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SageMaker",
  urlParser: config?.urlParser ?? parseUrl,
});
