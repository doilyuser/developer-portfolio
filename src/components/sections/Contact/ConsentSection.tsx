import { useMemo } from 'react'

import { ConsentLink, ConsentProps } from '@/types/consentSection.types'

/**
 * Consent component for displaying terms and conditions and privacy policy links
 */
export function ConsentSection({ consentData }: ConsentProps) {
  const { terms, privacy } = useMemo(
    () => ({
      terms: consentData.links.termsAndConditions,
      privacy: consentData.links.privacyPolicy,
    }),
    [consentData]
  )

  if (!terms.href && !privacy.href) {
    return null
  }

  const ConsentLink = ({ href, text }: ConsentLink) => {
    if (!href) return null

    const isExternal = href.startsWith('http') || href.includes('://')

    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="text-accent hover:text-accent-strong hover:underline"
      >
        {text}
      </a>
    )
  }

  return (
    <p className="text-sm">
      {consentData.text.intro + ' '}
      {terms.href && <ConsentLink href={terms.href} text={terms.text} />}
      {terms.href && privacy.href && ' ' + consentData.text.middle + ' '}
      {privacy.href && <ConsentLink href={privacy.href} text={privacy.text} />}
      {consentData.text.end}
    </p>
  )
}
