import React from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ContactIcon from '../../assets/ContactIcon.svg'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import HomeIcon from '../../assets/HomeIcon.svg'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PersonIcon from '../../assets/PersonIcon.svg'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
                    <BottomNavigationContentContainer>
                        {icon}
                        <BottomNavigationLinks to={url}>
                            {label}
                        </BottomNavigationLinks>
                    </BottomNavigationContentContainer>
                </BottomNavigationListItem>
            ))}
        </BottomNavigationLinksContainer>
    </BottomNavigationContainer>
)

export default BottomNavigation
