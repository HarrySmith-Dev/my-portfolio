import { style } from '@vanilla-extract/css'

import { colors, spacing, typography } from './shared'
import { tabletBreakpoint } from './global.css'

export const visuallyHidden = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
})

export const skipLink = style({
  position: 'absolute',
  top: spacing.md,
  left: spacing.md,
  zIndex: 100,
  padding: `${spacing.sm} ${spacing.lg}`,
  backgroundColor: colors.white,
  color: colors.brandPrimary,
  borderRadius: spacing.xs,
  fontSize: typography.fontSize.md,
  fontWeight: 500,
  transform: 'translateY(-200%)',

  selectors: {
    '&:focus': {
      transform: 'none',
      outline: `3px solid ${colors.brandPrimary}`,
    },
  },
})

export const buttonPrimary = style({
  width: '100%',
  textAlign: 'center',
  backgroundColor: colors.brandPrimary,
  color: colors.white,
  border: 'none',
  height: '45px',
  borderRadius: spacing.lg,
  fontSize: typography.fontSize.sm,
  fontWeight: 600,
  cursor: 'pointer',

  selectors: {
    '&:focus-visible': {
      outline: `3px solid ${colors.brandPrimary}`,
      outlineOffset: '3px',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'default',
    },
  },

  '@media': {
    [tabletBreakpoint]: {
      width: '300px',
    },
  },
})

export const mainContent = style({
  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
})
