import { Home, Person, Document, Settings, Chat, Megaphone, Burger, Cross } from '@/components/icons'
import { NavigationItem, NavigationData, LogoOrientation } from '../types/navigation.types'
import { contactData } from '../data/contact.data'
import { homeSections } from './home.data'

const navigationItems: NavigationItem[] = [
  { label: 'Home', enabled: homeSections.landing, href: '/#home', icon: Home },
  { label: 'About', enabled: homeSections.about, href: '/#about', icon: Person },
  { label: 'Education', enabled: homeSections.education, href: '/#education', icon: Cross },
  { label: 'Skills', enabled: homeSections.skills, href: '/#skills', icon: Cross },
  { label: 'Experience', enabled: homeSections.experience, href: '/#experience', icon: Document },
  { label: 'Projects', enabled: homeSections.projects, href: '/#projects', icon: Settings },
  { label: 'Achievements', enabled: homeSections.achievements, href: '/#achievements', icon: Cross },
  { label: 'Services', enabled: homeSections.services, href: '/#services', icon: Cross },
  { label: 'Testimonials', enabled: homeSections.testimonials, href: '/#testimonials', icon: Cross },
  { label: 'Blog', enabled: homeSections.blog, href: '/#blog', icon: Chat },
  { label: 'Contact', enabled: homeSections.contact, href: '/#contact', icon: Megaphone },
] as const

export const navigationData: NavigationData = {
  icons: {
    menu: Burger,
    close: Cross,
  },
  logo: {
    source: 'images/logo.svg',
    altText: `logomark for ${contactData.name}`,
    orientation: LogoOrientation.Square,
  },
  navigationItems: navigationItems.filter((item) => item.enabled),
} as const
