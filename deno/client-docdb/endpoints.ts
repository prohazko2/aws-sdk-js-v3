import { PartitionHash, RegionHash, getRegionInfo } from "../config-resolver/mod.ts";
import { RegionInfoProvider } from "../types/mod.ts";

const regionHash: RegionHash = {
  "rds-fips.ca-central-1": {
    hostname: "rds-fips.ca-central-1.amazonaws.com",
    signingRegion: "ca-central-1",
  },
  "rds-fips.us-east-1": {
    hostname: "rds-fips.us-east-1.amazonaws.com",
    signingRegion: "us-east-1",
  },
  "rds-fips.us-east-2": {
    hostname: "rds-fips.us-east-2.amazonaws.com",
    signingRegion: "us-east-2",
  },
  "rds-fips.us-west-1": {
    hostname: "rds-fips.us-west-1.amazonaws.com",
    signingRegion: "us-west-1",
  },
  "rds-fips.us-west-2": {
    hostname: "rds-fips.us-west-2.amazonaws.com",
    signingRegion: "us-west-2",
  },
  "rds.us-gov-east-1": {
    hostname: "rds.us-gov-east-1.amazonaws.com",
    signingRegion: "us-gov-east-1",
  },
  "rds.us-gov-west-1": {
    hostname: "rds.us-gov-west-1.amazonaws.com",
    signingRegion: "us-gov-west-1",
  },
};

const partitionHash: PartitionHash = {
  aws: {
    regions: [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "rds-fips.ca-central-1",
      "rds-fips.us-east-1",
      "rds-fips.us-east-2",
      "rds-fips.us-west-1",
      "rds-fips.us-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    hostname: "rds.{region}.amazonaws.com",
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    hostname: "rds.{region}.amazonaws.com.cn",
  },
  "aws-iso": {
    regions: ["us-iso-east-1"],
    hostname: "rds.{region}.c2s.ic.gov",
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    hostname: "rds.{region}.sc2s.sgov.gov",
  },
  "aws-us-gov": {
    regions: ["rds.us-gov-east-1", "rds.us-gov-west-1", "us-gov-east-1", "us-gov-west-1"],
    hostname: "rds.{region}.amazonaws.com",
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (region: string, options?: any) =>
  getRegionInfo(region, {
    ...options,
    signingService: "rds",
    regionHash,
    partitionHash,
  });
