import styles from "./header-secondary.module.scss";
import { NavLink } from "react-router-dom";
import Map from "../UI/Icons/map";
import Clock from "../UI/Icons/clock";
import Notes from "../UI/Icons/notes";
import Friends from "../UI/Icons/friends";
import Photos from "../UI/Icons/photos";
import Settings from "../UI/Icons/settings";
import Activity from "../UI/Icons/activity";
import MenuArrow from "../UI/Icons/menu-arrow";

export default function HeaderSecondary() {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.links}>
          <NavLink className={styles.link} to="/">
            <Activity />
            <span className={styles.link__name}>Activity</span>
          </NavLink>
          <NavLink className={styles.link} to="/">
            <Map />
            <span className={styles.link__name}>Map</span>
          </NavLink>
          <NavLink className={styles.link} to="/">
            <Clock />
            <span className={styles.link__name}>Time</span>
          </NavLink>
        </div>
        <div className={styles.links}>
          <NavLink className={styles.link} to="/">
            <Notes />
            <span className={styles.link__name}>Notes</span>
          </NavLink>
          <NavLink className={styles.link} to="/">
            <Friends />
            <span className={styles.link__name}>Friends</span>
          </NavLink>
          <NavLink className={styles.link} to="/">
            <Photos />
            <span className={styles.link__name}>Photos</span>
          </NavLink>
          <button className={styles.menu}>
            <Settings />
            <MenuArrow />
          </button>
        </div>
      </div>
    </div>
  );
}
