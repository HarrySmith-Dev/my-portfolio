import { buttonPrimary } from '../../styles/shared.css'
import { feedbackHeader, feedbackText, feedbackWrapper } from './Feedback.css'

const SuccessFeedback = ({ onClose }: { onClose: () => void }) => (
  <div className={feedbackWrapper}>
    <h2 id="contact-feedback-title" className={feedbackHeader}>
      Speak soon!
    </h2>
    <p className={feedbackText}>
      I&apos;ve received your message and will get back to you as soon as
      possible.
    </p>
    <button type="button" className={buttonPrimary} onClick={onClose}>
      Close
    </button>
  </div>
)

export default SuccessFeedback
