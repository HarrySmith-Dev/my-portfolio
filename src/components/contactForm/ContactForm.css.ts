import { keyframes, style } from '@vanilla-extract/css'

import {
  colors,
  radii,
  spacing,
  tabletBreakpoint,
  typography,
} from '@/styles/shared'

export const contactFormCard = style({
  marginTop: spacing[8],
})

export const contactRequiredNote = style({
  fontSize: typography.fontSize.sm,
  color: colors.slate700,
  margin: `0 0 ${spacing[6]}`,
})

export const fieldset = style({
  border: 0,
  padding: 0,
  margin: 0,
  minWidth: 0,
})

export const contactFormFieldWrapper = style({
  display: 'grid',
  gridTemplateColumns: '1fr',

  '@media': {
    [tabletBreakpoint]: {
      gridTemplateColumns: '1fr 1fr',
      columnGap: spacing[6],
    },
  },
})

export const contactFormField = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: spacing[6],
})

export const contactFormLabel = style({
  color: colors.slate800,
  marginBottom: spacing[2],
  fontSize: typography.fontSize.sm,

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.md,
    },
  },
})

export const contactFormLabelSpan = style({
  color: colors.danger,
  fontWeight: 600,
  fontSize: typography.fontSize.xs,
})

const fieldBase = style({
  width: '100%',
  padding: `${spacing[2]} ${spacing[3]}`,
  borderRadius: radii.md,
  border: `1px solid ${colors.blueGray200}`,
  backgroundColor: colors.white,
  fontSize: typography.fontSize.sm,
  transition: 'border-color 0.2s ease',

  selectors: {
    '&:focus-visible': {
      outline: `2px solid ${colors.brandPrimary}`,
      outlineOffset: '1px',
      borderColor: colors.brandPrimary,
    },
    '&[aria-invalid="true"]': {
      borderColor: colors.danger,
    },
    '&[aria-invalid="true"]:focus-visible': {
      outlineColor: colors.danger,
    },
  },

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.md,
    },
  },
})

export const contactFormInput = style([
  fieldBase,
  {
    minHeight: spacing[12],
  },
])

export const contactFormTextArea = style([
  fieldBase,
  {
    minHeight: '160px',
    resize: 'vertical',
  },
])

export const contactFormErrorText = style({
  fontSize: typography.fontSize.xs,
  color: colors.danger,
  margin: `${spacing[1]} 0 0`,

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.sm,
    },
  },
})

export const overlay = style({
  position: 'fixed',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: colors.blackAlpha50,
  zIndex: 10,
})

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const loader = style({
  border: `16px solid ${colors.white}`,
  borderRadius: radii.round,
  borderTop: `16px solid ${colors.brandPrimary}`,
  width: '120px',
  height: '120px',
  animation: `${spin} 2s linear infinite`,

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animationDuration: '6s',
    },
  },
})

const easeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const feedbackDialog = style({
  width: '90%',
  maxWidth: '480px',
  padding: 0,
  border: 'none',
  animation: `${easeIn} 0.5s ease-out`,

  selectors: {
    '&::backdrop': {
      background: colors.blackAlpha50,
    },
  },

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
})
