import styles from "./avatar.module.scss";
import { TProfile } from "../../utils/types";
import TelegramIcon from "../UI/Icons/media/telegram";
import HHIcon from "../UI/Icons/media/hh";
import TwitterIcon from "../UI/Icons/media/twitter";
import { Link } from "react-router-dom";

export default function Avatar({ image, name, profession, media }: TProfile) {
  return (
    <section className={styles.avatar}>
      <img className={styles.img} src={image} alt="avatar" />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.profession}>{profession}</div>
      </div>
      {Object.values(media) && (
        <ul className={styles.media}>
          {media.telegram && (
            <li>
              <Link to={media.telegram}>
                <TelegramIcon />
              </Link>
            </li>
          )}
          {media.hh && (
            <li className={styles.media__item}>
              <Link to={media.hh}>
                <HHIcon />
              </Link>
            </li>
          )}
          {media.twitter && (
            <li className={styles.media__item}>
              <Link to={media.twitter}>
                <TwitterIcon />
              </Link>
            </li>
          )}
        </ul>
      )}
    </section>
  );
}
