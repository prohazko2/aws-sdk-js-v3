import { Provider } from "../../types/mod.ts";

export const normalizeRegion = (region: string | Provider<string>): Provider<string> => {
  if (typeof region === "string") {
    const promisified = Promise.resolve(region);
    return () => promisified;
  }
  return region as Provider<string>;
};
