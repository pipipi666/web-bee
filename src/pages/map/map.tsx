import styles from "./map.module.scss";
import Container from "../../components/container/container";
import PreloaderIcon from "../../components/UI/Icons/preloader";

export default function MapPage() {
  return (
    <Container title="Basic map">
      <div className={styles.map}>
        <div className={styles.preloader}>
          <PreloaderIcon />
        </div>
      </div>
    </Container>
  );
}
