import React, { ReactNode, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import emailjs from 'emailjs-com'

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
   FeedbackHeader,
   FeedbackOverlay,
   FeedbackText,
   FeedbackWrapper,
   Form,
} from './ContactForm.style'

type FormInput = {
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
         const serviceId = import.meta.env.VITE_SERVICE_ID
         const templateId = import.meta.env.VITE_TEMPLATE_ID
         const apiKey = import.meta.env.VITE_API_KEY

         const templateParams: Record<string, string> = {
            name: data.name,
            email: data.email,
            message: data.message,
         }

         await emailjs.send(serviceId, templateId, templateParams, apiKey)

         setFeedback(
            <FeedbackContainer>
               <FeedbackWrapper>
                  <FeedbackHeader>Speak soon!</FeedbackHeader>
                  <FeedbackText>
                     I&apos;ve received your message and will get back to you as
                     soon as possible.
                  </FeedbackText>
                  <ContactFormButton
                     $isFeedback
                     onClick={() => closeFeedback()}
                  >
                     Close
                  </ContactFormButton>
               </FeedbackWrapper>
            </FeedbackContainer>
         )
         setIsFeedbackOpen(true)
         reset()
      } catch (error) {
         console.error('Failed to send message:', error)
         setFeedback(
            <FeedbackContainer>
               <FeedbackWrapper>
                  <FeedbackHeader>Something went wrong</FeedbackHeader>
                  <FeedbackText>
                     Sorry, your message couldn’t be sent. Please try again
                     later or email me directly.
                  </FeedbackText>
                  <ContactFormButton $isFeedback onClick={closeFeedback}>
                     Close
                  </ContactFormButton>
               </FeedbackWrapper>
            </FeedbackContainer>
         )
      }
   }

   return (
      <ContactFormBackgroundContainer>
         {isFeedbackOpen && <FeedbackOverlay />}

         <ContactFormContainer $isOpen={isFeedbackOpen}>
            <ContactText>Please fill in the form below</ContactText>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
               {isSubmitting && <p>Submitting...</p>}
            </Form>
         </ContactFormContainer>

         {isFeedbackOpen && feedback}
      </ContactFormBackgroundContainer>
   )
}

export default ContactForm
