import React, { forwardRef, memo } from 'react'
import type { SVGProps } from 'react'
const Cross = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
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
      <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" />
    </svg>
  )
)
Cross.displayName = 'Cross'
export default memo(Cross)
