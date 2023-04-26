import styles from "./profile-nav.module.scss";
import { TProfile } from "../../utils/types";
import { NavLink } from "react-router-dom";
import ProfileIcon from "../UI/Icons/navigation/profile";
import BalanceIcon from "../UI/Icons/navigation/balance";
import ConnectionsIcon from "../UI/Icons/navigation/connections";
import FriendsIcon from "../UI/Icons/navigation/friends";
import EventsIcon from "../UI/Icons/navigation/events";
import SettingsIcon from "../UI/Icons/navigation/settings";
import Container from "../container/container";

export default function ProfileNav({ balance, connections, events }: TProfile) {
  return (
    <Container title="Navigation" size="s">
      <nav>
        <ul className={styles.nav__list}>
          <li className={styles.nav__list__item}>
            <NavLink className={styles.link} to="/">
              <ProfileIcon />
              <span className={styles.link__name}>My Profile</span>
            </NavLink>
          </li>
          <li className={styles.nav__list__item}>
            <NavLink className={styles.link} to="/">
              <BalanceIcon />
              <span className={styles.link__name}>Balance</span>
            </NavLink>
            <span className={styles.balance}>$ {balance}</span>
          </li>
          <li className={styles.nav__list__item}>
            <NavLink className={styles.link} to="/">
              <ConnectionsIcon />
              <span className={styles.link__name}>Connections</span>
            </NavLink>
            <div className={styles.connections}>{connections}</div>
          </li>
          <li className={styles.nav__list__item}>
            <NavLink className={styles.link} to="/">
              <FriendsIcon />
              <span className={styles.link__name}>Friends</span>
            </NavLink>
          </li>
        </ul>
        <ul className={`${styles.nav__list} ${styles.nav__list__bottom}`}>
          <li className={styles.nav__list__item}>
            <NavLink className={styles.link} to="/">
              <EventsIcon />
              <span className={styles.link__name}>Events</span>
            </NavLink>
            <div className={styles.events}>{events}</div>
          </li>
          <li className={styles.nav__list__item}>
            <NavLink className={styles.link} to="/">
              <SettingsIcon />
              <span className={styles.link__name}>Account settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
