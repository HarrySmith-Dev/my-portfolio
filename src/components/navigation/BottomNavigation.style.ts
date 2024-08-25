import { Link } from "react-router-dom";

import styled from "styled-components";

import { colors } from "../../shared";

export const BottomNavigationContainer = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${colors.white1};
  z-index: 2;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const BottomNavigationLinksContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
`;

export const BottomNavigationListItem = styled.li`
  margin-right: 30px;
`;

export const BottomNavigationLinks = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-family: Jost, sans-serif;
  color: ${colors.gray2};
`;
