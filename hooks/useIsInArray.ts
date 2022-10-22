import { arrayIncludes } from "@toss/utils";

/**
 *
 * @example
 * useIsInArray([1, 2, 3], 3);
 * // true
 * useIsInArray([1, 2, 3], 5);
 * // false
 */
export default function useIsInArray(
  array: Array<number | string>,
  item: number | string
): boolean {
  let result: boolean = arrayIncludes(array, item);

  return result;
}
