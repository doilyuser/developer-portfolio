import { useState, useEffect } from 'react'
import { useScroll } from './useScroll'

/**
 * Configuration options for the useScrollDirection hook
 *
 * @interface ScrollDirectionOptions
 * @property {boolean} [initialVisible=true] - Whether the element should be initially visible
 * @property {boolean} [showOnTop=true] - Whether to always show the element when at the top of the page
 */
interface ScrollDirectionOptions {
  initialVisible?: boolean
  showOnTop?: boolean
}

/**
 * A hook that controls visibility based on scroll direction
 *
 * Commonly used for navigation headers that hide when scrolling down
 * and reappear when scrolling up, improving screen real estate.
 * Also provides focus/blur handlers for accessibility.
 *
 * @param {ScrollDirectionOptions} options - Configuration options
 * @returns {Object} Object containing visibility state and event handlers
 * @returns {boolean} returns.visible - Whether the element should be visible
 * @returns {Function} returns.handleFocus - Event handler to show element on focus
 * @returns {Function} returns.handleBlur - Event handler to hide element on blur
 *
 * @example
 * // Basic usage
 * const { visible, handleFocus, handleBlur } = useScrollDirection();
 *
 * @example
 * // With custom options
 * const { visible } = useScrollDirection({
 *   initialVisible: false,
 *   showOnTop: false
 * });
 */
export function useScrollDirection(options: ScrollDirectionOptions = {}): {
  visible: boolean
  handleFocus: () => void
  handleBlur: () => void
} {
  const { initialVisible = true, showOnTop = true } = options

  const [visible, setVisible] = useState(initialVisible)
  const { y, direction } = useScroll()

  useEffect(() => {
    // Always show at the top if showOnTop is true
    if (showOnTop && y === 0) {
      setVisible(true)
      return
    }

    // Update visibility based on scroll direction
    if (direction === 'up') {
      setVisible(true)
    } else if (direction === 'down') {
      setVisible(false)
    }
  }, [y, direction, showOnTop])

  // Add focus/blur handlers for accessibility
  const handleFocus = () => setVisible(true)
  const handleBlur = () => setVisible(false)

  return { visible, handleFocus, handleBlur }
}
