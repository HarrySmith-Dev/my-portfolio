import ContactForm from '../../components/contactForm/ContactForm'
import { SITE_URL } from '../../constants/site'

const Contact = () => (
  <>
    <title>Contact | Harry Smith</title>
    <link rel="canonical" href={`${SITE_URL}/contact`} />
    <ContactForm />
  </>
)

export default Contact
