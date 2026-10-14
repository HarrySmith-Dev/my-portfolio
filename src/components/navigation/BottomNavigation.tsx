import { NavLink } from 'react-router-dom'

import {
  bottomNavigationContainer,
  bottomNavigationContentContainer,
  bottomNavigationIcon,
  bottomNavigationLinks,
  bottomNavigationLinksActive,
  bottomNavigationLinksContainer,
} from './BottomNavigation.css'
import navigationLinksData from './navigationLinks'

const BottomNavigation = () => (
  <nav className={bottomNavigationContainer}>
    <ul className={bottomNavigationLinksContainer}>
      {navigationLinksData.map(({ url, label, iconSrc }) => (
        <li key={`${label}-bottom-navigation`}>
          <NavLink
            to={url}
            end={url === '/'}
            className={bottomNavigationContentContainer}
          >
            {({ isActive }) => (
              <>
                {iconSrc && (
                  <img className={bottomNavigationIcon} src={iconSrc} alt="" />
                )}
                <span
                  className={
                    isActive
                      ? bottomNavigationLinksActive
                      : bottomNavigationLinks
                  }
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)

export default BottomNavigation
