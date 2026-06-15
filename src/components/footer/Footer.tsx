import {
  footerBackgroundContainer,
  footerContainer,
  footerLink,
  footerLinkPurple,
  footerText,
  footerTextContainer,
} from './Footer.css'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <footer className={footerBackgroundContainer}>
    <div className={footerContainer}>
      <div className={footerTextContainer}>
        <p className={footerText}>&copy; {currentYear} Harry Smith.</p>
        <p className={footerText}>
          Built with{' '}
          <a
            target="_blank"
            href="https://vitejs.dev/"
            rel="noreferrer"
            className={footerLinkPurple}
          >
            Vite
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            href="https://react.dev/"
            rel="noreferrer"
            className={footerLink}
          >
            React
          </a>
          .
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
