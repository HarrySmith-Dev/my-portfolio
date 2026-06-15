import { contactFormButtonFeedback } from "../contactForm/ContactForm.css";
import { feedbackHeader, feedbackText, feedbackWrapper } from "./Feedback.css";

const SuccessFeedback = ({ onClose }: { onClose: () => void }) => (
  <div className={feedbackWrapper}>
    <h3 id="contact-feedback-title" className={feedbackHeader}>
      Speak soon!
    </h3>
    <p className={feedbackText}>
      I&apos;ve received your message and will get back to you as soon as
      possible.
    </p>
    <button
      type="button"
      className={contactFormButtonFeedback}
      onClick={onClose}
    >
      Close
    </button>
  </div>
);

export default SuccessFeedback;
