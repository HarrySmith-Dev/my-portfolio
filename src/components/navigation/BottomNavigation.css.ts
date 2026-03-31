import { style } from "@vanilla-extract/css";

import { colors } from "../../styles/shared";
import { desktopBreakpoint, mobileBreakpoint } from "../../styles/global.css";

export const bottomNavigationContainer = style({
  width: "100%",
  position: "fixed",
  bottom: 0,
  backgroundColor: colors.white1,
  boxShadow: `0 20px 650px -5px ${colors.white3}`,
  zIndex: 2,
  "@media": {
    [desktopBreakpoint]: {
      display: "none",
    },
  },
});

export const bottomNavigationLinksContainer = style({
  display: "flex",
  justifyContent: "center",
  listStyleType: "none",
  padding: 0,
});

export const bottomNavigationListItem = style({
  margin: "0 25px",
  "@media": {
    [mobileBreakpoint]: {
      margin: "0 35px",
    },
  },
});

export const bottomNavigationContentContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textDecoration: "none",
});

export const bottomNavigationLinks = style({
  fontSize: "18px",
  fontFamily: "Jost, sans-serif",
  color: colors.gray2,
  margin: 0,
});

export const bottomNavigationIcon = style({
  width: "25px",
  height: "25px",
  marginBottom: "5px",
});
