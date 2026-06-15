import { style } from "@vanilla-extract/css";

import { colors, typography } from "../../styles/shared";
import { desktopBreakpoint, tabletBreakpoint } from "../../styles/global.css";

export const footerBackgroundContainer = style({
  margin: "0 20px 50px",
});

export const footerContainer = style({
  borderTop: `2px solid ${colors.grayLight}`,
  margin: "0 auto",
  width: "100%",
  position: "sticky",
  bottom: 0,
  "@media": {
    [desktopBreakpoint]: {
      maxWidth: "1024px",
    },
  },
});

export const footerTextContainer = style({
  display: "flex",
  margin: "30px 0 100px",
});

export const footerText = style({
  fontFamily: typography.fontFamilyBase,
  fontSize: typography.fontSize.sm,
  lineHeight: typography.lineHeight.normal,
  margin: 0,
  color: colors.slate700,

  selectors: {
    "&:last-child": {
      marginLeft: "auto",
    },
  },

  "@media": {
    [tabletBreakpoint]: {
      fontSize: typography.fontSize.md,
    },
  },
});

const footerLinkBase = style({
  color: colors.brandPrimary,
  textDecoration: "none",
  margin: 0,

  selectors: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const footerLink = footerLinkBase;

export const footerLinkPurple = style([
  footerLinkBase,

  {
    color: colors.brandVite,
  },
]);
