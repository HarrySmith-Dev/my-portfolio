import React from 'react'

import {
   ContactFormButton,
   FeedbackContainer,
} from '../contactForm/ContactForm.style'
import { FeedbackHeader, FeedbackText, FeedbackWrapper } from './Feedback.style'

const SuccessFeedback = ({ onClose }: { onClose: () => void }) => (
   <FeedbackContainer>
      <FeedbackWrapper>
         <FeedbackHeader>Speak soon!</FeedbackHeader>
         <FeedbackText>
            I&apos;ve received your message and will get back to you as soon as
            possible.
         </FeedbackText>
         <ContactFormButton $isFeedback onClick={onClose}>
            Close
         </ContactFormButton>
      </FeedbackWrapper>
   </FeedbackContainer>
)

export default SuccessFeedback
