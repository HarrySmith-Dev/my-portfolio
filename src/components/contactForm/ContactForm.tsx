import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import emailjs from 'emailjs-com'

import {
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
   Form,
} from './ContactForm.style'

type FormInput = {
   name: string
   email: string
   message: string
}

const ContactForm: React.FC = () => {
   const [feedback, setFeedback] = useState<string | null>('')

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm<FormInput>()

   useEffect(() => {
      emailjs.init(import.meta.env.VITE_API_KEY)
   }, [])

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

         setFeedback('Message sent successfully!')
         reset()
      } catch (error) {
         console.error('Failed to send message:', error)
         setFeedback('An unexpected error occured. Please try again.')
      }
   }

   return (
      <ContactFormContainer>
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
                     disabled={isSubmitting}
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
                     disabled={isSubmitting}
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
                  disabled={isSubmitting}
                  $hasError={!!errors.message}
               />
               {errors.message && (
                  <ContactFormErrorText $hasError={!!errors.message}>
                     {errors.message.message}
                  </ContactFormErrorText>
               )}
            </ContactFormField>

            <ContactFormButton type="submit" disabled={isSubmitting}>
               Send Message
            </ContactFormButton>
            {isSubmitting && <p>Submitting...</p>}
            {feedback && <p aria-live="polite">{feedback}</p>}
         </Form>
      </ContactFormContainer>
   )
}

export default ContactForm
