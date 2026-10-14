import { textLink } from '@/styles/shared.css'
import {
  footerBackgroundContainer,
  footerContainer,
  footerLinkVite,
  footerText,
} from './Footer.css'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <footer className={footerBackgroundContainer}>
    <div className={footerContainer}>
      <p className={footerText}>&copy; {currentYear} Harry Smith.</p>
      <p className={footerText}>
        Built with{' '}
        <a
          target="_blank"
          href="https://vite.dev/"
          rel="noreferrer"
          className={footerLinkVite}
        >
          Vite
        </a>{' '}
        and{' '}
        <a
          target="_blank"
          href="https://react.dev/"
          rel="noreferrer"
          className={textLink}
        >
          React
        </a>
        .
      </p>
    </div>
  </footer>
)

export default Footer
