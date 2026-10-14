import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Start each new page at the top, unless the URL points at a section
export const useScrollOnNavigate = () => {
  const { hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [hash, key])
}
