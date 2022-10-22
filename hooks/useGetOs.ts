import { getOSByUserAgent, isServer } from "@toss/utils";

type Result = "node" | "ios" | "android" | "web" | "other";
export default function useGetOs(): Result {
  let agent = getOSByUserAgent();
  let result: Result = agent ? agent : isServer() ? "node" : "other";

  return result;
}
