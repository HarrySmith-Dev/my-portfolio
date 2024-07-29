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
  MobileNavigationContainer,
  MobileNavigationWrapper,
} from "./Navigation.style";

import LogoImage from "../../images/image0.jpeg";
import { useIsMobile } from "../../hooks/useIsMobile";

const Navigation = () => {
  const isMobile = useIsMobile();

  return (
    <NavigationContainer>
      <NavigationWrapper>
        <NavigationLogoContainer>
          <NavigationLogo src={LogoImage} />
        </NavigationLogoContainer>

        <NavigationTextContainer>
          <NavigationLogoText>Harry Smith</NavigationLogoText>
          <Divider />
          {isMobile ? (
            <MobileNavigationContainer>
              <MobileNavigationWrapper>
                <NavigationListItem>About</NavigationListItem>
                <NavigationListItem>Projects</NavigationListItem>
                <NavigationListItem>Github</NavigationListItem>
                <NavigationListItem>LinkedIn</NavigationListItem>
              </MobileNavigationWrapper>
            </MobileNavigationContainer>
          ) : (
            <NavigationListContainer>
              <NavigationListItem>About</NavigationListItem>
              <NavigationListItem>Projects</NavigationListItem>
              <NavigationListItem>Github</NavigationListItem>
              <NavigationListItem>LinkedIn</NavigationListItem>
            </NavigationListContainer>
          )}
        </NavigationTextContainer>
      </NavigationWrapper>
    </NavigationContainer>
  );
};

export default Navigation;
