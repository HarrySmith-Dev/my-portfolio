import { globalStyle } from '@vanilla-extract/css'
import { colors, typography } from './shared'

globalStyle('html, body, #main', {
  height: '100%',
  scrollBehavior: 'smooth',
})

globalStyle('body', {
  margin: 0,
  padding: 0,
  backgroundColor: colors.blueGray50,
  color: colors.slate700,
  fontFamily: typography.fontFamilyBase,
  lineHeight: typography.lineHeight.normal,
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

export const mobileBreakpoint = `screen and (min-width: 600px)`
export const tabletBreakpoint = `screen and (min-width: 768px)`
export const desktopBreakpoint = `screen and (min-width: 1024px)`
