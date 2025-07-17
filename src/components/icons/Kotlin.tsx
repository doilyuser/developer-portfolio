import React, { forwardRef, memo } from 'react'
import type { SVGProps } from 'react'
const Kotlin = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref: React.Ref<SVGSVGElement>) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      ref={ref}
      {...props}
    >
      <path d="M24 24H0V0h24L12 12Z" />
    </svg>
  )
)
Kotlin.displayName = 'Kotlin'
export default memo(Kotlin)
