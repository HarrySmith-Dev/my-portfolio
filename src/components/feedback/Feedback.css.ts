import { style } from "@vanilla-extract/css";

import { colors, typography } from "../../styles/shared";

export const feedbackWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
});

export const feedbackHeader = style({
  fontFamily: typography.fontFamilyBase,
  fontSize: typography.fontSize.lg,
  lineHeight: typography.lineHeight.tight,
  color: colors.slate800,
  fontWeight: 600,
  margin: "10px 0",
});

export const feedbackText = style({
  fontFamily: typography.fontFamilyBase,
  fontSize: typography.fontSize.md,
  lineHeight: typography.lineHeight.normal,
  color: colors.slate800,
  fontWeight: 400,
  marginBottom: "20px",
});
