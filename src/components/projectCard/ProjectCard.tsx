import ExternalLink from '@/components/externalLink/ExternalLink'
import { bodyText, card, cardBody, cardTitle } from '@/styles/shared.css'
import type { ProjectData } from '@/types/SharedTypes'
import {
  projectCardContainer,
  projectCardContent,
  projectCardDescription,
  projectCardImage,
  projectCardLink,
  projectCardLinks,
  projectCardTag,
  projectCardTags,
  projectCardTitleLink,
} from './ProjectCard.css'

const ProjectCard = ({
  title,
  url,
  description,
  techStack,
  links,
  imageSrc,
  imageAlt = '',
}: ProjectData) => (
  <article className={`${card} ${projectCardContainer}`}>
    {imageSrc && (
      <img
        className={projectCardImage}
        src={imageSrc}
        alt={imageAlt}
        width={1200}
        height={630}
      />
    )}
    <div className={`${cardBody} ${projectCardContent}`}>
      <h2 className={cardTitle}>
        {url ? (
          <ExternalLink
            className={projectCardTitleLink}
            data-card-link
            href={url}
          >
            {title}
          </ExternalLink>
        ) : (
          title
        )}
      </h2>
      <p className={`${bodyText} ${projectCardDescription}`}>{description}</p>
      <ul className={projectCardTags} aria-label="Tech stack">
        {techStack.map((tech) => (
          <li className={projectCardTag} key={tech}>
            {tech}
          </li>
        ))}
      </ul>
      <div className={projectCardLinks}>
        {links.map(({ label, url }) => (
          <ExternalLink className={projectCardLink} href={url} key={url}>
            {label}
          </ExternalLink>
        ))}
      </div>
    </div>
  </article>
)

export default ProjectCard
