import React from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ProjectsIcon from '../../assets/ProjectsIcon.svg'
import {
   ComingSoonContainer,
   ComingSoonIcon,
   ComingSoonTitle,
} from './ComingSoon.style'

const ComingSoon = () => (
   <ComingSoonContainer>
      <ComingSoonIcon src={ProjectsIcon}></ComingSoonIcon>
      <ComingSoonTitle>
         Coming soon! {window.location.pathname === '/about' && '/About'}
         {window.location.pathname === '/projects' && '/Projects'}
         {window.location.pathname === '/contact' && '/Contact'}
      </ComingSoonTitle>
   </ComingSoonContainer>
)

export default ComingSoon
