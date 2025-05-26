import React from 'react'

import {
   ContactFormButton,
   FeedbackContainer,
} from '../contactForm/ContactForm.style'
import { FeedbackHeader, FeedbackText, FeedbackWrapper } from './Feedback.style'

const ErrorFeedback = ({ onClose }: { onClose: () => void }) => (
   <FeedbackContainer>
      <FeedbackWrapper>
         <FeedbackHeader>Something went wrong</FeedbackHeader>
         <FeedbackText>
            Sorry, your message couldn&apos;t be sent. Please try again later.
         </FeedbackText>
         <ContactFormButton $isFeedback onClick={onClose}>
            Close
         </ContactFormButton>
      </FeedbackWrapper>
   </FeedbackContainer>
)

export default ErrorFeedback
