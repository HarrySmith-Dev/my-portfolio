import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  buttonPrimary,
  card,
  cardBody,
  visuallyHidden,
} from '@/styles/shared.css'
import type { FormInput } from '@/types/SharedTypes'
import { sendContactEmail } from '@/utils/emailService'
import FeedbackMessage from '@/components/feedback/FeedbackMessage'
import {
  contactFormCard,
  contactFormErrorText,
  contactFormField,
  contactFormFieldWrapper,
  contactFormInput,
  contactFormLabel,
  contactFormLabelSpan,
  contactFormTextArea,
  contactRequiredNote,
  feedbackDialog,
  fieldset,
  loader,
  overlay,
} from './ContactForm.css'

const feedbackContent = {
  success: {
    title: 'Speak soon!',
    message:
      "I've received your message and will get back to you as soon as possible.",
  },
  error: {
    title: 'Something went wrong',
    message: "Sorry, your message couldn't be sent. Please try again later.",
  },
}

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
    if (data.website) {
      setFeedback('success')
      reset()
      return
    }

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
    <>
      <section className={`${card} ${cardBody} ${contactFormCard}`}>
        <p className={contactRequiredNote}>
          Fields marked <RequiredMarker /> are required.
        </p>
        <form
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
                    maxLength: {
                      value: 100,
                      message: 'Please keep your name under 100 characters',
                    },
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
                    maxLength: {
                      value: 254,
                      message: 'Please enter a valid email address',
                    },
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
                  maxLength: {
                    value: 5000,
                    message: 'Please keep your message under 5,000 characters',
                  },
                })}
              />
              {errors.message && (
                <p id="message-error" className={contactFormErrorText}>
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className={visuallyHidden} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register('website')}
              />
            </div>

            <button className={buttonPrimary} type="submit">
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
        className={`${card} ${feedbackDialog}`}
        aria-labelledby="contact-feedback-title"
        onClose={onDialogClose}
      >
        {feedback && (
          <FeedbackMessage
            {...feedbackContent[feedback]}
            onClose={closeFeedback}
          />
        )}
      </dialog>
    </>
  )
}

export default ContactForm
