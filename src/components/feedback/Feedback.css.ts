import { style } from '@vanilla-extract/css'

import { colors } from '../../styles/shared'

export const feedbackWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   padding: '20px',
})

export const feedbackHeader = style({
   fontFamily: 'Jost, sans-serif',
   fontSize: '20px',
   color: colors.gray3,
   fontWeight: 600,
   margin: '10px 0',
})

export const feedbackText = style({
   fontFamily: 'Jost, sans-serif',
   fontSize: '18px',
   color: colors.gray3,
   fontWeight: 400,
   marginBottom: '20px',
})
