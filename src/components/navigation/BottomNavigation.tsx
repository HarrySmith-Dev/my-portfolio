import React from "react";

import {
  BottomNavigationContainer,
  BottomNavigationLinks,
  BottomNavigationLinksContainer,
  BottomNavigationListItem,
} from "./BottomNavigation.style";

const BottomNavigation = () => (
  <BottomNavigationContainer>
    <BottomNavigationLinksContainer>
      <BottomNavigationListItem>
        <BottomNavigationLinks to="/">About</BottomNavigationLinks>
      </BottomNavigationListItem>
      <BottomNavigationListItem>
        <BottomNavigationLinks to="/">Projects</BottomNavigationLinks>
      </BottomNavigationListItem>
      <BottomNavigationListItem>
        <BottomNavigationLinks to="/">Contact</BottomNavigationLinks>
      </BottomNavigationListItem>
    </BottomNavigationLinksContainer>
  </BottomNavigationContainer>
);

export default BottomNavigation;
