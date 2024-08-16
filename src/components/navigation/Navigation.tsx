import React from "react";

import LogoImage from "../../images/image0.jpeg";
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

const Navigation = () => (
  <NavigationContainer>
    <NavigationWrapper>
      <NavigationLogoContainer>
        <NavigationLogo src={LogoImage} />
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

export default Navigation;
