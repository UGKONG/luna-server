import { QS } from "@toss/utils";

/**
 *
 * @example
 * useStringQuery('id=1&name=전상욱');
 * // {id: 1, name: '전상욱'}
 * useStringQuery('?id=1&name=전상욱');
 * // {id: 1, name: '전상욱'}
 * useStringQuery('?id=1&language=js&language=ts');
 * // {id: 1, language: ['js', 'ts']}
 */
export default function useStringQuery(object: string): object {
  return QS.parse(object);
}
