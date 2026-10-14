import AboutCard from '../../components/aboutCard/AboutCard'
import { SITE_URL } from '../../constants/site'

const Home = () => (
  <>
    <title>Harry Smith | Software Engineer</title>
    <link rel="canonical" href={`${SITE_URL}/`} />
    <AboutCard />
  </>
)

export default Home
