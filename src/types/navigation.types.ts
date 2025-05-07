import { IconType } from 'react-icons'

export interface NavigationData {
  icons: {
    menu: IconType
    close: IconType
  }
  logo: Logo
  navigationItems: NavigationItem[]
}

export interface Logo {
  source: string
  altText: string
  orientation: LogoOrientation.Landscape | LogoOrientation.Square
}

export enum LogoOrientation {
  Landscape = 'landscape',
  Square = 'square',
}

export interface LogoProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export interface NavigationItem {
  name: string
  href: string
  icon: IconType
  current?: boolean
}
