'use client'

import { useCallback, JSX } from 'react'
import { ArrowUp } from '@/components/icons'
import { Transition } from '@headlessui/react'

import { ScreenReaderSpan } from '@/ui'
import { useScrollVisibility, useReducedMotion } from '@/hooks'

export default function ScrollToTop(): JSX.Element {
  const isVisible = useScrollVisibility({ threshold: 500 })
  const prefersReducedMotion = useReducedMotion()

  const scrollToTop = useCallback(() => {
    const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth'

    window.scrollTo({
      top: 0,
      behavior: scrollBehavior,
    })
  }, [prefersReducedMotion])

  return (
    <Transition
      show={isVisible}
      enter="transition-opacity ease-in-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed right-8 bottom-10 z-50 text-5xl">
        <button onClick={scrollToTop} aria-label="Back to top of page" className="cursor-pointer rounded-full">
          <ArrowUp
            className="h-12 w-auto rounded-full border border-solid border-outline/20 transition-colors duration-300 ease-in-out hover:border-transparent hover:bg-surface-secondary"
            aria-hidden="true"
          />
          <ScreenReaderSpan text="Back to top of page" />
        </button>
      </div>
    </Transition>
  )
}
