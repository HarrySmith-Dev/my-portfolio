import { Link } from "react-router-dom";

import { styled } from "styled-components";

import { colors } from "../../shared";

export const NavigationContainer = styled.nav`
  width: 100%;
`;

export const NavigationContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;

  @media (min-width: 768px) {
    align-items: normal;
  }
`;

export const NavigationLogoContainer = styled(Link)`
  display: flex;
  text-decoration: none;
`;

// export const NavigationLogo = styled(LogoIcon)`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   margin-right: 50px;
// `;

export const NavigationLogoText = styled.p`
  margin: 0;
  font-size: 25px;
  font-family: Jost, sans-serif;
  color: ${colors.black};
`;

export const NavigationLinksContainer = styled.ul`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    list-style-type: none;
    cursor: pointer;
    padding: 0;
    margin: 50px 0 0;
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
  margin-right: 40px;
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
  color: ${colors.darkGray};

  &:hover {
    color: ${colors.lightBlue};
  }
`;
