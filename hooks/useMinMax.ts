import { clamp } from "@toss/utils";

/**
 * @description
 * useMinMax (값, 최소값, 최대값);
 * @example
 * useMinMax(3, 1);
 * // 3
 * useMinMax(3, 1, 5);
 * // 3
 * useMinMax(3, 5);
 * // 5
 * useMinMax(7, 3, 5);
 * // 5
 */
export default function useMinMax(
  number: number,
  min: number,
  max?: number
): number {
  let result: any = clamp(number, min, max ?? min);

  return result;
}
