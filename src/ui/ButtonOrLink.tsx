import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { ButtonOrLinkProps } from '@/types/buttonOrLink.types'

const ButtonOrLink = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonOrLinkProps>(
  function ButtonOrLink(props, ref) {
    const { variant = 'primary', children, icon, iconPosition = 'left', className = '' } = props

    // Base styles shared by all buttons
    const baseStyles =
      'rounded-full border border-solid transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 min-w-[158px] whitespace-nowrap'

    // Base styles shared by all button icons
    const iconStyles = 'flex items-center justify-center'

    // Variant-specific styles
    const variantStyles = {
      primary: 'bg-accent text-surface-primary border-transparent hover:bg-accent-strong',
      secondary: 'bg-text-primary text-surface-primary border-transparent hover:bg-text-secondary',
      tertiary: 'border-outline/10 hover:bg-surface-secondary hover:border-transparent',
    }

    const commonProps = {
      className: clsx(baseStyles, variantStyles[variant], icon ? 'gap-2' : '', className),
    }

    // Render content with icons
    const content = (
      <>
        {icon && iconPosition === 'left' && <span className={iconStyles}>{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className={iconStyles}>{icon}</span>}
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
          className={clsx(
            commonProps.className,
            disabled ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'
          )}
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
