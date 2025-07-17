import React, { forwardRef, memo } from 'react'
import type { SVGProps } from 'react'
const ArrowUp = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref: React.Ref<SVGSVGElement>) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      ref={ref}
      {...props}
    >
      <path d="M277.375 427V167.296l119.702 119.702L427 256 256 85 85 256l29.924 29.922 119.701-118.626V427h42.75z" />
    </svg>
  )
)
ArrowUp.displayName = 'ArrowUp'
export default memo(ArrowUp)
