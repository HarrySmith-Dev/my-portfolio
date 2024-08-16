import React from "react";

import {
  NavigationContainer,
  NavigationListContainer,
  NavigationListItem,
  NavigationLogo,
  NavigationLogoContainer,
  NavigationLogoText,
  NavigationTextContainer,
  NavigationWrapper,
} from "./Navigation.style";

const TopNavigation = () => (
  <NavigationContainer>
    <NavigationWrapper>
      <NavigationLogoContainer>
        <NavigationLogo />
      </NavigationLogoContainer>

      <NavigationTextContainer>
        <NavigationLogoText>Harry Smith</NavigationLogoText>
        <NavigationListContainer>
          <NavigationListItem>About</NavigationListItem>
          <NavigationListItem>Projects</NavigationListItem>
          <NavigationListItem>Github</NavigationListItem>
          <NavigationListItem>LinkedIn</NavigationListItem>
        </NavigationListContainer>
      </NavigationTextContainer>
    </NavigationWrapper>
  </NavigationContainer>
);

export default TopNavigation;
