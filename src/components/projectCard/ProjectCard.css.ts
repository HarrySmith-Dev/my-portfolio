import { style } from '@vanilla-extract/css'

import { colors, shadows, spacing, typography } from '@/styles/shared'
import { tabletBreakpoint } from '@/styles/global.css'

export const projectCardContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: colors.white,
  borderRadius: spacing.lg,
  boxShadow: shadows.card,
  overflow: 'hidden',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',

  selectors: {
    // Only cards with a title link are clickable
    '&:has(a[data-card-link]):hover': {
      transform: 'translateY(-4px)',
      boxShadow: shadows.cardHover,
    },
    '&:has(a[data-card-link]:focus-visible)': {
      outline: `3px solid ${colors.brandPrimary}`,
      outlineOffset: '3px',
    },
  },

  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
      selectors: {
        '&:has(a[data-card-link]):hover': {
          transform: 'none',
        },
      },
    },
  },
})

export const projectCardImage = style({
  width: '100%',
  // Overrides the height attribute so aspectRatio controls the height
  height: 'auto',
  aspectRatio: '16 / 7',
  objectFit: 'cover',
  display: 'block',
})

export const projectCardContent = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  padding: spacing.xxl,
})

export const projectCardTitle = style({
  fontSize: typography.fontSize.xl,
  lineHeight: typography.lineHeight.tight,
  fontWeight: 500,
  color: colors.slate800,
  margin: `0 0 ${spacing.sm}`,

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.xxl,
    },
  },
})

// Stretches the title link over the whole card so any part of it is clickable
export const projectCardTitleLink = style({
  color: 'inherit',
  textDecoration: 'none',

  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
    },
    '&:focus-visible': {
      outline: 'none',
    },
  },
})

export const projectCardDescription = style({
  fontSize: typography.fontSize.md,
  lineHeight: typography.lineHeight.normal,
  color: colors.slate700,
  margin: `0 0 ${spacing.lg}`,
  flexGrow: 1,
})

export const projectCardTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spacing.xs,
  listStyleType: 'none',
  padding: spacing.none,
  margin: `0 0 ${spacing.xl}`,
})

export const projectCardTag = style({
  fontSize: typography.fontSize.xs,
  color: colors.slate700,
  backgroundColor: colors.blueGray50,
  border: `1px solid ${colors.blueGray200}`,
  borderRadius: spacing.lg,
  padding: `${spacing.xxs} ${spacing.sm}`,
})

export const projectCardLinks = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spacing.lg,
})

export const projectCardLink = style({
  // Sits above the stretched title link so it stays separately clickable
  position: 'relative',
  zIndex: 1,
  fontSize: typography.fontSize.md,
  fontWeight: 500,
  color: colors.brandPrimary,
  textDecoration: 'none',

  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})
