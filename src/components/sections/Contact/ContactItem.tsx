import { ContactInfoItem } from '@/types/contact.types'

export function ContactItem({ item }: { item: ContactInfoItem }) {
  if (!item) return null

  const href = item.hrefPrefix ? `${item.hrefPrefix}${item.href}` : item.href

  return (
    <div className="flex items-center space-x-4">
      <div className="inline-block rounded-lg bg-surface-elevated p-3" aria-hidden="true">
        <item.icon className="h-8 w-auto" />
      </div>
      <div>
        <p className="mb-1 text-lg font-bold">{item.title}</p>
        <p>
          <a
            href={href}
            target={item.isExternal ? '_blank' : undefined}
            rel={item.isExternal ? 'noopener noreferrer' : undefined}
            className="text-lg text-accent underline underline-offset-4 hover:text-accent-strong"
            aria-label={`${item.title}: action link`}
          >
            {item.text}
          </a>
        </p>
      </div>
    </div>
  )
}
