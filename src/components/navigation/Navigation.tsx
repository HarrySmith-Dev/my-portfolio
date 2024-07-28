// import React, { useState } from "react";

import {
  Divider,
  NavigationContainer,
  NavigationListContainer,
  NavigationListItem,
  NavigationLogoContainer,
  NavigationLogoText,
} from "./Navigation.style";

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationLogoContainer>
        <NavigationLogoText>Harry Smith</NavigationLogoText>
        <Divider />
      </NavigationLogoContainer>

      <NavigationListContainer>
        <NavigationListItem>About</NavigationListItem>
        <NavigationListItem>Projects</NavigationListItem>
        <NavigationListItem>Github</NavigationListItem>
        <NavigationListItem>LinkedIn</NavigationListItem>
      </NavigationListContainer>
    </NavigationContainer>
  );
};

export default Navigation;
