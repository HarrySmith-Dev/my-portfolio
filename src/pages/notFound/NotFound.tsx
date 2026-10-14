import { Link } from 'react-router-dom'

import {
  bodyText,
  pageContainer,
  pageHeading,
  textLink,
} from '@/styles/shared.css'

const NotFound = () => (
  <section className={pageContainer}>
    <title>Page not found | Harry Smith</title>
    <meta name="robots" content="noindex" />
    <h1 className={pageHeading}>Page not found</h1>
    <p className={bodyText}>
      Sorry, I couldn&apos;t find the page you were looking for.
    </p>
    <p className={bodyText}>
      <Link to="/" className={textLink}>
        Go to the home page
      </Link>
    </p>
  </section>
)

export default NotFound
