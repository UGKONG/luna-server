/**
 * @param number1 loaded value
 * @param number2 all value
 * @example
 * usePercent(3, 10)
 * @return
 * 30
 */
export default function usePercent(number1?: number, number2?: number): number {
  if (!number1) return 0;
  if (!number2) return 0;
  let result: number = (number1 / number2) * 100;
  return result;
}
