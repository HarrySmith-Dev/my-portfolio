import { style } from '@vanilla-extract/css'

import { colors } from '../../styles/shared'
import { desktopBreakpoint, tabletBreakpoint } from '../../styles/global.css'

export const aboutCardBackgroundContainer = style({
   margin: '0 20px',
})

export const aboutCardContainer = style({
   backgroundColor: colors.white1,
   borderRadius: '20px',
   boxShadow: `0 20px 25px -5px ${colors.white3}`,
   width: '100%',
   marginBottom: '100px',
   '@media': {
      [desktopBreakpoint]: {
         maxWidth: '1024px',
         margin: '0 auto 100px',
      },
   },
})

export const aboutCardContentWrapper = style({
   padding: '50px',
})

export const aboutCardHeading = style({
   fontSize: '35px',
   fontFamily: 'Jost, sans-serif',
   lineHeight: 'normal',
   letterSpacing: 0,
   fontWeight: 400,
   margin: '0 0 20px 0',
   '@media': {
      [tabletBreakpoint]: {
         fontSize: '50px',
      },
   },
})

const aboutCardTextBase = style({
   fontFamily: 'Jost, sans-serif',
   color: colors.gray2,
   lineHeight: 'normal',
   letterSpacing: 0,
   margin: '0 0 20px 0',
})

export const aboutCardText = style([
   aboutCardTextBase,
   {
      fontSize: '18px',
      '@media': {
         [tabletBreakpoint]: {
            fontSize: '20px',
         },
      },
   },
])

export const aboutCardSubHeadingText = style([
   aboutCardTextBase,
   {
      fontSize: '20px',
      '@media': {
         [tabletBreakpoint]: {
            fontSize: '24px',
         },
      },
   },
])

export const aboutCardSpan = style({
   borderBottom: `3px solid ${colors.lightBlue}`,
})

export const aboutCardLink = style({
   fontSize: '18px',
   fontFamily: 'Jost, sans-serif',
   color: colors.lightBlue,
   lineHeight: 'normal',
   letterSpacing: 0,
   margin: 0,
   textDecoration: 'none',
   selectors: {
      '&:hover': {
         textDecoration: 'underline',
      },
   },
   '@media': {
      [tabletBreakpoint]: {
         fontSize: '20px',
      },
   },
})
