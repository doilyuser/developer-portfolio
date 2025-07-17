import { IconType } from './icon'
import { ConsentData } from './consentSection.types'

export interface ContactInfoItem {
  title: string
  text: string
  href: string
  icon: IconType
  hrefPrefix?: string
  isExternal?: boolean
}

export interface ContactFormField {
  id: string
  text: string
  placeholder: string
  type?: string
  required?: boolean
  rows?: number
}

export interface SubmitButton {
  submitting: string
  success: string
  error: string
  idle: string
}

export interface ContactData {
  id: string
  name: string
  title: string
  subtitle: string
  prelude: string
  form: {
    name: ContactFormField
    email: ContactFormField
    message: ContactFormField
    button: SubmitButton
  }
  consent: ConsentData
  contact: {
    email: ContactInfoItem
    phone: ContactInfoItem
    location: ContactInfoItem
  }
}

export enum SubmitStatus {
  Idle = 'idle',
  Submitting = 'submitting',
  Success = 'success',
  Error = 'error',
}
