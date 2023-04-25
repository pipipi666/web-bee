import styles from "./navigation.module.scss";
import { NavLink } from "react-router-dom";
import Map from "../UI/Icons/map";
import Clock from "../UI/Icons/clock";
import Notes from "../UI/Icons/notes";
import Friends from "../UI/Icons/friends";
import Photos from "../UI/Icons/photos";
import Settings from "../UI/Icons/settings";
import Activity from "../UI/Icons/activity";
import MenuArrow from "../UI/Icons/menu-arrow";
import { ROUTES } from "../../consts/routes";

export default function Navigation() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li>
            <NavLink className={styles.link} to={ROUTES.PROFILE}>
              <Activity />
              <span className={styles.link__name}>Activity</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to={ROUTES.MAP}>
              <Map />
              <span className={styles.link__name}>Map</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to={ROUTES.TIME}>
              <Clock />
              <span className={styles.link__name}>Time</span>
            </NavLink>
          </li>
        </ul>
        <ul className={styles.links}>
          <li>
            <NavLink className={styles.link} to="/">
              <Notes />
              <span className={styles.link__name}>Notes</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/">
              <Friends />
              <span className={styles.link__name}>Friends</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/">
              <Photos />
              <span className={styles.link__name}>Photos</span>
            </NavLink>
          </li>
          <li>
            <button className={styles.menu}>
              <Settings />
              <MenuArrow />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
