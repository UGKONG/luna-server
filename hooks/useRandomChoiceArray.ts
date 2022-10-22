import { sample } from "@toss/utils";

/**
 *
 * @example
 * useRandomChoiceArray([1, 2, 3]);
 * // 3
 * useRandomChoiceArray([1, 2, 3]);
 * // 2
 * useRandomChoiceArray({ id: 1 }, { id: 2 }, { id: 3 });
 * // { id: 2 }
 * useRandomChoiceArray([]);
 * // undefined
 */
export default function useRandomChoiceArray(array: Array<any>): any {
  let result: any = sample(array);

  return result;
}
