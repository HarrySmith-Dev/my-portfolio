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
   const [open, setOpen] = useState(false)

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm<FormInput>()

   useEffect(() => {
      emailjs.init(import.meta.env.VITE_API_KEY)
   }, [])

   const closeFeedback = () => {
      setOpen(false)
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
         setOpen(true)
         reset()
      } catch (error) {
         console.error('Failed to send message:', error)
         setFeedback('An unexpected error occurred. Please try again.')
      }
   }

   // Test function to simulate feedback
   const testFeedback = () => {
      setFeedback(
         <FeedbackContainer>
            <FeedbackWrapper>
               <FeedbackHeader>Test Feedback</FeedbackHeader>
               <FeedbackText>
                  This is a simulated feedback message for testing purposes.
               </FeedbackText>
               <ContactFormButton onClick={closeFeedback} $isFeedback>
                  Close
               </ContactFormButton>
            </FeedbackWrapper>
         </FeedbackContainer>
      )
      setOpen(true)
   }

   return (
      <ContactFormBackgroundContainer>
         {open && <FeedbackOverlay />}

         <ContactFormContainer $isOpen={open}>
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
                        disabled={isSubmitting || open}
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
                        disabled={isSubmitting || open}
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
                     disabled={isSubmitting || open}
                     $hasError={!!errors.message}
                  />
                  {errors.message && (
                     <ContactFormErrorText $hasError={!!errors.message}>
                        {errors.message.message}
                     </ContactFormErrorText>
                  )}
               </ContactFormField>

               <ContactFormButton type="submit" disabled={isSubmitting || open}>
                  Send Message
               </ContactFormButton>
               {isSubmitting && <p>Submitting...</p>}
            </Form>

            <button
               type="button"
               style={{
                  marginTop: '20px',
                  padding: '10px',
                  backgroundColor: 'blue',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
               }}
               onClick={testFeedback}
            >
               Test Feedback
            </button>
         </ContactFormContainer>

         {open && feedback}
      </ContactFormBackgroundContainer>
   )
}

export default ContactForm
