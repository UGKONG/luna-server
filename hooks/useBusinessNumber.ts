import { formatBusinessRegistrationNumber } from "@toss/utils";

/**
 *
 * @example
 * useBusinessNumber('0000000000');
 * // '000-00-00000'
 */
export default function useBusinessNumber(number: string): string {
  let result: string = formatBusinessRegistrationNumber(number);

  return result;
}
