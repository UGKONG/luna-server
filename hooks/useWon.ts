import { formatToKRW } from "@toss/utils";

/**
 *
 * @example
 * useWon(5685);
 * // 5,685원
 * useWon(13209802);
 * // 1,320만 9,802원
 */
export default function useWon(number: number): string {
  let result: string = formatToKRW(number);

  return result;
}
