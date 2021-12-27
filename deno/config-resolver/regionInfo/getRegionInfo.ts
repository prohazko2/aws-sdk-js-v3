import { RegionInfo } from "../../types/mod.ts";

import { getResolvedHostname, GetResolvedHostnameOptions, RegionHash } from "./getResolvedHostname.ts";
import { getResolvedPartition, PartitionHash } from "./getResolvedPartition.ts";

export type { RegionHash, PartitionHash };

export interface GetRegionInfoOptions extends GetResolvedHostnameOptions {}

export const getRegionInfo = (
  region: string,
  { signingService, regionHash, partitionHash }: GetRegionInfoOptions
): RegionInfo => {
  const partition = getResolvedPartition(region, { partitionHash });
  const resolvedRegion = partitionHash[partition]?.endpoint ?? region;
  return {
    partition,
    signingService,
    hostname: getResolvedHostname(resolvedRegion, { signingService, regionHash, partitionHash }),
    ...(regionHash[resolvedRegion]?.signingRegion && {
      signingRegion: regionHash[resolvedRegion].signingRegion,
    }),
    ...(regionHash[resolvedRegion]?.signingService && {
      signingService: regionHash[resolvedRegion].signingService,
    }),
  };
};
