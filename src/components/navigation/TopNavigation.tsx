import { Link, NavLink } from "react-router-dom";

import LogoIcon from "../../assets/NavImage.jpeg";
import navigationLinksData from "./navigationLinks";
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
} from "./TopNavigation.css";

const TopNavigation = () => (
  <header>
    <nav className={navigationContainer}>
      <div className={navigationContentWrapper}>
        <Link to="/" className={navigationLogoContainer}>
          <img className={navigationLogo} src={LogoIcon} alt="Harry Smith" />
        </Link>
        <div className={navigationItemsContainer}>
          <Link to="/" className={navigationLinkTextContainer}>
            <h1 className={navigationLinkText}>Harry Smith</h1>
          </Link>
          <ul className={navigationLinksContainer}>
            {navigationLinksData.map(({ url, label }) => (
              <li
                className={navigationLinksWrapper}
                key={`${label}-top-navigation`}
              >
                <NavLink to={url} end={url === "/"} className={navigationLinks}>
                  {({ isActive }) => (
                    <p
                      className={[
                        navigationLabel,
                        isActive ? navigationLabelActive : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
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
);

export default TopNavigation;
