import { style } from '@vanilla-extract/css'

import { colors, shadows, spacing, typography } from '../../styles/shared'
import { desktopBreakpoint, mobileBreakpoint } from '../../styles/global.css'

export const bottomNavigationContainer = style({
  width: '100%',
  position: 'fixed',
  bottom: 0,
  paddingBottom: 'env(safe-area-inset-bottom)',
  backgroundColor: colors.white,
  boxShadow: shadows.bottomNav,
  zIndex: 2,

  '@media': {
    [desktopBreakpoint]: {
      display: 'none',
    },
  },
})

export const bottomNavigationLinksContainer = style({
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  padding: spacing.none,
})

export const bottomNavigationListItem = style({
  margin: '0 25px',

  '@media': {
    [mobileBreakpoint]: {
      margin: '0 35px',
    },
  },
})

export const bottomNavigationContentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textDecoration: 'none',
})

export const bottomNavigationLinks = style({
  fontSize: typography.fontSize.md,
  fontFamily: typography.fontFamilyBase,
  color: colors.slate700,
  margin: spacing.none,
})

export const bottomNavigationIcon = style({
  width: '25px',
  height: '25px',
  marginBottom: '5px',
})
