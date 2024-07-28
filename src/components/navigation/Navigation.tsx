// import React, { useState } from "react";

import {
  Divider,
  NavigationContainer,
  NavigationListContainer,
  NavigationListItem,
  NavigationTextContainer,
  NavigationLogoText,
  NavigationLogoContainer,
  NavigationLogo,
  NavigationWrapper,
} from "./Navigation.style";

import LogoImage from "../../images/image0.jpeg";

const Navigation = () => {
  return (
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
};

export default Navigation;
