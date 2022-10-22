import { delay } from "@toss/utils";

/**
 * @example
 * useDelay(3);
 * // 3초 뒤 실행
 */
export default async function useDelay(
  s: number,
  callback?: () => void
): Promise<void> {
  await delay(s * 1000);
  if (callback) callback();
}
