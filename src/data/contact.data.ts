import { FaEnvelope, FaPhone, FaMap } from 'react-icons/fa'
import { ContactData } from '@/types/contact.types'

export const contactData: ContactData = {
  name: 'John Doe',
  title: '➜ CONTACT',
  subtitle: 'Get in touch',
  prelude: `Don't be shy, gizz a bell.`,
  form: {
    name: {
      id: 'name',
      text: 'Name',
      placeholder: 'Your name...',
    },
    email: {
      id: 'email',
      text: 'Email',
      placeholder: 'Your email...',
    },
    message: {
      id: 'message',
      text: 'Message',
      placeholder: 'Your message...',
    },
    button: {
      submitting: 'Sending...',
      success: 'Sent!',
      error: 'Error',
      idle: 'Send email',
    },
  },
  consent: {
    text: {
      intro: 'By submitting this form you agree to the',
      middle: 'and the',
      end: '.',
    },
    links: {
      privacyPolicy: {
        text: 'privacy policy',
        href: undefined,
      },
      termsAndConditions: {
        text: 'terms and conditions',
        href: undefined,
      },
    },
  },
  contact: {
    email: {
      title: 'Email me',
      text: 'john@su.edu',
      href: 'john@su.edu',
      icon: FaEnvelope,
    },
    phone: {
      title: 'Call me',
      text: '123-456-7890',
      href: '+1234567890',
      icon: FaPhone,
    },
    location: {
      title: 'Find me',
      text: 'Fitzroy North, Melbourne, VIC - 3068',
      href: 'Fitzroy North VIC 3068',
      icon: FaMap,
    },
  },
}
