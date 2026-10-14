import { Link, NavLink } from 'react-router-dom'

import ProfilePhoto from '@/assets/ProfilePhoto.webp'
import navigationLinksData from './navigationLinks'
import {
  navigationContainer,
  navigationContentWrapper,
  navigationItemsContainer,
  navigationLabel,
  navigationLinks,
  navigationLinksContainer,
  navigationLinkText,
  navigationLinkTextContainer,
  navigationLogo,
  navigationLogoContainer,
  navigationLabelActive,
} from './TopNavigation.css'

const TopNavigation = () => (
  <header>
    <nav className={navigationContainer}>
      <div className={navigationContentWrapper}>
        <Link to="/" className={navigationLogoContainer}>
          <img
            className={navigationLogo}
            src={ProfilePhoto}
            alt="Harry Smith"
            width={150}
            height={150}
          />
        </Link>
        <div className={navigationItemsContainer}>
          <Link to="/" className={navigationLinkTextContainer}>
            <span className={navigationLinkText}>Harry Smith</span>
          </Link>
          <ul className={navigationLinksContainer}>
            {navigationLinksData.map(({ url, label }) => (
              <li key={`${label}-top-navigation`}>
                <NavLink to={url} end={url === '/'} className={navigationLinks}>
                  {({ isActive }) => (
                    <span
                      className={
                        isActive ? navigationLabelActive : navigationLabel
                      }
                    >
                      {label}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default TopNavigation
