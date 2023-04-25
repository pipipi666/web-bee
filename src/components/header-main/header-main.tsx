import styles from "./header-main.module.scss";
import BackArrow from "../UI/Icons/back-arrow";
import Statistics from "../UI/Icons/statistics";
import Invoices from "../UI/Icons/invoices";
import Schedule from "../UI/Icons/schedule";
import { NavLink } from "react-router-dom";

export default function HeaderMain() {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.breadcrumbs}>
          <NavLink to="/">
            <BackArrow />
          </NavLink>
          <div>
            <NavLink className={styles.previous} to="/">
              User pages
            </NavLink>
            <span> - Profile</span>
          </div>
        </div>
        <div className={styles.links}>
          <NavLink className={styles.link} to="/">
            <span className={styles.icon__wrapper}>
              <Statistics />
            </span>
            <span className={styles.link__name}>Statistics</span>
          </NavLink>
          <NavLink className={styles.link} to="/">
            <span className={styles.icon__wrapper}>
              <Invoices />
            </span>
            <span className={styles.link__name}>Invoices</span>
          </NavLink>
          <NavLink className={styles.link} to="/">
            <span className={styles.icon__wrapper}>
              <Schedule />
            </span>
            <span className={styles.link__name}>Schedule</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
