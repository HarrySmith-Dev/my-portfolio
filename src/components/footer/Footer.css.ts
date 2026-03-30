import { style } from '@vanilla-extract/css'

import { colors } from '../../styles/shared'
import { desktopBreakpoint, tabletBreakpoint } from '../../styles/global.css'

export const footerBackgroundContainer = style({
   margin: '0 20px 50px',
})

export const footerContainer = style({
   borderTop: `2px solid ${colors.white3}`,
   margin: '0 auto',
   width: '100%',
   position: 'sticky',
   bottom: 0,
   '@media': {
      [desktopBreakpoint]: {
         maxWidth: '1024px',
      },
   },
})

export const footerTextContainer = style({
   display: 'flex',
   margin: '30px 0 100px',
})

export const footerText = style({
   fontFamily: 'Jost, sans-serif',
   fontSize: '16px',
   margin: 0,
   color: colors.gray2,
   selectors: {
      '&:last-child': {
         marginLeft: 'auto',
      },
   },
   '@media': {
      [tabletBreakpoint]: {
         fontSize: '18px',
      },
   },
})

const footerLinkBase = style({
   color: colors.lightBlue,
   textDecoration: 'none',
   margin: 0,
   selectors: {
      '&:hover': {
         opacity: 0.5,
      },
   },
})

export const footerLink = footerLinkBase

export const footerLinkPurple = style([
   footerLinkBase,
   {
      color: colors.purple,
   },
])
