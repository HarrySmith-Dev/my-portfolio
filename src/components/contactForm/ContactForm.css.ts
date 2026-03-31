import { keyframes, style } from "@vanilla-extract/css";

import { colors } from "../../styles/shared";
import { tabletBreakpoint } from "../../styles/global.css";

export const contactFormBackgroundContainer = style({
  position: "relative",
});

const contactFormContainerBase = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 20px",
  pointerEvents: "auto",
  opacity: 1,
  "@media": {
    [tabletBreakpoint]: {
      maxWidth: "700px",
      margin: "0 auto",
    },
  },
});

export const contactFormContainer = contactFormContainerBase;

export const contactFormContainerInactive = style([
  contactFormContainerBase,
  {
    pointerEvents: "none",
    opacity: 0.5,
  },
]);

export const contactText = style({
  fontFamily: "Jost, sans-serif",
  fontSize: "20px",
  color: colors.gray2,
  lineHeight: "normal",
  letterSpacing: 0,
  margin: "0 0 50px 0",
  "@media": {
    [tabletBreakpoint]: {
      fontSize: "24px",
    },
  },
});

export const form = style({
  width: "100%",
  margin: "0 20px",
});

export const contactFormFieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  "@media": {
    [tabletBreakpoint]: {
      flexDirection: "row",
      gap: "30px",
    },
  },
});

export const contactFormField = style({
  display: "flex",
  flexDirection: "column",
});

export const contactFormLabel = style({
  fontFamily: "Jost, sans-serif",
  fontWeight: 400,
  color: colors.gray3,
  marginBottom: "10px",
  fontSize: "16px",
  "@media": {
    [tabletBreakpoint]: {
      fontSize: "18px",
    },
  },
});

export const contactFormLabelSpan = style({
  color: colors.red,
  fontWeight: 600,
  fontSize: "14px",
});

const contactFormInputBase = style({
  margin: "0 0 30px 0",
  padding: "5px",
  height: "43px",
  borderRadius: "10px",
  border: `1px solid ${colors.gray4}`,
  fontSize: "16px",
  fontFamily: "Jost, sans-serif",
  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
  selectors: {
    "&:focus": {
      outline: "none",
      border: `1px solid ${colors.gray4}`,
      boxShadow: `0 0 5px ${colors.gray4}`,
    },
  },
  "@media": {
    [tabletBreakpoint]: {
      width: "320px",
    },
  },
});

export const contactFormInput = contactFormInputBase;

export const contactFormInputError = style([
  contactFormInputBase,
  { margin: 0 },
]);

const contactFormTextAreaBase = style({
  fontSize: "16px",
  fontFamily: "Jost, sans-serif",
  padding: "5px",
  margin: "0 0 30px 0",
  minHeight: "160px",
  borderRadius: "10px",
  border: `1px solid ${colors.gray4}`,
  resize: "vertical",
  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
  selectors: {
    "&:focus": {
      outline: "none",
      border: `1px solid ${colors.gray4}`,
      boxShadow: `0 0 5px ${colors.gray4}`,
    },
  },
  "@media": {
    [tabletBreakpoint]: {
      width: "675px",
      padding: "8px",
      fontSize: "18px",
    },
  },
});

export const contactFormTextArea = contactFormTextAreaBase;

export const contactFormTextAreaError = style([
  contactFormTextAreaBase,
  { margin: 0 },
]);

const contactFormErrorTextBase = style({
  fontSize: "14px",
  fontFamily: "Jost, sans-serif",
  color: colors.red,
  fontWeight: 400,
  margin: "0",
  "@media": {
    [tabletBreakpoint]: {
      fontSize: "16px",
      margin: "5px 0 40px 0",
    },
  },
});

export const contactFormErrorText = contactFormErrorTextBase;

export const contactFormErrorTextActive = style([
  contactFormErrorTextBase,
  {
    margin: "5px 0 25px 0",
    "@media": {
      [tabletBreakpoint]: {
        margin: "5px 0 20px 0",
      },
    },
  },
]);

const contactFormButtonBase = style({
  width: "100%",
  textAlign: "center",
  backgroundColor: colors.lightBlue,
  color: colors.white1,
  border: "none",
  height: "45px",
  borderRadius: "20px",
  marginBottom: "50px",
  fontSize: "14px",
  fontFamily: "Jost, sans-serif",
  fontWeight: 600,
  cursor: "pointer",
  selectors: {
    "&:disabled": {
      opacity: 0.5,
      cursor: "default",
    },
  },
  "@media": {
    [tabletBreakpoint]: {
      width: "300px",
      fontSize: "16px",
    },
  },
});

export const contactFormButton = contactFormButtonBase;

export const contactFormButtonFeedback = style([
  contactFormButtonBase,
  {
    marginBottom: 0,
    fontSize: "18px",
    "@media": {
      [tabletBreakpoint]: {
        fontSize: "18px",
        marginBottom: 0,
      },
    },
  },
]);

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: colors.black2,
  zIndex: 10,
});

const easeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const feedbackContainer = style({
  display: "flex",
  justifyContent: "center",
  backgroundColor: colors.white1,
  width: "90%",
  position: "fixed",
  transform: "translate(-50%, -50%)",
  zIndex: 20,
  top: "50%",
  left: "50%",
  borderRadius: "10px",
  animation: `${easeIn} 0.5s ease-out`,
  "@media": {
    [tabletBreakpoint]: {
      width: "fit-content",
    },
  },
});

export const loaderContainer = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const loader = style({
  border: `16px solid ${colors.white1}`,
  borderRadius: "50%",
  borderTop: `16px solid ${colors.lightBlue}`,
  width: "120px",
  height: "120px",
  animation: `${spin} 2s linear infinite`,
});
