import styles from "./map-location.module.scss";
import Container from "components/container/container";
import PreloaderIcon from "components/UI/Icons/preloader";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useState } from "react";
import { location } from "utils/user-info/location";

export default function MapPage() {
  const [mark, setMark] = useState<number[]>();

  const onLoad = () => {
    setMark(location.mark);
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
        {!mark && preloader}
        <YMaps>
          <Map
            className={styles.map}
            defaultState={{
              center: location.default,
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
