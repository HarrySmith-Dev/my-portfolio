import { useLocation } from "react-router-dom";

import ProjectsIcon from "../../assets/ProjectsIcon.svg";
import navigationLinksData from "../navigation/navigationLinks";
import {
  comingSoonContainer,
  comingSoonIcon,
  comingSoonTitle,
} from "./ComingSoon.css";

const ComingSoon = () => {
  const { pathname } = useLocation();
  const pageLabel =
    navigationLinksData.find(({ url }) => url === pathname)?.label ?? "";

  return (
    <section className={comingSoonContainer}>
      <img className={comingSoonIcon} src={ProjectsIcon} alt="Projects" />
      <h1 className={comingSoonTitle}>
        {`Coming soon!${pageLabel ? ` /${pageLabel}` : ""}`}
      </h1>
    </section>
  );
};

export default ComingSoon;
