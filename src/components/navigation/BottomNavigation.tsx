import React from 'react'

import ContactIcon from '../../assets/ContactIcon.svg'
import HomeIcon from '../../assets/HomeIcon.svg'
import PersonIcon from '../../assets/PersonIcon.svg'
import ProjectsIcon from '../../assets/ProjectsIcon.svg'
import { NavigationLinksData } from '../types/SharedTypes'
import {
   BottomNavigationContainer,
   BottomNavigationContentContainer,
   BottomNavigationIcon,
   BottomNavigationLinks,
   BottomNavigationLinksContainer,
   BottomNavigationListItem,
} from './BottomNavigation.style'

const bottomNavigationLinksData: NavigationLinksData[] = [
   {
      url: '/',
      label: 'Home',
      icon: <BottomNavigationIcon src={HomeIcon} />,
   },
   {
      url: '/about',
      label: 'About',
      icon: <BottomNavigationIcon src={PersonIcon} />,
   },
   {
      url: '/projects',
      label: 'Projects',
      icon: <BottomNavigationIcon src={ProjectsIcon} />,
   },
   {
      url: '/contact',
      label: 'Contact',
      icon: <BottomNavigationIcon src={ContactIcon} />,
   },
]

const BottomNavigation = () => (
   <BottomNavigationContainer>
      <BottomNavigationLinksContainer>
         {bottomNavigationLinksData.map(({ url, label, icon }) => (
            <BottomNavigationListItem key={`${label}-bottom-navigation`}>
               <BottomNavigationContentContainer to={url}>
                  {icon}
                  <BottomNavigationLinks>{label}</BottomNavigationLinks>
               </BottomNavigationContentContainer>
            </BottomNavigationListItem>
         ))}
      </BottomNavigationLinksContainer>
   </BottomNavigationContainer>
)

export default BottomNavigation
