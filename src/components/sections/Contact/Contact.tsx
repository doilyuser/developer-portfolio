'use client'

import { useRef } from 'react'

import { ButtonOrLink } from '@/ui'
import { ConsentSection } from './ConsentSection'
import { ContactItem } from './ContactItem'
import { FormInput } from './FormInput'
import { FormTextArea } from './FormTextArea'
import { contactData } from '@/data/contact.data'
import { SubmitStatus } from '@/types/contact.types'
import { useEmailForm } from '@/hooks'
import Link from 'next/link'

const data = contactData

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const submitButtonRef = useRef<HTMLButtonElement>(null)

  const { submitStatus, errorMessage, errorMessageRef, handleSubmit, buttonText } = useEmailForm(
    formRef,
    {
      idle: data.form.button.idle,
      submitting: data.form.button.submitting,
      success: data.form.button.success,
      error: data.form.button.error,
    },
    { submitButtonRef }
  )

  return (
    <section
      id={data.id}
      className="mx-auto flex min-h-screen w-screen max-w-screen-xl flex-col px-4 lg:px-6"
      aria-labelledby={`${data.id}-heading`}
    >
      {/* Header */}
      <div id={`${data.id}-heading`} className="mt-20">
        <h2 className="text-left font-mono text-xs">
          <Link href={`/#${data.id}`}>{data.title}</Link>
        </h2>
        <p className="mb-12 text-right text-9xl text-accent underline">{data.subtitle}</p>
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2">
        <div className="flex flex-col justify-center rounded-lg bg-surface-elevated p-6 lg:p-8">
          <form className="space-y-6" ref={formRef} onSubmit={handleSubmit} aria-live="polite">
            <p id="form-description" className="sr-only">
              Fill out this form to send me a message. All fields are required.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormInput field={{ ...data.form.name, required: true }} />
              <FormInput field={{ ...data.form.email, required: true, type: 'email' }} />
            </div>
            <FormTextArea field={{ ...data.form.message, required: true }} />
            <ConsentSection consentData={data.consent} />
            {submitStatus === SubmitStatus.Error && (
              <div
                ref={errorMessageRef}
                className="rounded-lg border border-red-400 bg-red-100 px-4 py-3 text-red-700"
                role="alert"
                aria-live="assertive"
                tabIndex={-1}
              >
                <span>{errorMessage}</span>
              </div>
            )}
            <ButtonOrLink
              ref={submitButtonRef}
              as="button"
              type="submit"
              disabled={submitStatus !== SubmitStatus.Idle}
              aria-describedby={submitStatus === SubmitStatus.Error ? 'error-message' : undefined}
            >
              {buttonText}
            </ButtonOrLink>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center space-y-8 p-6 lg:p-8">
          <p className="mb-12 font-mono">{data.prelude}</p>
          <ContactItem item={{ ...data.contact.phone, hrefPrefix: 'tel:' }} />
          <ContactItem item={{ ...data.contact.email, hrefPrefix: 'mailto:' }} />
          <ContactItem
            item={{
              ...data.contact.location,
              hrefPrefix: 'http://maps.google.com/?q=',
              isExternal: true,
            }}
          />
        </div>
      </div>
    </section>
  )
}
