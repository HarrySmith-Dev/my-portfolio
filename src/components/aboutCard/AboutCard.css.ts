import { style, styleVariants } from '@vanilla-extract/css'

import { colors, layout, shadows, spacing, typography } from '@/styles/shared'
import { desktopBreakpoint, tabletBreakpoint } from '@/styles/global.css'

export const aboutCardBackgroundContainer = style({
  margin: '0 20px',
})

export const aboutCardContainer = style({
  backgroundColor: colors.white,
  borderRadius: spacing.lg,
  boxShadow: shadows.card,
  width: '100%',
  marginBottom: '100px',
  '@media': {
    [desktopBreakpoint]: {
      maxWidth: layout.pageMaxWidth,
      margin: '0 auto 100px',
    },
  },
})

export const aboutCardContentWrapper = style({
  padding: '50px',
})

export const aboutCardHeading = style({
  fontSize: typography.fontSize.hero,
  lineHeight: typography.lineHeight.tight,
  letterSpacing: 0,
  fontWeight: 400,
  margin: '0 0 20px 0',
  color: colors.slate800,

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.display,
    },
  },
})

const aboutCardTextBase = style({
  color: colors.slate700,
  lineHeight: typography.lineHeight.normal,
  letterSpacing: 0,
  margin: '0 0 20px 0',
})

export const aboutCardText = style([
  aboutCardTextBase,
  {
    fontSize: typography.fontSize.md,
    '@media': {
      [tabletBreakpoint]: {
        fontSize: typography.fontSize.lg,
      },
    },
  },
])

export const aboutCardSubHeadingText = style([
  aboutCardTextBase,
  {
    fontSize: typography.fontSize.lg,
    '@media': {
      [tabletBreakpoint]: {
        fontSize: typography.fontSize.xl,
      },
    },
  },
])

const aboutCardSpanBase = style({
  borderBottomWidth: '3px',
  borderBottomStyle: 'solid',
})

export const aboutCardSpan = styleVariants({
  lightBlue: [aboutCardSpanBase, { borderBottomColor: colors.brandReact }],
  darkBlue: [aboutCardSpanBase, { borderBottomColor: colors.brandTypeScript }],
  orange: [aboutCardSpanBase, { borderBottomColor: colors.brandAws }],
})

export const aboutCardLink = style({
  fontSize: typography.fontSize.md,
  color: colors.brandPrimary,
  lineHeight: typography.lineHeight.normal,
  letterSpacing: 0,
  margin: spacing.none,
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.lg,
    },
  },
})
