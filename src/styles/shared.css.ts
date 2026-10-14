import { style } from '@vanilla-extract/css'

import {
  colors,
  layout,
  radii,
  shadows,
  spacing,
  tabletBreakpoint,
  typography,
} from './shared'

export const contentWidth = style({
  width: '100%',
  maxWidth: `calc(${layout.pageMaxWidth} + ${layout.pageGutter} * 2)`,
  margin: '0 auto',
  paddingLeft: layout.pageGutter,
  paddingRight: layout.pageGutter,
})

export const pageContainer = style([
  contentWidth,
  {
    paddingBottom: spacing[24],
  },
])

export const card = style({
  backgroundColor: colors.white,
  borderRadius: radii.lg,
  boxShadow: shadows.card,
})

export const cardBody = style({
  padding: spacing[6],

  '@media': {
    [tabletBreakpoint]: {
      padding: spacing[10],
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

export const pageHeading = style({
  fontSize: typography.fontSize.hero,
  lineHeight: typography.lineHeight.tight,
  fontWeight: 400,
  color: colors.slate800,
  margin: `0 0 ${spacing[6]}`,

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.display,
    },
  },
})

export const cardTitle = style({
  fontSize: typography.fontSize.xl,
  lineHeight: typography.lineHeight.tight,
  fontWeight: 500,
  color: colors.slate800,
  margin: `0 0 ${spacing[3]}`,

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.xxl,
    },
  },
})

export const leadText = style({
  fontSize: typography.fontSize.lg,
  color: colors.slate700,
  margin: `0 0 ${spacing[5]}`,

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.xl,
    },
  },
})

export const bodyText = style({
  fontSize: typography.fontSize.md,
  color: colors.slate700,
  margin: `0 0 ${spacing[5]}`,

  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.lg,
    },
  },
})

export const textLink = style({
  color: colors.brandPrimary,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',

  selectors: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
})

export const buttonPrimary = style({
  width: '100%',
  height: spacing[12],
  padding: `0 ${spacing[6]}`,
  textAlign: 'center',
  backgroundColor: colors.brandPrimary,
  color: colors.white,
  border: 'none',
  borderRadius: radii.pill,
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
      width: 'auto',
      minWidth: '240px',
    },
  },
})

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
  top: spacing[4],
  left: spacing[4],
  zIndex: 100,
  padding: `${spacing[3]} ${spacing[5]}`,
  backgroundColor: colors.white,
  color: colors.brandPrimary,
  borderRadius: radii.sm,
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
