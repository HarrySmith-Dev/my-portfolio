import emailjs from '@emailjs/browser'

import type { FormInput } from '../components/contactForm/ContactForm'

let isEmailJsInitialized = false

const getEnvValue = (value: string | undefined, key: keyof ImportMetaEnv) => {
  if (!value) {
    throw new Error(`Missing EmailJS configuration: ${key}`)
  }
  return value
}

const ensureEmailJsInitialized = () => {
  if (!isEmailJsInitialized) {
    const apiKey = getEnvValue(import.meta.env.VITE_API_KEY, 'VITE_API_KEY')
    emailjs.init(apiKey)
    isEmailJsInitialized = true
  }
}

export const sendContactEmail = async (data: FormInput) => {
  ensureEmailJsInitialized()

  const serviceId = getEnvValue(
    import.meta.env.VITE_SERVICE_ID,
    'VITE_SERVICE_ID',
  )
  const templateId = getEnvValue(
    import.meta.env.VITE_TEMPLATE_ID,
    'VITE_TEMPLATE_ID',
  )

  const templateParams = {
    name: data.name,
    email: data.email,
    message: data.message,
  }

  try {
    return await emailjs.send(serviceId, templateId, templateParams)
  } catch (error) {
    console.error('Failed to send contact email', error)
    throw new Error('Unable to send message right now. Please try again later.')
  }
}
