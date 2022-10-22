import { Masker } from "@toss/utils";

/**
 *
 * @example
 * usePhoneMask('010-1234-5678');
 * // 010-****-5678
 * usePhoneMask('01012345678');
 * // 010****5678
 */
export default function usePhoneMask(phoneNumber: string): string {
  return Masker.maskPhoneNumber(phoneNumber);
}
