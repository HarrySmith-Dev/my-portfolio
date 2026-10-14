import ProjectCard from '@/components/projectCard/ProjectCard'
import { SITE_URL } from '@/constants/site'
import { pageContainer, pageHeading } from '@/styles/shared.css'
import { projectsGrid } from './Projects.css'
import projectsData from './projectsData'

const Projects = () => (
  <section className={pageContainer}>
    <title>Projects | Harry Smith</title>
    <link rel="canonical" href={`${SITE_URL}/projects`} />
    <h1 className={pageHeading}>Projects</h1>
    <div className={projectsGrid}>
      {projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
)

export default Projects
