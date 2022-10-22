import { maskName } from "@toss/utils";

/**
 *
 * @example
 * useNameMask('전상욱');
 * // 전*욱
 */
export default function useNameMask(name: string, maskChar?: string): string {
  return maskName(name, { maskChar: maskChar || "*" });
}
