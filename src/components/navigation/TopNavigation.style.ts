import { styled } from "styled-components";

import { colors } from "../../shared";

export const NavigationContainer = styled.nav`
  width: 100%;
  background-color: ${colors.lightBlack};

  @media (min-width: 1024px) {
    z-index: 1000;
    position: fixed;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: normal;
  }
`;

export const NavigationLogoContainer = styled.div`
  display: flex;
`;

export const NavigationLogo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const NavigationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NavigationLogoText = styled.p`
  cursor: pointer;
  margin: 0;
  color: ${colors.white};
  font-size: 25px;
  font-family: Jost, sans-serif;

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1024px) {
  }
`;

export const Divider = styled.div`
  border-top: 8px solid ${colors.lightBlue};
  border-radius: 5px;
  width: 46%;
  margin: 10px 0 20px 0;

  @media (min-width: 768px) {
    width: 13%;
  }
`;

export const NavigationListContainer = styled.ul`
  display: flex;
  margin-left: 0;
`;

export const MobileNavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 55px;
`;

export const MobileNavigationWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavigationListItem = styled.li`
  color: ${colors.darkGray};
  list-style: none;
  cursor: pointer;
  font-size: 20px;
  margin: 0 60px 0 0;

  &:hover {
    color: ${colors.white};
  }

  @media (min-width: 1024px) {
    font-size: 25px;
    margin: 0 40px 0 0;
  }
`;
