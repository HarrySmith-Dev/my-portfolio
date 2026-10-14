import { style } from '@vanilla-extract/css'

import {
  colors,
  desktopBreakpoint,
  layout,
  mobileBreakpoint,
  shadows,
  spacing,
  typography,
} from '@/styles/shared'

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
  alignItems: 'center',
  gap: spacing[12],
  height: layout.bottomNavHeight,
  listStyleType: 'none',
  padding: 0,
  margin: 0,

  '@media': {
    [mobileBreakpoint]: {
      gap: spacing[16],
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
  color: colors.slate700,
})

export const bottomNavigationLinksActive = style([
  bottomNavigationLinks,
  {
    color: colors.brandPrimary,
    fontWeight: 500,
  },
])

export const bottomNavigationIcon = style({
  width: spacing[6],
  height: spacing[6],
  marginBottom: spacing[1],
})
