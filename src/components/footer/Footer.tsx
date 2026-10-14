import ExternalLink from '@/components/externalLink/ExternalLink'
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
        <ExternalLink href="https://vite.dev/" className={footerLinkVite}>
          Vite
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink href="https://react.dev/" className={textLink}>
          React
        </ExternalLink>
        .
      </p>
    </div>
  </footer>
)

export default Footer
