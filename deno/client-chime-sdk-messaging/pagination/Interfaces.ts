import { ChimeSDKMessaging } from "../ChimeSDKMessaging.ts";
import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ChimeSDKMessagingPaginationConfiguration extends PaginationConfiguration {
  client: ChimeSDKMessaging | ChimeSDKMessagingClient;
}
