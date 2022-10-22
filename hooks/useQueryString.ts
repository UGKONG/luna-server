import { QS } from "@toss/utils";

/**
 *
 * @example
 * useQueryString({id: 1, name: '전상욱'});
 * // ?id=1&name=전상욱
 * useQueryString({id: 1, language: ['js', 'ts']});
 * // ?id=1&language=js&language=ts
 */
export default function useQueryString(object: any): string {
  return QS.create(object);
}
