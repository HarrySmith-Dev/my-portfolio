import React from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import LogoIcon from '../../assets/NavImage.png'
import { NavigationLinksData } from '../types/SharedTypes'
import {
   NavigationContainer,
   NavigationContentWrapper,
   NavigationItemsContainer,
   NavigationLabel,
   NavigationLinks,
   NavigationLinksContainer,
   NavigationLinksWrapper,
   NavigationLinkText,
   NavigationLinkTextContainer,
   NavigationLogo,
   NavigationLogoContainer,
} from './TopNavigation.style'

const navigationLinksData: NavigationLinksData[] = [
   {
      url: '/',
      label: 'Home',
   },
   {
      url: '/about',
      label: 'About',
   },
   {
      url: '/projects',
      label: 'Projects',
   },
   {
      url: '/contact',
      label: 'Contact',
   },
]

const TopNavigation = () => (
   <header>
      <NavigationContainer>
         <NavigationContentWrapper>
            <NavigationLogoContainer to="/">
               <NavigationLogo src={LogoIcon} />
            </NavigationLogoContainer>
            <NavigationItemsContainer>
               <NavigationLinkTextContainer to="/">
                  <NavigationLinkText>Harry Smith</NavigationLinkText>
               </NavigationLinkTextContainer>
               <NavigationLinksContainer>
                  {navigationLinksData.map(({ url, label }) => (
                     <NavigationLinksWrapper key={`${label}-top-navigation`}>
                        <NavigationLinks to={url}>
                           <NavigationLabel>{label}</NavigationLabel>
                        </NavigationLinks>
                     </NavigationLinksWrapper>
                  ))}
               </NavigationLinksContainer>
            </NavigationItemsContainer>
         </NavigationContentWrapper>
      </NavigationContainer>
   </header>
)

export default TopNavigation
