import { globalStyle } from '@vanilla-extract/css'
import { colors, typography } from './shared'

globalStyle('html, body, #root', {
  height: '100%',
})

globalStyle('html', {
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      scrollBehavior: 'smooth',
    },
  },
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

globalStyle('input, textarea, button, select', {
  font: 'inherit',
})
