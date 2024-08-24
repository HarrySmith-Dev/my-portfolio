import React, { ReactNode } from "react";

import {
  AboutCardContainer,
  AboutCardHeading,
  AboutCardLink,
  AboutCardSpan,
  AboutCardText,
} from "./AboutCard.style";

type AboutCardData = {
  heading: string;
  subHeading: ReactNode;
  text: ReactNode;
};

const aboutCardData: AboutCardData[] = [
  {
    heading: "Software Developer",
    subHeading: (
      <AboutCardText $isSubHeading>
        I build front-end applications using{" "}
        <AboutCardSpan>React</AboutCardSpan>.
      </AboutCardText>
    ),
    text: (
      <>
        <AboutCardText>
          I&apos;m from Milton Keynes(UK) and am currently a Junior Software
          Engineer at an InsurTech company.
        </AboutCardText>
        <AboutCardText>
          Check out my{" "}
          <AboutCardLink href="/" rel="noreferrer" target="_blank">
            GitHub
          </AboutCardLink>{" "}
          and <AboutCardLink href="/">LinkedIn</AboutCardLink>.
        </AboutCardText>
      </>
    ),
  },
];

const AboutCard = () => (
  <AboutCardContainer>
    <div>
      {aboutCardData.map(({ heading, subHeading, text }) => (
        <div key={`${heading}`}>
          <AboutCardHeading>{heading}</AboutCardHeading>
          {subHeading}
          {text}
        </div>
      ))}
    </div>
  </AboutCardContainer>
);

export default AboutCard;
