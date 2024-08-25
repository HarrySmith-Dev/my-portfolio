import React from "react";

import {
  NavigationContainer,
  NavigationContentWrapper,
  NavigationItemsContainer,
  NavigationLabel,
  NavigationLinks,
  NavigationLinksContainer,
  NavigationLinksWrapper,
  NavigationLinkText,
  NavigationLinkTextContainer,
  NavigationLogo,
  NavigationLogoContainer,
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
          <NavigationLogo />
        </NavigationLogoContainer>
        <NavigationItemsContainer>
          <NavigationLinkTextContainer to="/">
            <NavigationLinkText>Harry Smith</NavigationLinkText>
          </NavigationLinkTextContainer>
          <NavigationLinksContainer>
            {navigationLinksData.map(({ url, label }) => (
              <NavigationLinksWrapper key={`${label}-top-navigation`}>
                <NavigationLinks to={url}>
                  <NavigationLabel>{label}</NavigationLabel>
                </NavigationLinks>
              </NavigationLinksWrapper>
            ))}
          </NavigationLinksContainer>
        </NavigationItemsContainer>
      </NavigationContentWrapper>
    </NavigationContainer>
  </header>
);

export default TopNavigation;
