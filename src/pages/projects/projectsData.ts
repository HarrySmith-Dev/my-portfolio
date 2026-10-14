import GlutenFreeAndMeImage from '../../assets/projects/gluten-free-and-me.webp'
import type { ProjectData } from '../../types/SharedTypes'

const projectsData: ProjectData[] = [
  {
    title: 'Gluten Free & Me',
    description:
      'A web app for people with coeliac disease that maps nearby restaurants, cafes and takeaways offering gluten-free food, alongside plain-English health information sourced from the NHS and Coeliac UK. Built to score 100 on Lighthouse accessibility, with caching and retries to handle a slow, rate-limited free map-data service.',
    url: 'https://glutenfreeandme.io',
    techStack: ['React', 'TypeScript', 'Leaflet', 'TanStack Query'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/HarrySmith-Dev/coeliac-app',
      },
    ],
    imageSrc: GlutenFreeAndMeImage,
    imageAlt:
      'Gluten Free & Me home page, showing a map of central London next to an introduction to coeliac disease',
  },
]

export default projectsData
