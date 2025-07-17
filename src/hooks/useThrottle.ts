import { useRef, useCallback } from 'react'

/**
 * A hook that creates a throttled version of a callback function
 *
 * Throttling limits the rate at which a function can be executed. Unlike debouncing,
 * which delays execution until after a period of inactivity, throttling ensures
 * the function executes at most once per specified time interval. This is particularly
 * useful for performance optimization with high-frequency events like scrolling,
 * resizing, or mouse movements.
 *
 * @param {() => void} callBack - The function to throttle
 * @param {number} limit - The minimum time interval between executions in milliseconds
 * @returns {() => void} A throttled version of the callback function
 *
 * @example
 * // Throttle a scroll handler to improve performance
 * const handleScroll = useThrottle(() => {
 *   console.log('Scroll position:', window.scrollY);
 * }, 100);
 *
 * useEffect(() => {
 *   window.addEventListener('scroll', handleScroll);
 *   return () => window.removeEventListener('scroll', handleScroll);
 * }, [handleScroll]);
 *
 * @example
 * // Throttle a button click to prevent spam
 * const handleClick = useThrottle(() => {
 *   // Expensive operation
 *   performSearch();
 * }, 500);
 *
 * @example
 * // Throttle window resize handler
 * const handleResize = useThrottle(() => {
 *   setWindowSize({
 *     width: window.innerWidth,
 *     height: window.innerHeight
 *   });
 * }, 250);
 */
export function useThrottle(callBack: () => void, limit: number) {
  const lastCall = useRef(Date.now())

  return useCallback(() => {
    if (Date.now() - lastCall.current >= limit) {
      callBack()
      lastCall.current = Date.now()
    }
  }, [callBack, limit])
}
