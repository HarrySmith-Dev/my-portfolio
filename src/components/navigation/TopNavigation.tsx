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
  navigationLinksWrapper,
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
            <p className={navigationLinkText}>Harry Smith</p>
          </Link>
          <ul className={navigationLinksContainer}>
            {navigationLinksData.map(({ url, label }) => (
              <li
                className={navigationLinksWrapper}
                key={`${label}-top-navigation`}
              >
                <NavLink to={url} end={url === '/'} className={navigationLinks}>
                  {({ isActive }) => (
                    <p
                      className={[
                        navigationLabel,
                        isActive ? navigationLabelActive : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {label}
                    </p>
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
