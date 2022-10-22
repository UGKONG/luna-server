import { floorToUnit, commaizeNumber } from "@toss/utils";

/**
 *
 * @example
 * useFloor(16232, 3);
 * // 16000
 * useFloor(548642482, 8);
 * // 500000000
 * useFloor(123456, 4);
 * // 120,000
 */
export default function useFloor(
  number: number,
  zeroCount: number,
  isComma?: boolean
): number | string {
  let result: number = floorToUnit(number, Math.pow(10, zeroCount));

  if (!isComma) return result;

  return commaizeNumber(result);
}
