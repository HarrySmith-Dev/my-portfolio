import {
  aboutCardBackgroundContainer,
  aboutCardContainer,
  aboutCardContentWrapper,
  aboutCardHeading,
  aboutCardLink,
  aboutCardSpan,
  aboutCardSubHeadingText,
  aboutCardText,
} from "./AboutCard.css";

const AboutCard = () => (
  <article className={aboutCardBackgroundContainer}>
    <section className={aboutCardContainer}>
      <div className={aboutCardContentWrapper}>
        <div>
          <h2 className={aboutCardHeading}>Software Developer</h2>
          <p className={aboutCardSubHeadingText}>
            I build front-end applications using{" "}
            <span className={aboutCardSpan}>React</span>.
          </p>
          <p className={aboutCardText}>
            I&apos;m from Milton Keynes, UK and am currently a Software Engineer
            at an InsurTech company.
          </p>
          <p className={aboutCardText}>
            Check out my{" "}
            <a
              className={aboutCardLink}
              href="https://github.com/HarrySmith-Dev/"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              className={aboutCardLink}
              href="https://www.linkedin.com/in/harry-smith-software-developer/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  </article>
);

export default AboutCard;
