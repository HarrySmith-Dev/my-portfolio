import { styled } from "styled-components";
import { colors } from "../../shared";

export const NavigationContainer = styled.div`
  margin-top: 100px;
  margin: 70px auto 0 auto;
  width: 700px;
`;

export const NavigationWrapper = styled.div`
  display: flex;
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
`;

export const NavigationLogoText = styled.p`
  cursor: pointer;
  margin: 0;
  color: ${colors.white};
  font-size: 25px;
  font-family: Jost, sans-serif;

  @media (min-width: 1024px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

export const Divider = styled.div`
  border-top: 8px solid ${colors.lightBlue};
  border-radius: 5px;
  width: 50%;
  margin: 10px 0 0;
`;

export const NavigationListContainer = styled.ul`
  display: flex;
`;

export const NavigationListItem = styled.li`
  color: ${colors.darkGray};
  list-style: none;
  cursor: pointer;
  font-size: 20px;
  margin: 0 40px 0 0;

  &:hover {
    color: ${colors.white};
  }

  @media (min-width: 1024px) {
    font-size: 25px;
  }
`;
