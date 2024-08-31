import { Link } from "react-router-dom";

import styled from "styled-components";

import { colors } from "../../shared";

export const BottomNavigationContainer = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${colors.white1};
  box-shadow: 0 20px 650px -5px ${colors.white3};
  z-index: 2;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const BottomNavigationLinksContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

export const BottomNavigationListItem = styled.li`
  margin: 0 25px;

@media (min-width: 600px){
  margin: 0 35px;

}
`;

export const BottomNavigationContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BottomNavigationLinks = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-family: Jost, sans-serif;
  color: ${colors.gray2};

  &:hover {
    color: ${colors.lightBlue};
  }
`;

export const BottomNavigationIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-bottom: 5px;
`;
