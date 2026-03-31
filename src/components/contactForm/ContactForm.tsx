import React, { type ReactNode, useState } from "react";
import { useForm } from "react-hook-form";

import { sendContactEmail } from "../../utils/emailService";
import ErrorFeedback from "../feedback/ErrorFeedback";
import SuccessFeedback from "../feedback/SuccessFeedback";
import {
  contactFormBackgroundContainer,
  contactFormButton,
  contactFormContainer,
  contactFormContainerInactive,
  contactFormErrorTextActive,
  contactFormField,
  contactFormFieldWrapper,
  contactFormInput,
  contactFormInputError,
  contactFormLabel,
  contactFormLabelSpan,
  contactFormTextArea,
  contactFormTextAreaError,
  contactText,
  feedbackContainer,
  form,
  loader,
  loaderContainer,
  overlay,
} from "./ContactForm.css";

export type FormInput = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [feedback, setFeedback] = useState<ReactNode | null>(null);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<FormInput>({ mode: "onChange" });

  const closeFeedback = () => {
    setIsFeedbackOpen(false);
    setFeedback(null);
  };

  const onSubmit = async (data: FormInput) => {
    try {
      await sendContactEmail(data);
      setFeedback(
        <div
          className={feedbackContainer}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-feedback-title"
        >
          <SuccessFeedback onClose={closeFeedback} />
        </div>,
      );
      setIsFeedbackOpen(true);
      reset();
    } catch (error) {
      console.error("Error sending contact email:", error);
      setFeedback(
        <div
          className={feedbackContainer}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-feedback-title"
        >
          <ErrorFeedback onClose={closeFeedback} />
        </div>,
      );
      setIsFeedbackOpen(true);
    }
  };

  return (
    <article className={contactFormBackgroundContainer}>
      {isFeedbackOpen && <div className={overlay} />}

      <section
        className={
          isFeedbackOpen ? contactFormContainerInactive : contactFormContainer
        }
        aria-hidden={isSubmitting}
      >
        <p className={contactText}>Please fill in the form below</p>
        <form
          className={form}
          onSubmit={handleSubmit(onSubmit)}
          aria-busy={isSubmitting}
          aria-live="polite"
        >
          <div className={contactFormFieldWrapper}>
            <div className={contactFormField}>
              <label className={contactFormLabel} htmlFor="name">
                Name <span className={contactFormLabelSpan}>*</span>
              </label>
              <input
                className={
                  errors.name ? contactFormInputError : contactFormInput
                }
                id="name"
                type="text"
                {...register("name", {
                  required: "Please enter your name",
                })}
                disabled={isSubmitting || isFeedbackOpen}
              />
              {errors.name && (
                <p className={contactFormErrorTextActive}>
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className={contactFormField}>
              <label className={contactFormLabel} htmlFor="email">
                Email <span className={contactFormLabelSpan}>*</span>
              </label>
              <input
                className={
                  errors.email ? contactFormInputError : contactFormInput
                }
                id="email"
                type="email"
                {...register("email", {
                  required: "Please enter a valid email address",
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                disabled={isSubmitting || isFeedbackOpen}
              />
              {errors.email && (
                <p className={contactFormErrorTextActive}>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className={contactFormField}>
            <label className={contactFormLabel} htmlFor="message">
              Message <span className={contactFormLabelSpan}>*</span>
            </label>
            <textarea
              className={
                errors.message ? contactFormTextAreaError : contactFormTextArea
              }
              id="message"
              {...register("message", {
                required: "Please enter a message",
              })}
              disabled={isSubmitting || isFeedbackOpen}
            />
            {errors.message && (
              <p className={contactFormErrorTextActive}>
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            className={contactFormButton}
            type="submit"
            disabled={isSubmitting || isFeedbackOpen || !isValid}
          >
            Send Message
          </button>
        </form>
      </section>
      {isSubmitting && (
        <div className={overlay}>
          <div className={loaderContainer}>
            <div className={loader} />
          </div>
        </div>
      )}

      {isFeedbackOpen && feedback}
    </article>
  );
};

export default ContactForm;
