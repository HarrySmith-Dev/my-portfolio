import styled from "styled-components";

import { colors } from "../../shared";

export const FooterBackgroundContainer = styled.footer`
  margin: 0 20px 50px;
`;

export const FooterContainer = styled.div`
  border-top: 2px solid ${colors.white3};
  margin: 0 auto;
  width: 100%;
  position: sticky;
  bottom: 0;

  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

export const FooterTextContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const FooterText = styled.p`
  font-family: Jost, sans-serif;
  font-size: 16px;
  margin: 0;
  color: ${colors.gray2};

  &:last-child {
    margin-left: auto;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const FooterLinks = styled.a<{ $isPurple?: boolean }>`
  color: ${({ $isPurple }) =>
    $isPurple ? `${colors.purple}` : `${colors.lightBlue}`};
  text-decoration: none;
  margin: 0;

  &:hover {
    opacity: 0.5;
  }
`;
