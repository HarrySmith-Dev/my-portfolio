import { style } from '@vanilla-extract/css'

import { colors, layout, spacing, typography } from '../../styles/shared'
import { desktopBreakpoint, tabletBreakpoint } from '../../styles/global.css'

export const projectsContainer = style({
  margin: '0 20px 100px',

  '@media': {
    [desktopBreakpoint]: {
      maxWidth: layout.pageMaxWidth,
      margin: '0 auto 100px',
    },
  },
})

export const projectsHeading = style({
  fontSize: typography.fontSize.hero,
  lineHeight: typography.lineHeight.tight,
  fontWeight: 400,
  color: colors.slate800,
  margin: `0 0 ${spacing.xxxl}`,

  '@media': {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.display,
    },
  },
})

export const projectsGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: spacing.xxl,

  '@media': {
    [tabletBreakpoint]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
})
