import React, { forwardRef, memo } from 'react'
import type { SVGProps } from 'react'
const Chat = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
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
      <path d="M408 48H104a72.08 72.08 0 0 0-72 72v192a72.08 72.08 0 0 0 72 72h24v64a16 16 0 0 0 26.25 12.29L245.74 384H408a72.08 72.08 0 0 0 72-72V120a72.08 72.08 0 0 0-72-72zM160 248a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32z" />
    </svg>
  )
)
Chat.displayName = 'Chat'
export default memo(Chat)
