import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ElasticInferenceClientConfig } from "./ElasticInferenceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElasticInferenceClientConfig) => ({
  apiVersion: "2017-07-25",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Elastic Inference",
  urlParser: config?.urlParser ?? parseUrl,
});
