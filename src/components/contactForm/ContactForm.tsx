import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { buttonPrimary, visuallyHidden } from '@/styles/shared.css'
import type { FormInput } from '@/types/SharedTypes'
import { sendContactEmail } from '@/utils/emailService'
import ErrorFeedback from '@/components/feedback/ErrorFeedback'
import SuccessFeedback from '@/components/feedback/SuccessFeedback'
import {
  contactFormButton,
  contactFormContainer,
  contactFormErrorText,
  contactFormField,
  contactFormFieldWrapper,
  contactFormInput,
  contactFormLabel,
  contactFormLabelSpan,
  contactFormTextArea,
  contactRequiredNote,
  contactText,
  feedbackDialog,
  fieldset,
  form,
  loader,
  overlay,
} from './ContactForm.css'

const RequiredMarker = () => (
  <span className={contactFormLabelSpan} aria-hidden="true">
    *
  </span>
)

const ContactForm = () => {
  const [feedback, setFeedback] = useState<'success' | 'error' | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setFocus,
  } = useForm<FormInput>({ mode: 'onTouched' })

  useEffect(() => {
    if (feedback) dialogRef.current?.showModal()
  }, [feedback])

  const onDialogClose = () => {
    setFeedback(null)
    setFocus('name')
  }

  const closeFeedback = () => dialogRef.current?.close()

  const errorProps = (field: keyof FormInput) => ({
    'aria-invalid': Boolean(errors[field]),
    'aria-describedby': errors[field] ? `${field}-error` : undefined,
  })

  const onSubmit = async (data: FormInput) => {
    try {
      await sendContactEmail(data)
      setFeedback('success')
      reset()
    } catch (error) {
      console.error('Error sending contact email:', error)
      setFeedback('error')
    }
  }

  return (
    <article>
      <section className={contactFormContainer}>
        <h1 className={contactText}>Please fill in the form below</h1>
        <p className={contactRequiredNote}>
          Fields marked <RequiredMarker /> are required.
        </p>
        <form
          className={form}
          onSubmit={handleSubmit(onSubmit)}
          aria-busy={isSubmitting}
          noValidate
        >
          <fieldset className={fieldset} disabled={isSubmitting}>
            <div className={contactFormFieldWrapper}>
              <div className={contactFormField}>
                <label className={contactFormLabel} htmlFor="name">
                  Name <RequiredMarker />
                </label>
                <input
                  className={contactFormInput}
                  id="name"
                  type="text"
                  autoComplete="name"
                  aria-required="true"
                  {...errorProps('name')}
                  {...register('name', {
                    required: 'Please enter your name',
                  })}
                />
                {errors.name && (
                  <p id="name-error" className={contactFormErrorText}>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className={contactFormField}>
                <label className={contactFormLabel} htmlFor="email">
                  Email <RequiredMarker />
                </label>
                <input
                  className={contactFormInput}
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-required="true"
                  {...errorProps('email')}
                  {...register('email', {
                    required: 'Please enter your email address',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p id="email-error" className={contactFormErrorText}>
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className={contactFormField}>
              <label className={contactFormLabel} htmlFor="message">
                Message <RequiredMarker />
              </label>
              <textarea
                className={contactFormTextArea}
                id="message"
                aria-required="true"
                {...errorProps('message')}
                {...register('message', {
                  required: 'Please enter a message',
                })}
              />
              {errors.message && (
                <p id="message-error" className={contactFormErrorText}>
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              className={`${buttonPrimary} ${contactFormButton}`}
              type="submit"
            >
              Send Message
            </button>
          </fieldset>
        </form>
      </section>

      <p className={visuallyHidden} role="status">
        {isSubmitting ? 'Sending your message…' : ''}
      </p>
      {isSubmitting && (
        <div className={overlay}>
          <div className={loader} />
        </div>
      )}

      <dialog
        ref={dialogRef}
        className={feedbackDialog}
        aria-labelledby="contact-feedback-title"
        onClose={onDialogClose}
      >
        {feedback === 'success' && <SuccessFeedback onClose={closeFeedback} />}
        {feedback === 'error' && <ErrorFeedback onClose={closeFeedback} />}
      </dialog>
    </article>
  )
}

export default ContactForm
