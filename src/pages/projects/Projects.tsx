import ComingSoon from '../../components/comingSoon/ComingSoon'
import ProjectCard from '../../components/projectCard/ProjectCard'
import {
  projectsContainer,
  projectsGrid,
  projectsHeading,
} from './Projects.css'
import projectsData from './projectsData'
import { SITE_URL } from '../../constants/site'

const Projects = () => (
  <>
    <title>Projects | Harry Smith</title>
    <link rel="canonical" href={`${SITE_URL}/projects`} />
    {projectsData.length === 0 ? (
      <ComingSoon />
    ) : (
      <section className={projectsContainer}>
        <h1 className={projectsHeading}>Projects</h1>
        <div className={projectsGrid}>
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    )}
  </>
)

export default Projects
