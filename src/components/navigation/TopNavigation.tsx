import React from "react";
import { Link } from "react-router-dom";

import LogoIcon from "../../assets/NavImage.png";
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
                <Link to={url} className={navigationLinks}>
                  <p className={navigationLabel}>{label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default TopNavigation;
