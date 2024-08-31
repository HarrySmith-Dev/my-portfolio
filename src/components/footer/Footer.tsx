import React from 'react'

import {
   FooterBackgroundContainer,
   FooterContainer,
   FooterLinks,
   FooterText,
   FooterTextContainer,
} from './Footer.style'

const Footer = () => (
   <FooterBackgroundContainer>
      <FooterContainer>
         <FooterTextContainer>
            <FooterText>&copy; 2024 Harry Smith.</FooterText>
            <FooterText>
               Built with{' '}
               <FooterLinks
                  target="_blank"
                  href="https://vitejs.dev/"
                  $isPurple
               >
                  Vite
               </FooterLinks>{' '}
               and{' '}
               <FooterLinks target="_blank" href="https://react.dev/">
                  React
               </FooterLinks>
               .
            </FooterText>
         </FooterTextContainer>
      </FooterContainer>
   </FooterBackgroundContainer>
)

export default Footer
