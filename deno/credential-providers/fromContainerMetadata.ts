import {
  fromContainerMetadata as _fromContainerMetadata,
  RemoteProviderInit as _RemoteProviderInit,
} from "../credential-provider-imds/mod.ts";
import { CredentialProvider } from "../types/mod.ts";

export interface RemoteProviderInit extends _RemoteProviderInit {}

/**
 * Create a credential provider function that reads from ECS container metadata service.
 *
 * ```javascript
 * import { fromContainerMetadata } from "../credential-providers/mod.ts";
 * // const { fromContainerMetadata } = require("@aws-sdk/credential-providers"); // CommonJS import
 *
 * const foo = new FooClient({
 *   credentials: fromInstanceMetadata({
 *     // Optional. The connection timeout (in milliseconds) to apply to any remote requests. If not specified, a default value
 *     // of`1000` (one second) is used.
 *     timeout: 1000,
 *     // Optional. The maximum number of times any HTTP connections should be retried. If not specified, a default value of `0`
 *     // will be used.
 *     maxRetries: 0,
 *   }),
 * });
 * ```
 */
export const fromContainerMetadata = (init?: RemoteProviderInit): CredentialProvider => _fromContainerMetadata(init);
