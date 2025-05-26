import React, { ReactNode, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import emailjs from 'emailjs-com'

import { sendContactEmail } from '../../utils/emailService'
import ErrorFeedback from '../feedback/ErrorFeedback'
import SuccessFeedback from '../feedback/SuccessFeedback'
import {
   ContactFormBackgroundContainer,
   ContactFormButton,
   ContactFormContainer,
   ContactFormErrorText,
   ContactFormField,
   ContactFormFieldWrapper,
   ContactFormInput,
   ContactFormLabel,
   ContactFormLabelSpan,
   ContactFormTextArea,
   ContactText,
   FeedbackContainer,
   Form,
   Loader,
   LoaderContainer,
   Overlay,
} from './ContactForm.style'

export type FormInput = {
   name: string
   email: string
   message: string
}

const ContactForm: React.FC = () => {
   const [feedback, setFeedback] = useState<ReactNode | null>(null)
   const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting, isValid },
      reset,
   } = useForm<FormInput>({ mode: 'onChange' })

   useEffect(() => {
      emailjs.init(import.meta.env.VITE_API_KEY)
   }, [])

   const closeFeedback = () => {
      setIsFeedbackOpen(false)
      setFeedback(null)
   }

   const onSubmit = async (data: FormInput) => {
      try {
         sendContactEmail(data)
         setFeedback(
            <FeedbackContainer aria-modal="true">
               <SuccessFeedback onClose={closeFeedback} />
            </FeedbackContainer>
         )
         setIsFeedbackOpen(true)
         reset()
      } catch (error) {
         setFeedback(
            <FeedbackContainer aria-modal="true">
               <ErrorFeedback onClose={closeFeedback} />
            </FeedbackContainer>
         )
         setIsFeedbackOpen(true)
      }
   }

   return (
      <ContactFormBackgroundContainer>
         {isFeedbackOpen && <Overlay />}

         <ContactFormContainer
            $isOpen={isFeedbackOpen}
            aria-hidden={isSubmitting}
         >
            <ContactText>Please fill in the form below</ContactText>
            <Form
               onSubmit={handleSubmit(onSubmit)}
               aria-busy={isSubmitting}
               aria-live="polite"
            >
               <ContactFormFieldWrapper>
                  <ContactFormField>
                     <ContactFormLabel htmlFor="name">
                        Name <ContactFormLabelSpan>*</ContactFormLabelSpan>
                     </ContactFormLabel>
                     <ContactFormInput
                        id="name"
                        type="text"
                        {...register('name', {
                           required: 'Please enter your name',
                        })}
                        disabled={isSubmitting || isFeedbackOpen}
                        $hasError={!!errors.name}
                     />
                     {errors.name && (
                        <ContactFormErrorText $hasError={!!errors.name}>
                           {errors.name.message}
                        </ContactFormErrorText>
                     )}
                  </ContactFormField>

                  <ContactFormField>
                     <ContactFormLabel htmlFor="email">
                        Email <ContactFormLabelSpan>*</ContactFormLabelSpan>
                     </ContactFormLabel>
                     <ContactFormInput
                        id="email"
                        type="email"
                        {...register('email', {
                           required: 'Please enter a valid email address',
                           pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        })}
                        disabled={isSubmitting || isFeedbackOpen}
                        $hasError={!!errors.email}
                     />
                     {errors.email && (
                        <ContactFormErrorText $hasError={!!errors.email}>
                           {errors.email.message}
                        </ContactFormErrorText>
                     )}
                  </ContactFormField>
               </ContactFormFieldWrapper>

               <ContactFormField>
                  <ContactFormLabel htmlFor="message">
                     Message <ContactFormLabelSpan>*</ContactFormLabelSpan>
                  </ContactFormLabel>
                  <ContactFormTextArea
                     id="message"
                     {...register('message', {
                        required: 'Please enter a message',
                     })}
                     disabled={isSubmitting || isFeedbackOpen}
                     $hasError={!!errors.message}
                  />
                  {errors.message && (
                     <ContactFormErrorText $hasError={!!errors.message}>
                        {errors.message.message}
                     </ContactFormErrorText>
                  )}
               </ContactFormField>

               <ContactFormButton
                  type="submit"
                  disabled={isSubmitting || isFeedbackOpen || !isValid}
               >
                  Send Message
               </ContactFormButton>
            </Form>
         </ContactFormContainer>
         {!isSubmitting && (
            <Overlay>
               <LoaderContainer>
                  <Loader />
               </LoaderContainer>
            </Overlay>
         )}

         {isFeedbackOpen && feedback}
      </ContactFormBackgroundContainer>
   )
}

export default ContactForm
