import { shuffle } from "@toss/utils";

/**
 *
 * @example
 * useRandomArray([1, 2, 3, 4]);
 * // [4, 3, 1, 2]
 */
export default function useRandomArray(array: Array<any>): Array<any> {
  return shuffle(array);
}
