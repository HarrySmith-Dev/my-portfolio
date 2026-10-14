import emailjs from '@emailjs/browser'

import type { FormInput } from '@/types/SharedTypes'

const getEnvValue = (value: string | undefined, key: keyof ImportMetaEnv) => {
  if (!value) {
    throw new Error(`Missing EmailJS configuration: ${key}`)
  }
  return value
}

export const sendContactEmail = async ({ name, email, message }: FormInput) => {
  const publicKey = getEnvValue(import.meta.env.VITE_API_KEY, 'VITE_API_KEY')
  const serviceId = getEnvValue(
    import.meta.env.VITE_SERVICE_ID,
    'VITE_SERVICE_ID',
  )
  const templateId = getEnvValue(
    import.meta.env.VITE_TEMPLATE_ID,
    'VITE_TEMPLATE_ID',
  )

  try {
    return await emailjs.send(
      serviceId,
      templateId,
      { name, email, message },
      { publicKey },
    )
  } catch (error) {
    throw new Error('Unable to send message right now.', { cause: error })
  }
}
