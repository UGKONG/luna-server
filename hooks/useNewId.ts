import { generateID } from "@toss/utils";

/**
 *
 * @example
 * useNewId();
 * // 1
 * useNewId();
 * // 2
 * useNewId();
 * // 3
 */
export default function useNewId(): number {
  return Number(generateID());
}
