import { style } from '@vanilla-extract/css'

import {
  colors,
  desktopBreakpoint,
  radii,
  spacing,
  typography,
} from '@/styles/shared'
import { contentWidth } from '@/styles/shared.css'

export const navigationContainer = style([
  contentWidth,
  {
    paddingTop: spacing[12],
    paddingBottom: spacing[10],

    '@media': {
      [desktopBreakpoint]: {
        paddingTop: spacing[16],
      },
    },
  },
])

export const navigationContentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@media': {
    [desktopBreakpoint]: {
      flexDirection: 'row',
    },
  },
})

export const navigationLogoContainer = style({
  display: 'flex',
})

export const navigationLogo = style({
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  borderRadius: radii.round,
  margin: `0 0 ${spacing[4]}`,

  '@media': {
    [desktopBreakpoint]: {
      margin: `0 ${spacing[12]} 0 0`,
    },
  },
})

export const navigationItemsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@media': {
    [desktopBreakpoint]: {
      alignItems: 'flex-start',
    },
  },
})

export const navigationLinkTextContainer = style({
  textDecoration: 'none',
})

export const navigationLinkText = style({
  fontSize: typography.fontSize.xxl,
  fontWeight: 500,
  color: colors.slate800,
})

export const navigationLinksContainer = style({
  display: 'none',

  '@media': {
    [desktopBreakpoint]: {
      display: 'flex',
      gap: spacing[8],
      listStyleType: 'none',
      padding: 0,
      margin: `${spacing[4]} 0 0`,
    },
  },
})

export const navigationLinks = style({
  textDecoration: 'none',
})

export const navigationLabel = style({
  fontSize: typography.fontSize.lg,
  color: colors.slate600,

  selectors: {
    [`${navigationLinks}:hover &`]: {
      color: colors.brandPrimary,
    },
  },
})

export const navigationLabelActive = style([
  navigationLabel,
  {
    color: colors.brandPrimary,
  },
])
