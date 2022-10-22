import { isNonEmptyArray } from "@toss/utils";

/**
 *
 * @example
 * useIsEmptyArray([1, 2, 3]);
 * // false
 * useIsEmptyArray([]);
 * // true
 */
export default function useIsEmptyArray(array: Array<any>): boolean {
  let result: boolean = isNonEmptyArray(array);

  return !result;
}
