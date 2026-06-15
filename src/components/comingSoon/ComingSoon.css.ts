import { style } from '@vanilla-extract/css'

import { typography } from '../../styles/shared'
import { tabletBreakpoint } from '../../styles/global.css'

export const comingSoonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px',
})

export const comingSoonIcon = style({
  width: '100px',
  height: '100px',

  '@media': {
    [tabletBreakpoint]: {
      width: '200px',
      height: '200px',
    },
  },
})

export const comingSoonTitle = style({
  fontFamily: typography.fontFamilyBase,
  fontSize: typography.fontSize.xl,
  lineHeight: typography.lineHeight.tight,
  letterSpacing: 0,
  margin: 0,

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.display,
    },
  },
})
