import AboutCard from '@/components/aboutCard/AboutCard'
import { SITE_URL } from '@/constants/site'
import { pageContainer } from '@/styles/shared.css'

const Home = () => (
  <div className={pageContainer}>
    <title>Harry Smith | Software Engineer</title>
    <link rel="canonical" href={`${SITE_URL}/`} />
    <AboutCard />
  </div>
)

export default Home
