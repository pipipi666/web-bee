import styles from "./header.module.scss";
import BackArrow from "../UI/Icons/back-arrow";
import Statistics from "../UI/Icons/statistics";
import Invoices from "../UI/Icons/invoices";
import Schedule from "../UI/Icons/schedule";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.breadcrumbs}>
          <NavLink to="/">
            <BackArrow />
          </NavLink>
          <div className={styles.breadcrumbs__pages}>
            <NavLink className={styles.previous} to="/">
              User pages
            </NavLink>
            <span> - Profile</span>
          </div>
        </div>
        <ul className={styles.links}>
          <li>
            <NavLink className={styles.link} to="/">
              <span className={styles.icon__wrapper}>
                <Statistics />
              </span>
              <span className={styles.link__name}>Statistics</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/">
              <span className={styles.icon__wrapper}>
                <Invoices />
              </span>
              <span className={styles.link__name}>Invoices</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/">
              <span className={styles.icon__wrapper}>
                <Schedule />
              </span>
              <span className={styles.link__name}>Schedule</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
