import { keyframes, style } from "@vanilla-extract/css";

import { colors, spacing, typography } from "../../styles/shared";
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
  fontFamily: typography.fontFamilyBase,
  fontSize: typography.fontSize.lg,
  color: colors.slate700,
  lineHeight: typography.lineHeight.normal,
  letterSpacing: 0,
  margin: "0 0 50px 0",

  "@media": {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.xl,
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
  fontFamily: typography.fontFamilyBase,
  fontWeight: 400,
  color: colors.slate800,
  marginBottom: "10px",
  fontSize: typography.fontSize.sm,

  "@media": {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.md,
    },
  },
});

export const contactFormLabelSpan = style({
  color: colors.danger,
  fontWeight: 600,
  fontSize: typography.fontSize.xs,
});

const contactFormInputBase = style({
  margin: "0 0 30px 0",
  padding: "5px",
  height: "43px",
  borderRadius: "10px",
  border: `1px solid ${colors.blueGray200}`,
  fontSize: typography.fontSize.sm,
  fontFamily: typography.fontFamilyBase,
  transition: "box-shadow 0.3s ease, border-color 0.3s ease",

  selectors: {
    "&:focus": {
      outline: "none",
      border: `1px solid ${colors.blueGray200}`,
      boxShadow: `0 0 5px ${colors.blueGray200}`,
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

  { margin: spacing.none },
]);

const contactFormTextAreaBase = style({
  fontSize: typography.fontSize.sm,
  fontFamily: typography.fontFamilyBase,
  padding: "5px",
  margin: "0 0 30px 0",
  minHeight: "160px",
  borderRadius: "10px",
  border: `1px solid ${colors.blueGray200}`,
  resize: "vertical",
  transition: "box-shadow 0.3s ease, border-color 0.3s ease",

  selectors: {
    "&:focus": {
      outline: "none",
      border: `1px solid ${colors.blueGray200}`,
      boxShadow: `0 0 5px ${colors.blueGray200}`,
    },
  },

  "@media": {
    [tabletBreakpoint]: {
      width: "675px",
      padding: spacing.xs,
      fontSize: typography.fontSize.md,
    },
  },
});

export const contactFormTextArea = contactFormTextAreaBase;

export const contactFormTextAreaError = style([
  contactFormTextAreaBase,

  { margin: spacing.none },
]);

const contactFormErrorTextBase = style({
  fontSize: typography.fontSize.xs,
  fontFamily: typography.fontFamilyBase,
  color: colors.danger,
  fontWeight: 400,
  margin: spacing.none,

  "@media": {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.sm,
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
  backgroundColor: colors.brandPrimary,
  color: colors.white,
  border: "none",
  height: "45px",
  borderRadius: "20px",
  marginBottom: "50px",
  fontSize: typography.fontSize.sm,
  fontFamily: typography.fontFamilyBase,
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
      fontSize: typography.fontSize.sm,
    },
  },
});

export const contactFormButton = contactFormButtonBase;

export const contactFormButtonFeedback = style([
  contactFormButtonBase,

  {
    marginBottom: spacing.none,
    fontSize: typography.fontSize.md,
    "@media": {
      [tabletBreakpoint]: {
        fontSize: typography.fontSize.md,
        marginBottom: spacing.none,
      },
    },
  },
]);

export const overlay = style({
  position: "fixed",
  top: spacing.none,
  left: spacing.none,
  width: "100%",
  height: "100%",
  background: colors.blackAlpha50,
  zIndex: 10,
});

const easeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const feedbackContainer = style({
  display: "flex",
  justifyContent: "center",
  backgroundColor: colors.white,
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
  top: spacing.none,
  left: spacing.none,
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
  border: `16px solid ${colors.white}`,
  borderRadius: "50%",
  borderTop: `16px solid ${colors.brandPrimary}`,
  width: "120px",
  height: "120px",
  animation: `${spin} 2s linear infinite`,
});
