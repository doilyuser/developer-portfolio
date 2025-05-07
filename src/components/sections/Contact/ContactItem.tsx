import { ContactInfoItem } from '@/types/contact.types'

export function ContactItem({ item }: { item: ContactInfoItem }) {
  if (!item) return null

  const href = item.hrefPrefix ? `${item.hrefPrefix}${item.href}` : item.href

  return (
    <div className="flex items-center space-x-4">
      <div className="inline-block rounded-lg bg-surface-elevated p-3" aria-hidden="true">
        <item.icon className="h-8 w-8" />
      </div>
      <div>
        <p className="mb-1 font-bold text-lg">{item.title}</p>
        <p>
          <a
            href={href}
            target={item.isExternal ? '_blank' : undefined}
            rel={item.isExternal ? 'noopener noreferrer' : undefined}
            className="underline underline-offset-4 text-accent hover:text-accent-strong text-lg"
            aria-label={`${item.title}: action link`}
          >
            {item.text}
          </a>
        </p>
      </div>
    </div>
  )
}
