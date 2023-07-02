import styles from "./map-location.module.scss";
import Container from "components/container/container";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useState } from "react";
import { location } from "utils/user-info/location";
import Preloader from "components/preloader/preloader";

export default function MapPage() {
  const [mark, setMark] = useState<number[]>();

  const onLoad = () => {
    setMark(location.mark);
  };

  return (
    <Container title="Basic map">
      <div className={styles.map__wrapper}>
        {!mark && <Preloader />}
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
