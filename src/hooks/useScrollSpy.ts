import { useState, useEffect, useCallback } from 'react'
import { useScroll } from './useScroll'
import { NavigationItem } from '../types/navigation.types'

/**
 * Configuration options for the useScrollSpy hook
 *
 * @interface ScrollSpyOptions
 * @property {NavigationItem[]} items - Array of navigation items to track
 * @property {number} [viewportThreshold=0.5] - Threshold for determining when an element is in view (0-1)
 */
interface ScrollSpyOptions {
  items: NavigationItem[]
  viewportThreshold?: number
}

/**
 * A hook that tracks which navigation items are currently in the viewport
 *
 * This hook is commonly used for highlighting the active section in navigation menus
 * as the user scrolls through different sections of a page.
 *
 * @param {ScrollSpyOptions} options - Configuration options
 * @returns {NavigationItem[]} Array of navigation items with updated 'current' property
 *
 * @example
 * // Basic usage
 * const navigationItems = useScrollSpy({
 *   items: navigation,
 *   viewportThreshold: 0.5
 * });
 *
 * // Then in your component:
 * {navigationItems.map(item => (
 *   <a
 *     key={item.name}
 *     href={item.href}
 *     className={item.current ? 'active' : ''}
 *   >
 *     {item.name}
 *   </a>
 * ))}
 */
export function useScrollSpy(options: ScrollSpyOptions): NavigationItem[] {
  const { items, viewportThreshold = 0.5 } = options

  const [activeItems, setActiveItems] = useState(items)
  const { y } = useScroll()

  const isElementInView = useCallback(
    (element: HTMLElement) => {
      const rect = element.getBoundingClientRect()
      return rect.top > -window.innerHeight * viewportThreshold && rect.top < window.innerHeight * viewportThreshold
    },
    [viewportThreshold]
  )

  const updateActiveItems = useCallback(() => {
    const updatedItems = items.map((item) => {
      const element = document.getElementById(item.label.toLowerCase())
      return element ? { ...item, current: isElementInView(element) } : { ...item }
    })
    setActiveItems(updatedItems)
  }, [items, isElementInView])

  useEffect(() => {
    if (typeof window === 'undefined') return

    updateActiveItems()
  }, [y, updateActiveItems])

  return activeItems
}
