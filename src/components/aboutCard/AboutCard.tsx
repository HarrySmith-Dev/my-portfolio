import ExternalLink from '@/components/externalLink/ExternalLink'
import {
  bodyText,
  card,
  cardBody,
  leadText,
  pageHeading,
  textLink,
} from '@/styles/shared.css'
import { aboutCardSpan } from './AboutCard.css'

const careerStartYear = 2023
const yearsOfExperience = new Date().getFullYear() - careerStartYear

const AboutCard = () => (
  <section className={`${card} ${cardBody}`}>
    <h1 className={pageHeading}>Software Engineer</h1>
    <p className={leadText}>
      I build front-end applications using{' '}
      <span className={aboutCardSpan.lightBlue}>React</span>,{' '}
      <span className={aboutCardSpan.darkBlue}>TypeScript</span>, and{' '}
      <span className={aboutCardSpan.orange}>AWS</span>.
    </p>
    <p className={bodyText}>
      I&apos;m a London-based Software Engineer with {yearsOfExperience} years
      of experience scaling and delivering services for 1.5 million users at an
      InsurTech company.
    </p>
    <p className={bodyText}>
      Check out my{' '}
      <ExternalLink
        className={textLink}
        href="https://github.com/HarrySmith-Dev/"
      >
        GitHub
      </ExternalLink>{' '}
      and{' '}
      <ExternalLink
        className={textLink}
        href="https://www.linkedin.com/in/harry-smith-software-developer/"
      >
        LinkedIn
      </ExternalLink>
      .
    </p>
  </section>
)

export default AboutCard
