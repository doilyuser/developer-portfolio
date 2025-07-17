import React, { forwardRef, memo } from 'react'
import type { SVGProps } from 'react'
const C = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref: React.Ref<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 300"
      className={className}
      fill="currentColor"
      ref={ref}
      {...props}
    >
      <g transform="matrix(12.499865 0 0 12.49987 0.00747 0.428193)">
        <path
          d="M22.394,6c-.167-.29-.398-.543-.652-.69L12.926,0.22c-.509-.294-1.34-.294-1.848,0L2.26,5.31c-.508.293-.923,1.013-.923,1.6v10.18c0,.294.104.62.271.91s.398.543.652.69l8.816,5.09c.508.293,1.34.293,1.848,0l8.816-5.09c.254-.147.485-.4.652-.69s.27-.616.27-.91v-10.18c.003-.294-.1-.62-.268-.91ZM12,19.11c-3.92,0-7.109-3.19-7.109-7.11s3.19-7.11,7.11-7.11c2.537964.004822,4.882217,1.357832,6.156,3.553l-3.076,1.78c-.63644-1.099472-1.809611-1.777474-3.08-1.78-1.963791.001654-3.555346,1.593209-3.557,3.557.002755,1.96262,1.593379,3.552797,3.556,3.555c1.269813-.002726,2.442605-.679747,3.08-1.778l3.078,1.78C16.883558,17.752485,14.538569,19.10548,12,19.11Z"
          transform="translate(0-.033756)"
          stroke="currentColor"
          strokeWidth={0}
        />
      </g>
    </svg>
  )
)
C.displayName = 'C'
export default memo(C)
