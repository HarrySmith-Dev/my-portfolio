import { NavLink } from 'react-router-dom'

import {
  bottomNavigationContainer,
  bottomNavigationContentContainer,
  bottomNavigationIcon,
  bottomNavigationLinks,
  bottomNavigationLinksActive,
  bottomNavigationLinksContainer,
  bottomNavigationListItem,
} from './BottomNavigation.css'
import navigationLinksData from './navigationLinks'

const BottomNavigation = () => (
  <nav className={bottomNavigationContainer}>
    <ul className={bottomNavigationLinksContainer}>
      {navigationLinksData.map(({ url, label, iconSrc }) => (
        <li
          className={bottomNavigationListItem}
          key={`${label}-bottom-navigation`}
        >
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
                <p
                  className={
                    isActive
                      ? bottomNavigationLinksActive
                      : bottomNavigationLinks
                  }
                >
                  {label}
                </p>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)

export default BottomNavigation
