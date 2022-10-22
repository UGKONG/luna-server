import { last } from "@toss/utils";

/**
 *
 * @example
 * useLastItem([1, 2, 3]);
 * // 3
 * useLastItem([{id: 1}, {id: 2}, {id: 3}]);
 * // {id: 3}
 * useLastItem([]);
 * // undefined
 */
export default function useLastItem(array: Array<any>): any {
  let result: any = last(array);

  return result;
}
