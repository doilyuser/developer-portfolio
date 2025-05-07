import {
  IoHome,
  IoPerson,
  IoDocumentText,
  IoSettings,
  IoChatboxEllipses,
  IoMegaphone,
} from 'react-icons/io5'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { NavigationItem, NavigationData, LogoOrientation } from '../types/navigation.types'
import { contactData } from '../data/contact.data'

const defaultNavigationItems: NavigationItem[] = [
  { name: 'Home', href: '/#home', icon: IoHome },
  { name: 'About', href: '/#about', icon: IoPerson },
  { name: 'Experience', href: '/#experience', icon: IoDocumentText },
  { name: 'Projects', href: '/#projects', icon: IoSettings },
  { name: 'Blog', href: '/#blog', icon: IoChatboxEllipses },
  { name: 'Contact', href: '/#contact', icon: IoMegaphone },
]

const customNavigationItems: NavigationItem[] | null = [
  { name: 'Home', href: '/#home', icon: IoHome },
  { name: 'Contact', href: '/#contact', icon: IoMegaphone },
]

export const navigationData: NavigationData = {
  icons: {
    menu: IoMdMenu,
    close: IoMdClose,
  },
  logo: {
    source: 'svg/logo.svg',
    altText: `logomark for ${contactData.name}`,
    orientation: LogoOrientation.Square,
  },
  navigationItems: customNavigationItems || defaultNavigationItems,
}
