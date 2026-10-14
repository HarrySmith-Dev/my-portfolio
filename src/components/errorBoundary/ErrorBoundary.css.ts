import { style } from '@vanilla-extract/css'

import { colors, typography } from '@/styles/shared'
import { tabletBreakpoint } from '@/styles/global.css'

export const errorBoundaryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  margin: '100px 20px',
})

export const errorBoundaryHeading = style({
  fontSize: typography.fontSize.hero,
  lineHeight: typography.lineHeight.tight,
  fontWeight: 400,
  color: colors.slate800,
  margin: '0 0 20px',

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.display,
    },
  },
})

export const errorBoundaryText = style({
  fontSize: typography.fontSize.lg,
  color: colors.slate700,
  margin: '0 0 30px',
})
