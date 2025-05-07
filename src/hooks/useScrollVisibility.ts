import { useState, useEffect } from 'react'
import { useScroll } from './useScroll'

/**
 * Configuration options for the useScrollVisibility hook
 *
 * @interface ScrollVisibilityOptions
 * @property {number} [threshold=500] - The scroll position threshold in pixels that triggers visibility
 * @property {boolean} [showOnScrollUp=false] - Whether to only show when scrolling up (after passing threshold)
 */
interface ScrollVisibilityOptions {
  threshold?: number
  showOnScrollUp?: boolean
}

/**
 * A hook that determines visibility based on scroll position and direction
 *
 * This hook is useful for showing/hiding UI elements like "back to top" buttons
 * or headers that should appear after scrolling to a certain position.
 *
 * @param {ScrollVisibilityOptions} options - Configuration options
 * @returns {boolean} Whether the element should be visible based on scroll position and options
 *
 * @example
 * // Basic usage - show after scrolling 500px
 * const isVisible = useScrollVisibility();
 *
 * @example
 * // Show after 200px, but only when scrolling up
 * const isVisible = useScrollVisibility({
 *   threshold: 200,
 *   showOnScrollUp: true
 * });
 */
export function useScrollVisibility(
  options: ScrollVisibilityOptions = {}
): boolean {
  const { threshold = 500, showOnScrollUp = false } = options

  const [visible, setVisible] = useState(false)
  const { y, direction } = useScroll()

  useEffect(() => {
    // Show when scrolled past threshold
    if (y > threshold) {
      // If showOnScrollUp is true, only show when scrolling up
      if (showOnScrollUp) {
        setVisible(direction === 'up')
      } else {
        setVisible(true)
      }
    } else {
      setVisible(false)
    }
  }, [y, direction, threshold, showOnScrollUp])

  return visible
}
