import styled, { keyframes } from 'styled-components'

import { colors } from '../../shared'

export const ContactFormBackgroundContainer = styled.article`
   position: relative;
`
export const ContactFormContainer = styled.section<{ $isOpen: boolean }>`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 20px;
   pointer-events: ${({ $isOpen }) => ($isOpen ? 'none' : 'auto')};
   opacity: ${({ $isOpen }) => ($isOpen ? '0.5' : '1')};

   @media (min-width: 768px) {
      max-width: 700px;
      margin: 0 auto;
   }
`

export const ContactText = styled.p`
   font-family: Jost, sans-serif;
   font-size: 20px;
   color: ${colors.gray2};
   line-height: normal;
   letter-spacing: 0;
   margin: 0 0 50px 0;

   @media (min-width: 768px) {
      font-size: 24px;
   }
`

export const Form = styled.form`
   width: 100%;
   margin: 0 20px;
`

export const ContactFormFieldWrapper = styled.div`
   display: flex;
   flex-direction: column;

   @media (min-width: 768px) {
      flex-direction: row;
      gap: 30px;
   }
`

export const ContactFormField = styled.div`
   display: flex;
   flex-direction: column;
`

export const ContactFormLabel = styled.label`
   font-family: Jost, sans-serif;
   font-weight: 400;
   color: ${colors.gray3};
   margin-bottom: 10px;
   font-size: 16px;

   @media (min-width: 768px) {
      font-size: 18px;
   }
`

export const ContactFormLabelSpan = styled.span`
   color: ${colors.red};
   font-weight: 600;
   font-size: 14px;
`

export const ContactFormInput = styled.input<{ $hasError?: boolean }>`
   margin: ${({ $hasError }) => ($hasError ? '0' : '0 0 30px 0')};
   padding: 5px;
   height: 43px;
   border-radius: 10px;
   border: 1px solid ${colors.gray4};
   font-size: 16px;
   font-family: Jost, sans-serif;
   transition:
      box-shadow 0.3s ease,
      border-color 0.3s ease;

   &:focus {
      outline: none;
      border: 1px solid ${colors.gray4};
      box-shadow: 0 0 5px ${colors.gray4};
   }

   @media (min-width: 768px) {
      width: 320px;
   }
`

export const ContactFormTextArea = styled.textarea<{ $hasError?: boolean }>`
   font-size: 16px;
   font-family: Jost, sans-serif;
   padding: 5px;
   margin: ${({ $hasError }) => ($hasError ? '0' : '0 0 30px 0')};
   min-height: 160px;
   border-radius: 10px;
   border: 1px solid ${colors.gray4};
   resize: vertical;
   transition:
      box-shadow 0.3s ease,
      border-color 0.3s ease;

   &:focus {
      outline: none;
      border: 1px solid ${colors.gray4};
      box-shadow: 0 0 5px ${colors.gray4};
   }

   @media (min-width: 768px) {
      width: 675px;
      padding: 8px;
      font-size: 18px;
   }
`
export const ContactFormErrorText = styled.p<{ $hasError?: boolean }>`
   font-size: 14px;
   font-family: Jost, sans-serif;
   color: ${colors.red};
   font-weight: 400;
   margin: ${({ $hasError }) => ($hasError ? '5px 0 25px 0 ' : '0')};

   @media (min-width: 768px) {
      font-size: 16px;
      margin: ${({ $hasError }) =>
         $hasError ? '5px 0 20px 0' : '5px 0 40px 0'};
   }
`

export const ContactFormButton = styled.button<{
   $isFeedback?: boolean
}>`
   width: 100%;
   text-align: center;
   background-color: ${colors.lightBlue};
   color: ${colors.white1};
   border: none;
   height: 45px;
   border-radius: 20px;
   margin-bottom: ${({ $isFeedback }) => ($isFeedback ? '0' : '50px')};
   font-size: ${({ $isFeedback }) => ($isFeedback ? '18px' : '14px')};
   font-family: Jost, sans-serif;
   font-weight: 600;
   cursor: pointer;

   &:disabled {
      opacity: 0.5;
      cursor: default;
   }

   @media (min-width: 768px) {
      width: 300px;
      font-size: ${({ $isFeedback }) => ($isFeedback ? '18px' : '16px')};
      margin-bottom: ${({ $isFeedback }) => $isFeedback && '0'};
   }
`

export const Overlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: ${colors.black2};
   z-index: 10;
`

const easeIn = keyframes`
from {
      opacity: 0; 
   }
   to {
      opacity: 1;
   }
`

export const FeedbackContainer = styled.div`
   display: flex;
   justify-content: center;
   background-color: ${colors.white1};
   width: 90%;
   position: fixed;
   transform: translate(-50%, -50%);
   z-index: 20;
   top: 50%;
   left: 50%;
   border-radius: 10px;
   animation: ${easeIn} 0.5s ease-out;

   @media (min-width: 768px) {
      width: fit-content;
   }
`

export const LoaderContainer = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Loader = styled.div`
   border: 16px solid ${colors.white1};
   border-radius: 50%;
   border-top: 16px solid ${colors.lightBlue};
   width: 120px;
   height: 120px;
   animation: spin 2s linear infinite;

   @keyframes spin {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`
