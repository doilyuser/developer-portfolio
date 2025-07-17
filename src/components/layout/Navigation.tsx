'use client'

import { JSX } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Link from 'next/link'
import clsx from 'clsx'

import { Logo, ScreenReaderSpan } from '@/ui'
import { useScrollDirection, useScrollSpy } from '@/hooks'
import { navigationData } from '@/data/navigation.data'
import { NavigationItem, LogoOrientation } from '@/types/navigation.types'

const data = navigationData

export default function Navigation(): JSX.Element {
  const {
    visible: isVisible,
    handleFocus,
    handleBlur,
  } = useScrollDirection({
    initialVisible: true,
    showOnTop: true,
  })

  const navigationItems = useScrollSpy({
    items: data.navigationItems,
    viewportThreshold: 0.3,
  })

  const getLinkClasses = (isCurrent: NavigationItem['current']) =>
    clsx(
      isCurrent
        ? 'bg-text-primary text-surface-primary hover:bg-text-secondary'
        : 'text-text-primary hover:border-transparent hover:bg-surface-secondary'
    )

  return (
    <header onFocus={handleFocus} onBlur={handleBlur}>
      <Disclosure
        as="nav"
        aria-label="Main navigation"
        className={clsx(
          'fixed top-0 z-10 w-full border-b border-outline/20 bg-surface-primary font-sans',
          'transition-transform duration-300 will-change-transform',
          isVisible ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton
                    className="group relative inline-flex items-center justify-center rounded-md p-2 text-text-primary hover:border-transparent hover:bg-text-secondary"
                    aria-label={open ? 'Close main menu' : 'Open main menu'}
                  >
                    <data.icons.menu aria-hidden="true" className="block size-6 group-data-open:hidden" />
                    <data.icons.close aria-hidden="true" className="hidden size-6 group-data-open:block" />
                    <ScreenReaderSpan text={open ? 'Close main menu' : 'Open main menu'} />
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <Link href="/">
                    <Logo
                      className="dark:invert"
                      src={data.logo.source}
                      alt={data.logo.altText}
                      width={data.logo.orientation === LogoOrientation.Landscape ? 90 : 30}
                      height={30}
                    />
                    <ScreenReaderSpan text="Return home" />
                  </Link>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigationItems.map((item, index) => (
                        <Link
                          key={`${item.label}-${index}`}
                          href={item.href}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          className={clsx(
                            getLinkClasses(item.current),
                            'rounded-md px-3 py-2 text-sm font-medium transition-colors'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigationItems.map((item, index) => (
                  <Link
                    key={`${item.label}-${index}`}
                    href={item.href}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={clsx(
                      getLinkClasses(item.current),
                      'flex items-center rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon className="mr-3 h-5 w-auto" aria-hidden="true" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </header>
  )
}
