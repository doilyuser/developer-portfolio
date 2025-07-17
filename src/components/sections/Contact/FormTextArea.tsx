import { ContactFormField } from '@/types/contact.types'

export function FormTextArea({ field }: { field: ContactFormField }) {
  if (!field) return null

  return (
    <div>
      <label htmlFor={field.id} className="mb-2 block text-sm font-medium">
        {field.text}
      </label>
      <textarea
        id={field.id}
        name={field.id}
        rows={field.rows || 6}
        placeholder={field.placeholder || 'Start typing...'}
        required={field.required}
        aria-required={field.required}
        className="block w-full rounded-lg border border-outline/20 p-2.5 text-sm"
      />
    </div>
  )
}
