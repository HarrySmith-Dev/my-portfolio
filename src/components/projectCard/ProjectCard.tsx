import type { ProjectData } from '../../types/SharedTypes'
import {
  projectCardContainer,
  projectCardContent,
  projectCardDescription,
  projectCardImage,
  projectCardLink,
  projectCardLinks,
  projectCardTag,
  projectCardTags,
  projectCardTitle,
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
  <article className={projectCardContainer}>
    {imageSrc && (
      <img
        className={projectCardImage}
        src={imageSrc}
        alt={imageAlt}
        width={1280}
        height={720}
        loading="lazy"
      />
    )}
    <div className={projectCardContent}>
      <h2 className={projectCardTitle}>
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
      <p className={projectCardDescription}>{description}</p>
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
