import { style } from '@vanilla-extract/css'

import { spacing } from '@/styles/shared'
import { pageContainer } from '@/styles/shared.css'

export const errorBoundaryContainer = style([
  pageContainer,
  {
    paddingTop: spacing[16],
  },
])

export const errorBoundaryText = style({
  marginBottom: spacing[6],
})
