import { Link } from 'react-router-dom'

import {
  bottomNavigationContainer,
  bottomNavigationContentContainer,
  bottomNavigationIcon,
  bottomNavigationLinks,
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
          <Link to={url} className={bottomNavigationContentContainer}>
            {iconSrc && (
              <img
                className={bottomNavigationIcon}
                src={iconSrc}
                alt={`${label} icon`}
              />
            )}
            <p className={bottomNavigationLinks}>{label}</p>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default BottomNavigation
