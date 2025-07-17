import { useState, useEffect, useCallback } from 'react'

/**
 * Represents the current scroll state of the window
 * @interface ScrollState
 * @property {number} x - The horizontal scroll position in pixels
 * @property {number} y - The vertical scroll position in pixels
 * @property {'up' | 'down' | 'none'} direction - The current scroll direction
 * @property {number} previousY - The previous vertical scroll position
 */
interface ScrollState {
  x: number
  y: number
  direction: 'up' | 'down' | 'none'
  previousY: number
}

/**
 * A hook that tracks window scroll position and direction
 *
 * @param {Object} options - Configuration options
 * @param {boolean} [options.passive=true] - Whether to use passive event listeners for better performance
 * @returns {ScrollState} The current scroll state including position and direction
 *
 * @example
 * // Basic usage
 * const { x, y, direction } = useScroll();
 *
 * @example
 * // With non-passive event listener (rarely needed)
 * const scrollState = useScroll({ passive: false });
 */
export function useScroll(options: { passive?: boolean } = {}): ScrollState {
  const { passive = true } = options

  const [scrollState, setScrollState] = useState<ScrollState>({
    x: typeof window !== 'undefined' ? window.scrollX : 0,
    y: typeof window !== 'undefined' ? window.scrollY : 0,
    direction: 'none',
    previousY: typeof window !== 'undefined' ? window.scrollY : 0,
  })

  const handleScroll = useCallback(() => {
    setScrollState((prevState) => {
      const currentY = window.scrollY
      const direction = currentY === 0 ? 'none' : currentY > prevState.y ? 'down' : 'up'

      return {
        x: window.scrollX,
        y: currentY,
        direction,
        previousY: prevState.y,
      }
    })
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    window.addEventListener('scroll', handleScroll, { passive })

    // Initial call to set initial state
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll, passive])

  return scrollState
}
