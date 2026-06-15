import { Route, Routes } from 'react-router-dom'

import Footer from './components/footer/Footer'
import BottomNavigation from './components/navigation/BottomNavigation'
import TopNavigation from './components/navigation/TopNavigation'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'

const App = () => (
  <>
    <TopNavigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    <BottomNavigation />
    <Footer />
  </>
)

export default App
