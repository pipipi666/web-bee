import PreloaderIcon from "components/UI/Icons/preloader";
import styles from "./preloader.module.scss";

export default function Preloader() {
  return (
    <div className={styles.preloader__wrapper}>
      <div className={styles.preloader}>
        <PreloaderIcon />
      </div>
    </div>
  );
}
