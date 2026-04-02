import { style } from "@vanilla-extract/css";

import { colors } from "../../styles/shared";
import { desktopBreakpoint } from "../../styles/global.css";

export const navigationContainer = style({
  margin: "50px auto 0",
  "@media": {
    [desktopBreakpoint]: {
      maxWidth: "1024px",
      marginTop: "70px",
    },
  },
});

export const navigationContentWrapper = style({
  display: "flex",
  flexDirection: "column",
  height: "150px",
  marginBottom: "100px",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    [desktopBreakpoint]: {
      justifyContent: "flex-start",
      flexDirection: "row",
      margin: "0 30px 40px",
    },
  },
});

export const navigationLogoContainer = style({
  display: "flex",
  textDecoration: "none",
});

export const navigationLogo = style({
  width: "150px",
  height: "150px",
  objectFit: "cover",
  borderRadius: "50%",
  margin: "30px 0",
  "@media": {
    [desktopBreakpoint]: {
      margin: "0 50px 0 0",
    },
  },
});

export const navigationItemsContainer = style({
  display: "flex",
  "@media": {
    [desktopBreakpoint]: {
      flexDirection: "column",
    },
  },
});

export const navigationLinkTextContainer = style({
  textDecoration: "none",
});

export const navigationLinkText = style({
  margin: 0,
  fontSize: "30px",
  fontFamily: "Jost, sans-serif",
  color: colors.gray3,
  padding: 0,
  fontWeight: 500,
});

export const navigationLinksContainer = style({
  display: "none",
  "@media": {
    [desktopBreakpoint]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      listStyleType: "none",
      cursor: "pointer",
      padding: 0,
      margin: "30px 0 0",
    },
  },
});

export const navigationLinksWrapper = style({
  textDecoration: "none",
  selectors: {
    "&:not(:first-child)": {
      margin: "0 0 0 20px",
    },
  },
});

export const navigationLinks = style({
  display: "flex",
  alignItems: "center",
  marginRight: "20px",
  textDecoration: "none",
  height: "24px",
});

export const navigationLabel = style({
  fontFamily: "Jost, sans-serif",
  fontSize: "20px",
  letterSpacing: 0,
  lineHeight: "normal",
  cursor: "pointer",
  margin: 0,
  color: colors.gray1,
  selectors: {
    "&:hover": {
      color: colors.lightBlue,
    },
  },
});

export const navigationLabelActive = style({
  color: colors.lightBlue,
});
