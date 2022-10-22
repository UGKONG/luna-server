import { loadScript } from "@toss/utils";

/**
 *
 * @example
 * useLoadScript('https://example.com/script.js');
 */
export default async function useLoadScript(source: string): Promise<void> {
  await loadScript(source);
  return;
}
