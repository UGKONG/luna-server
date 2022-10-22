import { josa } from "@toss/hangul";

type JosaWord =
  | "이/가"
  | "을/를"
  | "은/는"
  | "으로/로"
  | "와/과"
  | "이나/나"
  | "이에/에";
/**
 *
 * @example
 * useHangulJosa('샴푸', '이/가');
 * // 샴푸가
 * useHangulJosa('칫솔', '이/가');
 * // 칫솔이
 * useHangulJosa('바깥', '으로/로');
 * // 바깥으로
 */
export default function useHangulJosa(
  word: string,
  josaWord: JosaWord
): string {
  return josa(word, josaWord);
}
