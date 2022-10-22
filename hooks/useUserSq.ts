import { isRRN } from "@toss/validators";

/**
 * @example
 * useUserSq('9801271234567');
 * // true
 * useUserSq('9801271234');
 * // false
 * useUserSq('asgsd');
 * // false
 */
export default function useUserSq(input: string): boolean {
  return isRRN(input);
}
