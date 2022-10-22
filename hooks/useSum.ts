import { sum } from "@toss/utils";

/**
 *
 * @example
 * useSum([1, 2, 3, 4]);
 * // 10
 */
export default function useSum(numberArray: Array<number>): number {
  return sum(numberArray);
}
