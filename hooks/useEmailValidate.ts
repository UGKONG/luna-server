import { isEmail } from "@toss/validators";

/**
 * @example
 * useEmailValidate('sanguk@sanguk.kr');
 * // true
 * useEmailValidate('asdf');
 * // false
 */
export default function useEmailValidate(input: string): boolean {
  return isEmail(input);
}
