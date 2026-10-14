import { lazy, Suspense, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'

import Footer from './components/footer/Footer'
import BottomNavigation from './components/navigation/BottomNavigation'
import TopNavigation from './components/navigation/TopNavigation'
import { useScrollOnNavigate } from './hooks/useScrollOnNavigate'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import Projects from './pages/projects/Projects'
import { mainContent, skipLink } from './styles/shared.css'

const Contact = lazy(() => import('./pages/contact/Contact'))

const App = () => {
  useScrollOnNavigate()
  const mainRef = useRef<HTMLElement>(null)

  return (
    <>
      <a
        href="#main-content"
        className={skipLink}
        onClick={(event) => {
          event.preventDefault()
          mainRef.current?.focus()
        }}
      >
        Skip to content
      </a>
      <TopNavigation />
      <main
        id="main-content"
        ref={mainRef}
        tabIndex={-1}
        className={mainContent}
      >
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <BottomNavigation />
      <Footer />
    </>
  )
}

export default App
