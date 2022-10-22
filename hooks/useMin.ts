import { minBy } from "@toss/utils";

/**
 *
 * @example
 * useMin([1, 2, 3, 4]);
 * // 1
 * useMin([{id: 1}, {id: 2}, {id: 3}], 'id');
 * // {id: 1}
 * useMin([{name: '가'}, {name: '나'}, {name: '다'}], 'name');
 * // {name: '가'}
 */
export default function useMin(array: Array<any>, property?: string): any {
  let type = typeof array[0];
  if (type === "undefined") return undefined;

  if (type === "string" || type === "number") {
    return minBy(array, (x) => x);
  }

  if (property) return minBy(array, (item) => item[property]);

  return undefined;
}
