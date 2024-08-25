import { Link } from "react-router-dom";

import { styled } from "styled-components";

import LogoIcon from "../../../assets/images/image0.png";
import { colors } from "../../shared";

export const NavigationContainer = styled.nav`
  margin: 50px auto 0;

  @media (min-width: 1024px) {
    max-width: 1024px;
    margin-top: 70px;
  }
`;

export const NavigationContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  margin: 0 30px 100px;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    justify-content: normal;
    flex-direction: row;
  }
`;

export const NavigationLogoContainer = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const NavigationLogo = styled.img`
  ${LogoIcon};
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 30px 0;

  @media (min-width: 1024px) {
    margin-right: 50px;
  }
`;

export const NavigationItemsContainer = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

export const NavigationLinkTextContainer = styled(Link)`
  text-decoration: none;
`;

export const NavigationLinkText = styled.h1`
  margin: 0;
  font-size: 30px;
  font-family: Jost, sans-serif;
  color: ${colors.gray3};
  padding: 0;
  font-weight: 500;
`;

export const NavigationLinksContainer = styled.ul`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    cursor: pointer;
    padding: 0;
    margin: 30px 0 0;
  }
`;

export const NavigationLinksWrapper = styled.li`
  text-decoration: none;

  &:not(:first-child) {
    margin: 0 0 0 20px;
  }
`;

export const NavigationLinks = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 20px;
  text-decoration: none;
  height: 24px;
`;

export const NavigationLabel = styled.p`
  font-family: Jost, sans-serif;
  font-size: 20px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
  margin: 0;
  color: ${colors.gray1};

  &:hover {
    color: ${colors.lightBlue};
  }
`;
