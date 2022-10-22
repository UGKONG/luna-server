import { retryRequestsOf } from "@toss/utils";

const noop = () => {};
/**
 *
 * @example
 * useRetry(() => {
 *   console.log('called');
 *   throw new Error('Failed');
 * }, 2, () => {
 *   console.log('Error!!')
 * });
 * // called
 * // Error!!
 * // called
 * // Error!!
 */
export default function useRetry(
  callback: any,
  retryCount?: number,
  errorCallback?: () => void
): any {
  let result = retryRequestsOf(callback, {
    retries: retryCount ?? 0,
    onError: errorCallback ?? noop,
  });
  result();
  return result;
}
