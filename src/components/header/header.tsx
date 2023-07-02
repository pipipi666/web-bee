import styles from "./header.module.scss";
import BackArrowIcon from "../UI/Icons/header/back-arrow";
import StatisticsIcon from "../UI/Icons/header/statistics";
import InvoicesIcon from "../UI/Icons/header/invoices";
import ScheduleIcon from "../UI/Icons/header/schedule";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.breadcrumbs}>
          <NavLink to="/">
            <BackArrowIcon />
          </NavLink>
          <div className={styles.breadcrumbs__pages}>
            <NavLink className={styles.previous} to="/">
              User pages
            </NavLink>
            <span> - Profile</span>
          </div>
        </div>
        <nav>
          <ul className={styles.links}>
            <li>
              <NavLink className={styles.link} to="/">
                <span className={styles.icon__wrapper}>
                  <StatisticsIcon />
                </span>
                <span className={styles.link__name}>Statistics</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/">
                <span className={styles.icon__wrapper}>
                  <InvoicesIcon />
                </span>
                <span className={styles.link__name}>Invoices</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to="/">
                <span className={styles.icon__wrapper}>
                  <ScheduleIcon />
                </span>
                <span className={styles.link__name}>Schedule</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
