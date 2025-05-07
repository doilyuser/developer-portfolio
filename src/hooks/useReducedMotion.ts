import { useState, useEffect } from 'react'

/**
 * A hook that detects whether the user has enabled the "reduced motion" accessibility setting
 *
 * This hook helps create more accessible animations by respecting the user's system preferences.
 * When a user has enabled the "prefers-reduced-motion" setting in their operating system,
 * this hook will return true, allowing you to disable or simplify animations accordingly.
 *
 * @returns {boolean} Whether the user prefers reduced motion
 *
 * @example
 * // Basic usage
 * const prefersReducedMotion = useReducedMotion();
 *
 * // In a component:
 * const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';
 * window.scrollTo({
 *   top: 0,
 *   behavior: scrollBehavior
 * });
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Get initial value
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    // Add listener for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}
