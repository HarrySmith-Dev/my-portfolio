import { style } from '@vanilla-extract/css'

import { spacing, tabletBreakpoint } from '@/styles/shared'

export const projectsGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: spacing[8],

  '@media': {
    [tabletBreakpoint]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
})
