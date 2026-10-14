import { style } from '@vanilla-extract/css'

import { colors, radii, shadows, spacing, typography } from '@/styles/shared'
import { textLink } from '@/styles/shared.css'

export const projectCardContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',

  selectors: {
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
  height: 'auto',
  aspectRatio: '1200 / 630',
  objectFit: 'cover',
  display: 'block',
})

export const projectCardContent = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
})

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
  flexGrow: 1,
})

export const projectCardTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spacing[2],
  listStyleType: 'none',
  padding: 0,
  margin: `0 0 ${spacing[6]}`,
})

export const projectCardTag = style({
  fontSize: typography.fontSize.xs,
  color: colors.slate700,
  backgroundColor: colors.blueGray50,
  border: `1px solid ${colors.blueGray200}`,
  borderRadius: radii.pill,
  padding: `${spacing[1]} ${spacing[3]}`,
})

export const projectCardLinks = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spacing[5],
})

export const projectCardLink = style([
  textLink,
  {
    position: 'relative',
    zIndex: 1,
    fontSize: typography.fontSize.md,
    fontWeight: 500,
  },
])
