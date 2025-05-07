import Image from 'next/image'

import { LogoProps } from '@/types/navigation.types'

export default function Logo({ className, src, alt, width, height }: LogoProps) {
  return (
    <div className="flex shrink-0 items-center">
      <Image className={className} src={src} alt={alt} width={width} height={height} />
    </div>
  )
}
