import { contactData } from '../data/contact.data'
import { X, LinkedIn, GitHub, Youtube, Blogger, Facebook, ArrowDown } from '@/components/icons'

const cv = '/assets/cv.pdf'
const profilePicture = '/images/profile.png'

export const landingData = {
  greeting: 'Hi, I am',
  name: contactData.name,
  title: 'Software Engineer',
  description: `John is a software developer specializing in web development, creating responsive and user-friendly applications with modern technologies.`,
  image: {
    source: profilePicture,
    alt: 'Professional headshot of a software developer',
  },
  resumePdf: cv,
  linkText: {
    downloadResume: 'Download CV',
    contactUs: 'Get in touch',
  },
  socials: [
    { name: 'GitHub', href: 'https://github.com/john', icon: GitHub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/john/', icon: LinkedIn },
    { name: 'Twitter', href: undefined, icon: X },
    { name: 'Youtube', href: undefined, icon: Youtube },
    { name: 'Blogger', href: undefined, icon: Blogger },
    { name: 'Facebook', href: 'https://www.facebook.com/john/', icon: Facebook },
    // Add more as required
  ],
  icons: {
    down: ArrowDown,
  },
}
