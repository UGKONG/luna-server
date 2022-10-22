import { mapValues } from "@toss/utils";

/**
 *
 * @example
 * useObjectMap({ foo: 1, bar: 2 }, x => x * 2);
 * // { foo: 2, bar: 4 }
 */
export default function useObjectMap(
  object: any,
  callback: (x: any) => any
): any {
  return mapValues(object, callback);
}
