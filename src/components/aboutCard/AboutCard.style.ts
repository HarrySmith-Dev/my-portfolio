import styled from "styled-components";

import { colors } from "../../shared";

export const AboutCardBackgroundContainer = styled.article`
  margin: 0 20px;
`;

export const AboutCardContainer = styled.section`
  background-color: ${colors.white1};
  border-radius: 20px;
  box-shadow: 0 20px 25px -5px ${colors.white3};
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 1024px;
    margin: 0 auto;
  }
`;

export const AboutCardContentWrapper = styled.div`
  padding: 50px;
`;

export const AboutCardHeading = styled.h2`
  font-size: 25px;
  font-family: Jost, sans-serif;
  line-height: normal;
  letter-spacing: 0;
  font-weight: 400;
  margin: 0 0 20px 0;

  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

export const AboutCardText = styled.p<{ $isSubHeading?: boolean }>`
  font-family: Jost, sans-serif;
  font-size: ${({ $isSubHeading }) => ($isSubHeading ? "20px" : "18px")};
  color: ${colors.gray2};
  line-height: normal;
  letter-spacing: 0;
  margin: 0 0 20px 0;

  @media (min-width: 768px) {
    font-size: ${({ $isSubHeading }) => ($isSubHeading ? "24px" : "20px")};
  }
`;

export const AboutCardSpan = styled.span`
  border-bottom: 3px solid ${colors.lightBlue};
`;

export const AboutCardLink = styled.a`
  font-size: 18px;
  font-family: Jost, sans-serif;
  color: ${colors.lightBlue};
  line-height: normal;
  letter-spacing: 0;
  margin: 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
