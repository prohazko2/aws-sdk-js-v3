import { ChimeSDKIdentity } from "../ChimeSDKIdentity.ts";
import { ChimeSDKIdentityClient } from "../ChimeSDKIdentityClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ChimeSDKIdentityPaginationConfiguration extends PaginationConfiguration {
  client: ChimeSDKIdentity | ChimeSDKIdentityClient;
}
