export interface ConsentLink {
  text: string
  href: string | undefined
}

export interface ConsentData {
  text: {
    intro: string
    middle: string
    end: string
  }
  links: {
    privacyPolicy: ConsentLink
    termsAndConditions: ConsentLink
  }
}

export interface ConsentProps {
  consentData: ConsentData
}
