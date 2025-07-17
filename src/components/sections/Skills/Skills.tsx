'use client'

import { ACCESSIBILITY_CONFIG, skillsSection } from '@/data/skills.data'
import Link from 'next/link'
import { useCarousel, useReducedMotion } from '@/hooks'
import SkillItem from './SkillItem'
import { useCallback, useMemo } from 'react'

const headingId = `${skillsSection.id}-heading`
const instructionsId = `${ACCESSIBILITY_CONFIG.LABELS.ID}-instructions`

const CONTROLS = {
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  FIRST: 'Home',
  LAST: 'End',
}

export default function Skills() {
  const prefersReducedMotion = useReducedMotion()
  const { emblaRef, emblaApi, handleInteraction } = useCarousel()

  const displaySkills = useMemo(() => skillsSection.skills.filter((skill) => skill.display), [])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (!emblaApi || !Object.values(CONTROLS).some((key) => key === event.key)) return

      event.preventDefault()

      const focusItems = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('.focus__item'))
      const currentIndex = focusItems.findIndex((item) => document.activeElement === item)
      let nextIndex: number

      switch (event.key) {
        case CONTROLS.LEFT:
          nextIndex = Math.max(0, currentIndex - 1)
          break
        case CONTROLS.RIGHT:
          nextIndex = Math.min(focusItems.length - 1, currentIndex + 1)
          break
        case CONTROLS.FIRST:
          nextIndex = 0
          break
        case CONTROLS.LAST:
          nextIndex = focusItems.length - 1
          break
        default:
          return
      }

      if (focusItems[nextIndex]) {
        focusItems[nextIndex].focus()
        emblaApi.scrollTo(nextIndex)
      }
    },
    [emblaApi]
  )

  return (
    <section
      id={skillsSection.id}
      className="mx-auto mb-50 flex w-screen max-w-screen-xl flex-col px-4 lg:px-6"
      aria-labelledby={headingId}
    >
      {/* Header */}
      <div className="mt-20">
        <h2 id={headingId} className="text-left font-mono text-xs">
          <Link href={`/#${skillsSection.id}`}>{skillsSection.title}</Link>
        </h2>
        <p className="mb-12 text-right text-9xl text-accent underline">{skillsSection.subtitle}</p>
      </div>

      {/* Carousel */}
      <div id={instructionsId} className="sr-only focus:not-sr-only" tabIndex={0}>
        <p>{ACCESSIBILITY_CONFIG.LABELS.CAROUSEL_INSTRUCTIONS}</p>
      </div>

      <div
        className="overflow-hidden py-10"
        ref={emblaRef}
        aria-label={ACCESSIBILITY_CONFIG.LABELS.CAROUSEL_REGION}
        aria-live={prefersReducedMotion ? 'off' : 'polite'}
        role="region"
        aria-roledescription="carousel"
        aria-describedby={instructionsId}
        onKeyDown={handleKeyDown}
        onFocus={handleInteraction}
        onBlur={handleInteraction}
        onMouseLeave={handleInteraction}
      >
        <div
          className="flex flex-row"
          role="group"
          aria-label={ACCESSIBILITY_CONFIG.LABELS.CAROUSEL_CONTAINER(displaySkills.length)}
        >
          {displaySkills.map((skill, index) => (
            <SkillItem key={`${skill.text}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
