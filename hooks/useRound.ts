import { roundToUnit, commaizeNumber } from "@toss/utils";

/**
 *
 * @example
 * useRound(16232, 3);
 * // 16000
 * useRound(548642482, 8);
 * // 500000000
 * useRound(123456, 4);
 * // 120,000
 */
export default function useRound(
  number: number,
  zeroCount: number,
  isComma?: boolean
): number | string {
  let result: number = roundToUnit(number, Math.pow(10, zeroCount));

  if (!isComma) return result;

  return commaizeNumber(result);
}
