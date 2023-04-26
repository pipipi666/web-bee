import styles from "./map.module.scss";
import Container from "../../components/container/container";
import PreloaderIcon from "../../components/UI/Icons/preloader";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useState } from "react";
import { map } from "../../utils/map";

export default function MapPage() {
  const [loading, setLoading] = useState(true);
  const [mark, setMark] = useState<number[]>();

  const onLoad = () => {
    setLoading(false);
    setMark(map.mark);
  };

  const preloader = (
    <div className={styles.preloader__wrapper}>
      <div className={styles.preloader}>
        <PreloaderIcon />
      </div>
    </div>
  );

  return (
    <Container title="Basic map">
      <div className={styles.map__wrapper}>
        {loading && preloader}
        <YMaps>
          <Map
            className={styles.map}
            defaultState={{
              center: map.default,
              zoom: 10,
            }}
            onLoad={onLoad}
          >
            {mark && <Placemark geometry={mark} />}
          </Map>
        </YMaps>
      </div>
    </Container>
  );
}
