import React, { forwardRef, memo } from 'react'
import type { SVGProps } from 'react'
const Ionic = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
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
      <path d="M22.922 7.027l-.103-.23-.169.188c-.408.464-.928.82-1.505 1.036l-.159.061.066.155a9.745 9.745 0 0 1 .75 3.759c0 5.405-4.397 9.806-9.806 9.806-5.409 0-9.802-4.397-9.802-9.802 0-5.405 4.402-9.806 9.806-9.806 1.467 0 2.883.319 4.2.947l.155.075.066-.155a3.767 3.767 0 0 1 1.106-1.453l.197-.159-.225-.117A11.905 11.905 0 0 0 12.001.001c-6.619 0-12 5.381-12 12s5.381 12 12 12 12-5.381 12-12c0-1.73-.361-3.403-1.078-4.973zM12 6.53A5.476 5.476 0 0 0 6.53 12 5.476 5.476 0 0 0 12 17.47 5.476 5.476 0 0 0 17.47 12 5.479 5.479 0 0 0 12 6.53zm10.345-2.007a2.494 2.494 0 1 1-4.988 0 2.494 2.494 0 0 1 4.988 0z" />
    </svg>
  )
)
Ionic.displayName = 'Ionic'
export default memo(Ionic)
