import { style, styleVariants } from '@vanilla-extract/css'

import { colors } from '@/styles/shared'

const aboutCardSpanBase = style({
  borderBottomWidth: '3px',
  borderBottomStyle: 'solid',
})

export const aboutCardSpan = styleVariants({
  lightBlue: [aboutCardSpanBase, { borderBottomColor: colors.brandReact }],
  darkBlue: [aboutCardSpanBase, { borderBottomColor: colors.brandTypeScript }],
  orange: [aboutCardSpanBase, { borderBottomColor: colors.brandAws }],
})
