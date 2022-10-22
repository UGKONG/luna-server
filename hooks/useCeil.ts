import { ceilToUnit, commaizeNumber } from "@toss/utils";

/**
 *
 * @example
 * useCeil(16232, 3);
 * // 17000
 * useCeil(548642482, 8);
 * // 600000000
 * useCeil(123456, 4);
 * // 130,000
 */
export default function useCeil(
  number: number,
  zeroCount: number,
  isComma?: boolean
): number | string {
  let result: number = ceilToUnit(number, Math.pow(10, zeroCount));

  if (!isComma) return result;

  return commaizeNumber(result);
}
