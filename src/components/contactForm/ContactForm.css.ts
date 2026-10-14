import { keyframes, style } from '@vanilla-extract/css'

import { colors, spacing, typography } from '../../styles/shared'
import { tabletBreakpoint } from '../../styles/global.css'

export const contactFormContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 20px',

  '@media': {
    [tabletBreakpoint]: {
      maxWidth: '700px',
      margin: '0 auto',
    },
  },
})

export const contactText = style({
  fontSize: typography.fontSize.lg,
  fontWeight: 400,
  color: colors.slate700,
  lineHeight: typography.lineHeight.normal,
  letterSpacing: 0,
  margin: '0 0 10px 0',

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.xl,
    },
  },
})

export const contactRequiredNote = style({
  fontSize: typography.fontSize.sm,
  color: colors.slate700,
  margin: '0 0 40px 0',
})

export const form = style({
  width: '100%',
  margin: '0 20px',
})

export const fieldset = style({
  border: 0,
  padding: 0,
  margin: 0,
  minWidth: 0,
})

export const contactFormFieldWrapper = style({
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [tabletBreakpoint]: {
      flexDirection: 'row',
      gap: '30px',
    },
  },
})

export const contactFormField = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '30px',
})

export const contactFormLabel = style({
  fontWeight: 400,
  color: colors.slate800,
  marginBottom: '10px',
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
  padding: '5px',
  borderRadius: '10px',
  border: `1px solid ${colors.blueGray200}`,
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
})

export const contactFormInput = style([
  fieldBase,
  {
    height: '43px',

    '@media': {
      [tabletBreakpoint]: {
        width: '320px',
      },
    },
  },
])

export const contactFormTextArea = style([
  fieldBase,
  {
    minHeight: '160px',
    resize: 'vertical',

    '@media': {
      [tabletBreakpoint]: {
        width: '675px',
        padding: spacing.xs,
        fontSize: typography.fontSize.md,
      },
    },
  },
])

export const contactFormErrorText = style({
  fontSize: typography.fontSize.xs,
  color: colors.danger,
  fontWeight: 400,
  margin: '5px 0 0 0',

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.sm,
    },
  },
})

export const contactFormButton = style({
  marginBottom: '50px',
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
  borderRadius: '50%',
  borderTop: `16px solid ${colors.brandPrimary}`,
  width: '120px',
  height: '120px',
  animation: `${spin} 2s linear infinite`,
})

const easeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const feedbackDialog = style({
  backgroundColor: colors.white,
  width: '90%',
  maxWidth: '500px',
  padding: 0,
  border: 'none',
  borderRadius: '10px',
  animation: `${easeIn} 0.5s ease-out`,

  selectors: {
    '&::backdrop': {
      background: colors.blackAlpha50,
    },
  },

  '@media': {
    [tabletBreakpoint]: {
      width: 'fit-content',
    },
  },
})
