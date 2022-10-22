import { hangulIncludes } from "@toss/hangul";

/**
 * @example
 * useSearchHangul('개발자', '갭');
 * // true
 * useSearchHangul('개발자', '개발ㅈ');
 * // true
 * useSearchHangul('개발자', '개밪');
 * // false
 */
export default function useSearchHangul(
  current: string,
  searchText?: string
): boolean {
  return hangulIncludes(current, searchText ?? "");
}
