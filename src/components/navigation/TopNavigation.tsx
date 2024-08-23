import React from "react";

import {
  NavigationContainer,
  NavigationContentWrapper,
  NavigationLabel,
  NavigationLinks,
  NavigationLinksContainer,
  NavigationLinksWrapper,
  NavigationLogoContainer,
  NavigationLogoText,
} from "./TopNavigation.style";

type NavigationLinksData = {
  url: string;
  label: string;
};

const navigationLinksData: NavigationLinksData[] = [
  {
    url: "/about",
    label: "About",
  },
  {
    url: "/projects",
    label: "Projects",
  },
  {
    url: "/contact",
    label: "Contact",
  },
];

const TopNavigation = () => (
  <header>
    <NavigationContainer>
      <NavigationContentWrapper>
        <NavigationLogoContainer to="/">
          <NavigationLogoText>Harry Smith</NavigationLogoText>
        </NavigationLogoContainer>
        <NavigationLinksContainer>
          {navigationLinksData.map(({ url, label }) => (
            <NavigationLinksWrapper key={`${label}-top-navigation`}>
              <NavigationLinks to={url}>
                <NavigationLabel>{label}</NavigationLabel>
              </NavigationLinks>
            </NavigationLinksWrapper>
          ))}
        </NavigationLinksContainer>
      </NavigationContentWrapper>
    </NavigationContainer>
  </header>
);

export default TopNavigation;
