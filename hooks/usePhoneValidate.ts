import { isMobilePhone } from "@toss/validators";

/**
 * @example
 * usePhoneValidate('01012341234');
 * // true
 * usePhoneValidate('010-1234-1234');
 * // true
 * usePhoneValidate('010123412');
 * // false
 * usePhoneValidate('asdf');
 * // false
 */
export default function usePhoneValidate(input: string): boolean {
  return isMobilePhone(input);
}
