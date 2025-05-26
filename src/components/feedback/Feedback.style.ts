import styled from 'styled-components'

import { colors } from '../../shared'

export const FeedbackWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px;
`

export const FeedbackHeader = styled.h3`
   font-family: Jost, sans-serif;
   font-size: 20px;
   color: ${colors.gray3};
   font-weight: 600;
   margin: 10px 0;
`

export const FeedbackText = styled.p`
   font-family: Jost, sans-serif;
   font-size: 18px;
   color: ${colors.gray3};
   font-weight: 400;
   margin-bottom: 20px;
`
