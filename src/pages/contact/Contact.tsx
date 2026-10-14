import ContactForm from '@/components/contactForm/ContactForm'
import { SITE_URL } from '@/constants/site'
import { bodyText, pageContainer, pageHeading } from '@/styles/shared.css'

const Contact = () => (
  <div className={pageContainer}>
    <title>Contact | Harry Smith</title>
    <link rel="canonical" href={`${SITE_URL}/contact`} />
    <h1 className={pageHeading}>Contact</h1>
    <p className={bodyText}>
      Please fill in the form below and I&apos;ll get back to you as soon as I
      can.
    </p>
    <ContactForm />
  </div>
)

export default Contact
