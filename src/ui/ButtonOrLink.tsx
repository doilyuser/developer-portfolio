import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { ButtonOrLinkProps } from '@/types/buttonOrLink.types'
import { tw } from '@/utils'
import React from 'react'

const ButtonOrLink = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonOrLinkProps>(
  function ButtonOrLink(props, ref) {
    const { variant = 'primary', children, icon, iconPosition = 'left', className = '' } = props

    // Base styles shared by all buttons
    const baseStyles = tw(
      'flex h-10 min-w-[158px] items-center justify-center rounded-full border border-solid px-4 text-sm font-medium whitespace-nowrap transition-colors sm:h-12 sm:px-5 sm:text-base'
    )

    const styledIcon =
      icon && React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
            className: clsx((icon.props as { className?: string })?.className, 'h-5 w-auto sm:h-6'),
            'aria-hidden': true,
          })
        : null

    // Base styles shared by all button icons
    const iconWrapperStyles = tw('flex items-center justify-center')

    // Variant-specific styles
    const variantStyles = {
      primary: tw('border-transparent bg-accent text-surface-primary hover:bg-accent-strong'),
      secondary: tw('border-transparent bg-text-primary text-surface-primary hover:bg-text-secondary'),
      tertiary: tw('border-outline/10 hover:border-transparent hover:bg-surface-secondary'),
    }

    const commonProps = {
      className: clsx(baseStyles, variantStyles[variant], icon ? 'gap-2' : '', className),
    }

    // Render content with icons
    const content = (
      <>
        {styledIcon && iconPosition === 'left' && <span className={iconWrapperStyles}>{styledIcon}</span>}
        {children}
        {styledIcon && iconPosition === 'right' && <span className={iconWrapperStyles}>{styledIcon}</span>}
      </>
    )

    // Render the appropriate element based on 'as' prop
    if (props.as === 'link') {
      // Destructure 'as' here since Next.js Link component has an as prop
      // that specifies the path that will be shown in the browser URL bar

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { href, as, ...linkProps } = props
      return (
        <Link href={href} {...commonProps} {...linkProps}>
          {content}
        </Link>
      )
    } else if (props.as === 'a') {
      const { href, ...anchorProps } = props
      return (
        <a href={href} ref={ref as React.Ref<HTMLAnchorElement>} {...commonProps} {...anchorProps}>
          {content}
        </a>
      )
    } else {
      const { disabled, ...buttonProps } = props
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          {...commonProps}
          className={clsx(commonProps.className, disabled ? 'cursor-not-allowed opacity-80' : 'cursor-pointer')}
          {...buttonProps}
          aria-disabled={disabled}
          type={props.type || 'button'}
        >
          {content}
        </button>
      )
    }
  }
)

export default ButtonOrLink
