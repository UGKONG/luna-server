import { formatPhoneNumber } from "@toss/utils";

/**
 *
 * @example
 * usePhoneNumber('01025560000');
 * // '010-2556-0000'
 * usePhoneNumber('0215994905');
 * // '02-1599-4905'
 */
export default function usePhoneNumber(phoneNumber: string): string {
  let result: string = formatPhoneNumber(phoneNumber);

  return result;
}
