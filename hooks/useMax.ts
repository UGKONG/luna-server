import { maxBy } from "@toss/utils";

/**
 *
 * @example
 * useMax([1, 2, 3, 4]);
 * // 4
 * useMax([{id: 1}, {id: 2}, {id: 3}], 'id');
 * // {id: 3}
 * useMax([{name: '가'}, {name: '나'}, {name: '다'}], 'name');
 * // {name: '다'}
 */
export default function useMax(array: Array<any>, property?: string): any {
  let type = typeof array[0];
  if (type === "undefined") return undefined;

  if (type === "string" || type === "number") {
    return maxBy(array, (x) => x);
  }

  if (property) return maxBy(array, (item) => item[property]);

  return undefined;
}
