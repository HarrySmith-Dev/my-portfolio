import { buttonPrimary } from '../../styles/shared.css'
import { feedbackHeader, feedbackText, feedbackWrapper } from './Feedback.css'

const ErrorFeedback = ({ onClose }: { onClose: () => void }) => (
  <div className={feedbackWrapper}>
    <h2 id="contact-feedback-title" className={feedbackHeader}>
      Something went wrong
    </h2>
    <p className={feedbackText}>
      Sorry, your message couldn&apos;t be sent. Please try again later.
    </p>
    <button type="button" className={buttonPrimary} onClick={onClose}>
      Close
    </button>
  </div>
)

export default ErrorFeedback
