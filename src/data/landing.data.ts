import { contactData } from '../data/contact.data'
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaBlogger, FaFacebook } from 'react-icons/fa'
import { IoMdArrowDown } from 'react-icons/io'

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
    { name: 'GitHub', href: 'https://github.com/john', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/john/', icon: FaLinkedin },
    { name: 'Twitter', href: undefined, icon: FaTwitter },
    { name: 'Youtube', href: undefined, icon: FaYoutube },
    { name: 'Blogger', href: undefined, icon: FaBlogger },
    { name: 'Facebook', href: 'https://www.facebook.com/john/', icon: FaFacebook },
  ],
  icons: {
    down: IoMdArrowDown,
  },
}
