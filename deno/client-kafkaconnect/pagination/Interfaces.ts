import { KafkaConnect } from "../KafkaConnect.ts";
import { KafkaConnectClient } from "../KafkaConnectClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface KafkaConnectPaginationConfiguration extends PaginationConfiguration {
  client: KafkaConnect | KafkaConnectClient;
}
