/**
 *
 * @example
 * useObjectValues({id: 1, name: '전상욱'});
 * // [1, '전상욱']
 */
export default function useObjectValues(object: any): Array<string> {
  return Object.values(object);
}
