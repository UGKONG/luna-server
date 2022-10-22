import { smoothScrollTo } from "@toss/utils";

type Option = { speed: number } | { duration: number };

export default function useScrollTo(
  element: Element | Window,
  to: number,
  option?: Option
): void {
  smoothScrollTo(element ?? window, { top: to ?? 0 }, option);
}
