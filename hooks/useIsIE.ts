import { isIE } from "@toss/utils";

export default function useIsIE(): boolean {
  let result = isIE();
  return result;
}
