import { style } from '@vanilla-extract/css'

import { colors, typography } from '../../styles/shared'
import { tabletBreakpoint } from '../../styles/global.css'

export const notFoundContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  margin: '0 20px 100px',
})

export const notFoundHeading = style({
  fontSize: typography.fontSize.hero,
  lineHeight: typography.lineHeight.tight,
  fontWeight: 400,
  color: colors.slate800,
  margin: '0 0 20px',

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.display,
    },
  },
})

export const notFoundText = style({
  fontSize: typography.fontSize.lg,
  color: colors.slate700,
  margin: '0 0 30px',
})

export const notFoundLink = style({
  fontSize: typography.fontSize.lg,
  fontWeight: 500,
  color: colors.brandPrimary,
  textDecoration: 'none',

  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})
