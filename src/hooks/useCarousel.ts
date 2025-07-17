import { useCallback, useEffect, useMemo } from 'react'
import { EmblaOptionsType, EmblaPluginType, EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel, { EmblaViewportRefType } from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useReducedMotion, useThrottle } from '@/hooks'
import { OpacityCalculationParams } from '@/types/carousel.types'
import { CAROUSEL_CONFIG } from '@/data/skills.data'

/**
 * Return type for the useCarousel hook
 *
 * @interface UseCarouselReturn
 * @property {EmblaViewportRefType} emblaRef - Embla viewport ref callback for the carousel container element
 * @property {EmblaCarouselType | undefined} emblaApi - Embla carousel API instance for programmatic control
 * @property {() => void} handleInteraction - Function to handle user interactions with auto-scroll behavior
 */
interface UseCarouselReturn {
  emblaRef: EmblaViewportRefType
  emblaApi: EmblaCarouselType | undefined
  handleInteraction: () => void
}

/**
 * A comprehensive carousel hook built on Embla Carousel with accessibility and performance optimizations
 *
 * This hook provides a fully-featured carousel implementation with auto-scroll functionality,
 * wheel gesture support, dynamic opacity effects, and accessibility considerations. It automatically
 * respects the user's reduced motion preferences and includes performance optimizations through
 * throttled opacity updates.
 *
 * Key features:
 * - Auto-scroll with configurable speed and interaction handling
 * - Wheel gesture support for horizontal scrolling
 * - Dynamic opacity effects based on slide position
 * - Accessibility support with reduced motion detection
 * - Performance optimized with throttled updates
 * - Loop and drag-free configuration options
 *
 * @returns {UseCarouselReturn} Object containing carousel ref, API, and interaction handler
 *
 * @example
 * // Basic usage in a component
 * function SkillsCarousel() {
 *   const { emblaRef, emblaApi, handleInteraction } = useCarousel();
 *
 *   return (
 *     // JSX: div with embla class and ref
 *     // Contains embla__container with slides
 *     // Each slide has onMouseEnter and onFocus handlers
 *   );
 * }
 *
 * @example
 * // Using the emblaApi for programmatic control
 * function CarouselWithControls() {
 *   const { emblaRef, emblaApi, handleInteraction } = useCarousel();
 *
 *   const scrollPrev = useCallback(() => {
 *     if (emblaApi) emblaApi.scrollPrev();
 *   }, [emblaApi]);
 *
 *   const scrollNext = useCallback(() => {
 *     if (emblaApi) emblaApi.scrollNext();
 *   }, [emblaApi]);
 *
 *   // Return JSX with carousel container and navigation buttons
 *   // Buttons call scrollPrev and scrollNext functions
 * }
 */

export function useCarousel(): UseCarouselReturn {
  const prefersReducedMotion = useReducedMotion()

  const options: EmblaOptionsType = useMemo(
    () => ({
      loop: CAROUSEL_CONFIG.OPTIONS.LOOP,
      dragFree: CAROUSEL_CONFIG.OPTIONS.DRAG_FREE,
      ...(prefersReducedMotion && { startIndex: 0 }),
    }),
    [prefersReducedMotion]
  )

  const plugins: EmblaPluginType[] = useMemo(() => {
    const autoScroll = AutoScroll({
      speed: CAROUSEL_CONFIG.AUTO_SCROLL.SPEED,
      stopOnMouseEnter: CAROUSEL_CONFIG.AUTO_SCROLL.STOP_ON_HOVER,
      stopOnFocusIn: CAROUSEL_CONFIG.AUTO_SCROLL.STOP_ON_FOCUS,
      playOnInit: !prefersReducedMotion,
    })

    const wheelGestures = WheelGesturesPlugin({
      forceWheelAxis: CAROUSEL_CONFIG.WHEEL_GESTURES.FORCE_WHEEL_AXIS,
    })

    return [wheelGestures, ...(prefersReducedMotion ? [] : [autoScroll])]
  }, [prefersReducedMotion])

  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)

  const opacityConfig = useMemo(
    () => ({
      plateauWidth: CAROUSEL_CONFIG.OPACITY.PLATEAU_WIDTH,
      fadeWidth: CAROUSEL_CONFIG.OPACITY.FADE_WIDTH,
      fadeMultiplier: CAROUSEL_CONFIG.OPACITY.FADE_MULTIPLIER,
    }),
    []
  )

  const calculateSlideOpacity = useCallback((params: OpacityCalculationParams): number => {
    const { slideSnap, scrollProgress, plateauWidth, fadeWidth, fadeMultiplier } = params
    const directDistance = Math.abs(slideSnap - scrollProgress)
    const wrapDistance = 1 - directDistance
    const distanceFromCenter = Math.min(directDistance, wrapDistance)

    if (distanceFromCenter <= plateauWidth) return 1

    if (distanceFromCenter >= plateauWidth + fadeWidth) return 0

    const fadeProgress = (distanceFromCenter - plateauWidth) / fadeWidth
    return Math.max(0, 1 - Math.pow(fadeProgress, fadeMultiplier))
  }, [])

  const updateOpacity = useThrottle(
    useCallback(() => {
      if (!emblaApi) return

      const slides = emblaApi.slideNodes()
      const scrollSnaps = emblaApi.scrollSnapList()
      const scrollProgress = emblaApi.scrollProgress()

      slides.forEach((slide, index) => {
        const slideSnap = scrollSnaps[index]
        const opacity = calculateSlideOpacity({
          slideSnap,
          scrollProgress,
          ...opacityConfig,
        })

        slide.style.opacity = opacity.toString()
      })
    }, [calculateSlideOpacity, emblaApi, opacityConfig]),
    CAROUSEL_CONFIG.THROTTLE.OPACITY_UPDATE_MS
  )

  const handleInteraction = useCallback(() => {
    if (!emblaApi || prefersReducedMotion) return

    const autoScroll = emblaApi.plugins().autoScroll

    if (!autoScroll) return

    const slideFocused = emblaApi.slideNodes().some((slide) => slide.contains(document.activeElement))

    if (autoScroll.isPlaying()) autoScroll.stop()
    else if (!slideFocused) autoScroll.play()
  }, [emblaApi, prefersReducedMotion])

  // Initialize carousel
  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('scroll', updateOpacity)

    return () => {
      emblaApi.off('scroll', updateOpacity)
    }
  }, [emblaApi, updateOpacity])

  return {
    emblaRef,
    emblaApi,
    handleInteraction,
  }
}
