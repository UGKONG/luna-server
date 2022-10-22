import { isEmail } from "@toss/validators";

/**
 * @example
 * useBirthValidate('980127');
 * // true
 * useBirthValidate('asdf');
 * // false
 * useBirthValidate('25.4');
 * // false
 */
export default function useBirthValidate(input: string): boolean {
  return isEmail(input);
}
