import { uniq, uniqBy } from "@toss/utils";

/**
 *
 * @example
 * useUniqArray([1, 2, 3, 4]);
 * // 4
 * useUniqArray([{id: 1}, {id: 2}, {id: 3}], 'id');
 * // {id: 3}
 * useUniqArray([{name: '가'}, {name: '나'}, {name: '다'}], 'name');
 * // {name: '다'}
 */
export default function useUniqArray(
  array: Array<any>,
  property?: string
): Array<any> {
  let type = typeof array[0];
  if (type === "undefined") return [];

  if (type === "string" || type === "number") {
    return uniqBy(array, (x) => x);
  }

  if (property) return uniqBy(array, (x) => x[property]);

  return [];
}
