/**
 *
 * @example
 * useObjectKeys({id: 1, name: '전상욱'});
 * // ['id', 'name']
 */
export default function useObjectKeys(object: any): Array<string> {
  return Object.keys(object);
}
