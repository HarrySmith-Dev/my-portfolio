import React, { ReactNode } from "react";

type AboutCardData = {
  heading: string;
  subHeading: ReactNode;
  text: ReactNode;
};

const aboutCardData: AboutCardData[] = [
  {
    heading: "Software Developer",
    subHeading: (
      <p>
        I build front-end applications using <span>React</span>.
      </p>
    ),
    text: (
      <p>
        Check out my <a href="/">GitHub</a> and <a href="/">LinkedIn</a>
      </p>
    ),
  },
];

const AboutCard = () => (
  <div style={{ backgroundColor: "white" }}>
    <div>
      {aboutCardData.map(({ heading, subHeading, text }) => (
        <div key={`${heading}`}>
          <h2>{heading}</h2>
          {subHeading}
          {text}
        </div>
      ))}
    </div>
  </div>
);

export default AboutCard;
