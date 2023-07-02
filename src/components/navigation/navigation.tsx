import styles from "./navigation.module.scss";
import { NavLink } from "react-router-dom";
import ClockIcon from "../UI/Icons/navigation/clock";
import NotesIcon from "../UI/Icons/navigation/notes";
import FriendsIcon from "../UI/Icons/navigation/friends";
import PhotosIcon from "../UI/Icons/navigation/photos";
import SettingsIcon from "../UI/Icons/navigation/settings";
import ActivityIcon from "../UI/Icons/navigation/activity";
import MenuArrow from "../UI/Icons/navigation/menu-arrow";
import { ROUTES } from "utils/routes";
import MapIcon from "../UI/Icons/navigation/map";
import clsx from "clsx";

export default function Navigation() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li>
            <NavLink
              className={({ isActive }) =>
                clsx(styles.link, isActive && styles.active)
              }
              to={ROUTES.PROFILE}
            >
              <ActivityIcon />
              <span className={styles.link__name}>Activity</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                clsx(styles.link, isActive && styles.active)
              }
              to={ROUTES.MAP}
            >
              <MapIcon />
              <span className={styles.link__name}>Map</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                clsx(styles.link, isActive && styles.active)
              }
              to={ROUTES.TIME}
            >
              <ClockIcon />
              <span className={styles.link__name}>Time</span>
            </NavLink>
          </li>
        </ul>
        <ul className={styles.links}>
          <li>
            <NavLink className={styles.link} to="/">
              <NotesIcon />
              <span className={styles.link__name}>Notes</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/">
              <FriendsIcon />
              <span className={styles.link__name}>Friends</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/">
              <PhotosIcon />
              <span className={styles.link__name}>Photos</span>
            </NavLink>
          </li>
          <li>
            <button className={styles.menu}>
              <SettingsIcon />
              <MenuArrow />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
