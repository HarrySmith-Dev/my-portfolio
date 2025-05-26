import emailjs from 'emailjs-com'

import type { FormInput } from '../components/contactForm/ContactForm' // adjust import path

// eslint-disable-next-line import/prefer-default-export
export const sendContactEmail = async (data: FormInput) => {
   const serviceId = import.meta.env.VITE_SERVICE_ID
   const templateId = import.meta.env.VITE_TEMPLATE_ID
   const apiKey = import.meta.env.VITE_API_KEY

   const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
   }

   return emailjs.send(serviceId, templateId, templateParams, apiKey)
}
