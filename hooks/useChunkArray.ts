import { chunk } from "@toss/utils";

/**
 *
 * @example
 * useChunkArray([1, 2, 3, 4], 1);
 * // [[1], [2], [3], [4]]
 * useChunkArray([1, 2, 3, 4, 5, 6], 3);
 * // [[1, 2, 3], [4, 5, 6]]
 * useChunkArray([1, 2, 3, 4, 5, 6, 7], 2);
 * // [[1, 2], [3, 4], [5, 6], [7]]
 * useChunkArray([], 2);
 * // []
 */
export default function useChunkArray(
  array: Array<any>,
  count: number
): Array<any> {
  let result: any = chunk(array, count);

  return result;
}
