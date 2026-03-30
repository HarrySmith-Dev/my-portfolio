import ContactIcon from "../../assets/ContactIcon.svg";
import HomeIcon from "../../assets/HomeIcon.svg";
import PersonIcon from "../../assets/PersonIcon.svg";
import ProjectsIcon from "../../assets/ProjectsIcon.svg";
import type { NavigationLinksData } from "../types/SharedTypes";

const navigationLinksData: NavigationLinksData[] = [
  {
    url: "/",
    label: "Home",
    iconSrc: HomeIcon,
  },
  {
    url: "/about",
    label: "About",
    iconSrc: PersonIcon,
  },
  {
    url: "/projects",
    label: "Projects",
    iconSrc: ProjectsIcon,
  },
  {
    url: "/contact",
    label: "Contact",
    iconSrc: ContactIcon,
  },
];

export default navigationLinksData;
