import { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import emailjs from '@emailjs/browser'
import { SubmitStatus } from '@/types/contact.types'

/**
 * Configuration options for the useEmailForm hook
 *
 * @interface UseEmailFormOptions
 * @property {React.RefObject<HTMLButtonElement | null>} [submitButtonRef] - Reference to the submit button for focus management
 */
interface UseEmailFormOptions {
  submitButtonRef?: React.RefObject<HTMLButtonElement | null>
}

/**
 * Button text options for different form states
 *
 * @interface ButtonTextOptions
 * @property {string} idle - Text to display when the form is idle
 * @property {string} submitting - Text to display when the form is submitting
 * @property {string} success - Text to display when the form submission is successful
 * @property {string} error - Text to display when the form submission fails
 */
interface ButtonTextOptions {
  idle: string
  submitting: string
  success: string
  error: string
}

/**
 * Return type for the useEmailForm hook
 *
 * @interface UseEmailFormReturn
 * @property {SubmitStatus} submitStatus - Current status of the form submission
 * @property {string} errorMessage - Error message to display if submission fails
 * @property {React.RefObject<HTMLDivElement | null>} errorMessageRef - Reference to the error message element for focus management
 * @property {(e: React.FormEvent<HTMLFormElement>) => Promise<void>} handleSubmit - Form submission handler
 * @property {string} buttonText - Text to display on the submit button based on current status
 */
interface UseEmailFormReturn {
  submitStatus: SubmitStatus
  errorMessage: string
  errorMessageRef: React.RefObject<HTMLDivElement | null>
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  buttonText: string
}

/**
 * A hook that manages email form submission using EmailJS
 *
 * This hook handles EmailJS initialization, form submission state,
 * and provides handlers for form submission. It also manages error states
 * and provides appropriate button text based on the current submission status.
 *
 * @param {React.RefObject<HTMLFormElement | null>} formRef - Reference to the form element
 * @param {ButtonTextOptions} buttonTextOptions - Text options for the submit button in different states
 * @param {UseEmailFormOptions} options - Additional configuration options
 * @returns {UseEmailFormReturn} Object containing form state and handlers
 *
 * @example
 * // Basic usage
 * const formRef = useRef<HTMLFormElement>(null);
 * const submitButtonRef = useRef<HTMLButtonElement>(null);
 *
 * const { submitStatus, errorMessage, errorMessageRef, handleSubmit, buttonText } = useEmailForm(
 *   formRef,
 *   {
 *     idle: 'Send Message',
 *     submitting: 'Sending...',
 *     success: 'Message Sent!',
 *     error: 'Try Again'
 *   },
 *   { submitButtonRef }
 * );
 */
export function useEmailForm(
  formRef: React.RefObject<HTMLFormElement | null>,
  buttonTextOptions: ButtonTextOptions,
  options: UseEmailFormOptions = {}
): UseEmailFormReturn {
  const { submitButtonRef } = options

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(SubmitStatus.Idle)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const errorMessageRef = useRef<HTMLDivElement | null>(null)

  // Initialize EmailJS and check environment variables
  useEffect(() => {
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus(SubmitStatus.Error)
      console.error('EmailJS environment variables are not defined')
      setErrorMessage('Email service is down, please contact me directly.')
      return
    }

    try {
      emailjs.init(publicKey)
    } catch (error) {
      setSubmitStatus(SubmitStatus.Error)
      console.error('Failed to initialize EmailJS:', error)
      setErrorMessage('Email service is down, please contact me directly.')
    }
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!formRef.current) {
        setSubmitStatus(SubmitStatus.Error)
        setErrorMessage('There was a problem with your message. Check all fields and try again.')
        return
      }

      setSubmitStatus(SubmitStatus.Submitting)

      try {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          formRef.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY as string
        )

        setSubmitStatus(SubmitStatus.Success)
        if (submitButtonRef?.current) {
          submitButtonRef.current.focus()
        }

        formRef.current.reset()
      } catch (error: unknown) {
        setSubmitStatus(SubmitStatus.Error)
        console.error('EmailJS error:', error)
        setErrorMessage('An unexpected error occurred. Please try again later.')
        if (errorMessageRef.current) {
          errorMessageRef.current.focus()
        }
      }
    },
    [formRef, submitButtonRef]
  )

  const buttonText = useMemo(() => {
    switch (submitStatus) {
      case SubmitStatus.Submitting:
        return buttonTextOptions.submitting
      case SubmitStatus.Success:
        return buttonTextOptions.success
      case SubmitStatus.Error:
        return buttonTextOptions.error
      default:
        return buttonTextOptions.idle
    }
  }, [submitStatus, buttonTextOptions])

  return {
    submitStatus,
    errorMessage,
    errorMessageRef,
    handleSubmit,
    buttonText,
  }
}
