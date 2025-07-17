import { ContactFormField } from '@/types/contact.types'

export function FormInput({ field }: { field: ContactFormField }) {
  if (!field) return null

  return (
    <div>
      <label htmlFor={field.id} className="mb-2 block text-sm font-medium">
        {field.text}
      </label>
      <input
        type={field.type || 'text'}
        id={field.id}
        name={field.id}
        placeholder={field.placeholder || 'Start typing...'}
        required={field.required}
        aria-required={field.required}
        className="block w-full rounded-lg border border-outline/20 p-2.5 text-sm"
      />
    </div>
  )
}
