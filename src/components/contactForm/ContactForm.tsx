import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'

interface FormInput {
   name: string
   email: string
   message: string
}

const ContactForm: React.FC = () => {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm<FormInput>()

   useEffect(() => {
      const apiKey = import.meta.env.VITE_API_KEY
      emailjs.init(apiKey)
   }, [])

   const onSubmit = async (data: FormInput) => {
      try {
         const serviceId = import.meta.env.VITE_SERVICE_ID
         const templateId = import.meta.env.VITE_TEMPLATE_ID

         const templateParams: Record<string, string> = {
            name: data.name,
            email: data.email,
            message: data.message,
         }

         await emailjs.send(serviceId, templateId, templateParams)

         alert('Message sent successfully!')
         reset()
      } catch (error) {
         console.error('Failed to send message:', error)
         alert('Failed to send message. Please try again.')
      }
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div>
            <label htmlFor="name">Name</label>
            <input
               id="name"
               type="text"
               {...register('name', { required: 'Name is required' })}
               disabled={isSubmitting}
            />
            {errors.name && <p>{errors.name.message}</p>}
         </div>

         <div>
            <label htmlFor="email">Email</label>
            <input
               id="email"
               type="email"
               {...register('email', {
                  required: 'Email is required',
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
               })}
               disabled={isSubmitting}
            />
            {errors.email && <p>{errors.email.message}</p>}
         </div>

         <div>
            <label htmlFor="message">Message</label>
            <textarea
               id="message"
               {...register('message', { required: 'Message is required' })}
               disabled={isSubmitting}
            />
            {errors.message && <p>{errors.message.message}</p>}
         </div>

         <button type="submit" disabled={isSubmitting}>
            Send
         </button>
         {isSubmitting && <p>Submitting...</p>}
      </form>
   )
}

export default ContactForm
