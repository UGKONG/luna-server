import { range } from "@toss/utils";

/**
 *
 * @example
 * useRange(1, 5);
 * // [1, 2, 3, 4]
 * useRange(4);
 * // [0, 1, 2, 3]
 * useRange(1, 11, 3);
 * // [1, 4, 7, 10]
 */
export default function useRange(
  start: number,
  end?: number,
  step?: number
): Array<number> {
  return range(start, end, step);
}
