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
        loading="lazy"
      />
    )}
    <div className={`${cardBody} ${projectCardContent}`}>
      <h2 className={cardTitle}>
        {url ? (
          <a
            className={projectCardTitleLink}
            data-card-link
            href={url}
            rel="noreferrer"
            target="_blank"
          >
            {title}
          </a>
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
          <a
            className={projectCardLink}
            href={url}
            key={url}
            rel="noreferrer"
            target="_blank"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </article>
)

export default ProjectCard
