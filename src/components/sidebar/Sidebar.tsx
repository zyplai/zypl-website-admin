import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import RateReviewIcon from "@mui/icons-material/RateReview";
import GroupIcon from "@mui/icons-material/Group";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  {
    href: "/",
    label: "Dashboard",
    icon: <DashboardIcon className="icon" />,
  },
  {
    href: "/home",
    label: "Home",
    icon: <HomeIcon className="icon" />,
    desc: "LISTS",
  },
  {
    href: "/ecosystem",
    label: "Ecosystem",
    icon: <SettingsSuggestIcon className="icon" />,
  },
  {
    href: "/news",
    label: "News",
    icon: <NewspaperIcon className="icon" />,
  },
  {
    href: "/vacancy",
    label: "Vacancy",
    icon: <RateReviewIcon className="icon" />,
  },
  {
    href: "/contact",
    label: "Contact us",
    icon: <PermContactCalendarIcon className="icon" />,
  },
  {
    href: "/about",
    label: "About us",
    icon: <GroupIcon className="icon" />,
  },
  {
    href: "/logout",
    label: "Logout",
    icon: <ExitToAppIcon className="icon" />,
    desc: "USER",
  },
];
const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Zypl.ai admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          {NAV_LINKS.map((link) => {
            const isActive = link.href === location.pathname;
            return (
              <>
                {link.desc && <p className="title">{link?.desc}</p>}
                <Link to={link.href} style={{ textDecoration: "none" }}>
                  <li className={isActive ? "active" : ""}>
                    <span className="icon">{link.icon}</span>
                    <span>{link.label}</span>
                  </li>
                </Link>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
