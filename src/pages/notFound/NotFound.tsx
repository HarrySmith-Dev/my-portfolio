import { Link } from 'react-router-dom'

import {
  notFoundContainer,
  notFoundHeading,
  notFoundLink,
  notFoundText,
} from './NotFound.css'

const NotFound = () => (
  <>
    <title>Page not found | Harry Smith</title>
    <meta name="robots" content="noindex" />
    <section className={notFoundContainer}>
      <h1 className={notFoundHeading}>Page not found</h1>
      <p className={notFoundText}>
        Sorry, I couldn&apos;t find the page you were looking for.
      </p>
      <Link to="/" className={notFoundLink}>
        Go to the home page
      </Link>
    </section>
  </>
)

export default NotFound
