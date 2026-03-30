import React from 'react'

import { contactFormButtonFeedback } from '../contactForm/ContactForm.css'
import {
   feedbackHeader,
   feedbackText,
   feedbackWrapper,
} from './Feedback.css'

const ErrorFeedback = ({ onClose }: { onClose: () => void }) => (
   <div className={feedbackWrapper}>
      <h3 id="contact-feedback-title" className={feedbackHeader}>
         Something went wrong
      </h3>
      <p className={feedbackText}>
         Sorry, your message couldn&apos;t be sent. Please try again later.
      </p>
      <button
         type="button"
         className={contactFormButtonFeedback}
         onClick={onClose}
      >
         Close
      </button>
   </div>
)

export default ErrorFeedback
