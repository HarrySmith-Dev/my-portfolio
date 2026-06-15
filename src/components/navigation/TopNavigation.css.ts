import { style } from '@vanilla-extract/css'

import { colors, typography } from '../../styles/shared'
import { desktopBreakpoint } from '../../styles/global.css'

export const navigationContainer = style({
  margin: '50px auto 0',

  '@media': {
    [desktopBreakpoint]: {
      maxWidth: '1024px',
      marginTop: '70px',
    },
  },
})

export const navigationContentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '150px',
  marginBottom: '100px',
  justifyContent: 'center',
  alignItems: 'center',

  '@media': {
    [desktopBreakpoint]: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      margin: '0 30px 40px',
    },
  },
})

export const navigationLogoContainer = style({
  display: 'flex',
  textDecoration: 'none',
})

export const navigationLogo = style({
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '50%',
  margin: '30px 0',

  '@media': {
    [desktopBreakpoint]: {
      margin: '0 50px 0 0',
    },
  },
})

export const navigationItemsContainer = style({
  display: 'flex',

  '@media': {
    [desktopBreakpoint]: {
      flexDirection: 'column',
    },
  },
})

export const navigationLinkTextContainer = style({
  textDecoration: 'none',
})

export const navigationLinkText = style({
  margin: 0,
  fontSize: typography.fontSize.xxl,
  fontFamily: typography.fontFamilyBase,
  color: colors.slate800,
  padding: 0,
  fontWeight: 500,
})

export const navigationLinksContainer = style({
  display: 'none',

  '@media': {
    [desktopBreakpoint]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      listStyleType: 'none',
      cursor: 'pointer',
      padding: 0,
      margin: '30px 0 0',
    },
  },
})

export const navigationLinksWrapper = style({
  textDecoration: 'none',

  selectors: {
    '&:not(:first-child)': {
      margin: '0 0 0 20px',
    },
  },
})

export const navigationLinks = style({
  display: 'flex',
  alignItems: 'center',
  marginRight: '20px',
  textDecoration: 'none',
  height: '24px',
})

export const navigationLabel = style({
  fontFamily: typography.fontFamilyBase,
  fontSize: typography.fontSize.lg,
  letterSpacing: 0,
  lineHeight: typography.lineHeight.normal,
  cursor: 'pointer',
  margin: 0,
  color: colors.slate500,

  selectors: {
    '&:hover': {
      color: colors.brandPrimary,
    },
  },
})

export const navigationLabelActive = style({
  color: colors.brandPrimary,
})
