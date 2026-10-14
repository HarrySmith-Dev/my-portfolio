import { style } from '@vanilla-extract/css'

import {
  colors,
  desktopBreakpoint,
  layout,
  spacing,
  tabletBreakpoint,
  typography,
} from '@/styles/shared'
import { contentWidth, textLink } from '@/styles/shared.css'

export const footerBackgroundContainer = style([
  contentWidth,
  {
    paddingBottom: `calc(${layout.bottomNavHeight} + env(safe-area-inset-bottom))`,

    '@media': {
      [desktopBreakpoint]: {
        paddingBottom: 0,
      },
    },
  },
])

export const footerContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spacing[4],
  borderTop: `2px solid ${colors.blueGray200}`,
  padding: `${spacing[8]} 0 ${spacing[12]}`,
})

export const footerText = style({
  fontSize: typography.fontSize.sm,
  margin: 0,
  color: colors.slate700,

  selectors: {
    '&:last-child': {
      marginLeft: 'auto',
    },
  },

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.md,
    },
  },
})

export const footerLinkVite = style([
  textLink,
  {
    color: colors.brandVite,
  },
])
