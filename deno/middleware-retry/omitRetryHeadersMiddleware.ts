import { HttpRequest } from "../protocol-http/mod.ts";
import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  MetadataBearer,
  Pluggable,
  RelativeMiddlewareOptions,
} from "../types/mod.ts";

import { INVOCATION_ID_HEADER, REQUEST_HEADER } from "./constants.ts";

export const omitRetryHeadersMiddleware =
  () =>
  <Output extends MetadataBearer = MetadataBearer>(next: FinalizeHandler<any, Output>): FinalizeHandler<any, Output> =>
  async (args: FinalizeHandlerArguments<any>): Promise<FinalizeHandlerOutput<Output>> => {
    const { request } = args;
    if (HttpRequest.isInstance(request)) {
      delete request.headers[INVOCATION_ID_HEADER];
      delete request.headers[REQUEST_HEADER];
    }
    return next(args);
  };

export const omitRetryHeadersMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "omitRetryHeadersMiddleware",
  tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
  relation: "before",
  toMiddleware: "awsAuthMiddleware",
  override: true,
};

export const getOmitRetryHeadersPlugin = (options: unknown): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
  },
});
