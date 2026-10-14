import {
  bodyText,
  buttonPrimary,
  cardBody,
  cardTitle,
} from '@/styles/shared.css'
import { feedbackWrapper } from './Feedback.css'

type FeedbackMessageProps = {
  title: string
  message: string
  onClose: () => void
}

const FeedbackMessage = ({ title, message, onClose }: FeedbackMessageProps) => (
  <div className={`${cardBody} ${feedbackWrapper}`}>
    <h2 id="contact-feedback-title" className={cardTitle}>
      {title}
    </h2>
    <p className={bodyText}>{message}</p>
    <button type="button" className={buttonPrimary} onClick={onClose}>
      Close
    </button>
  </div>
)

export default FeedbackMessage
