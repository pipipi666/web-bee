import styles from "./map.module.scss";
import Container from "../../components/container/container";
import PreloaderIcon from "../../components/UI/Icons/preloader";
import { YMaps, Map, Placemark } from "react-yandex-maps";
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
        <YMaps
          query={{
            ns: "use-load-option",
            load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
          }}
        >
          <Map
            className={styles.map}
            defaultState={{
              center: map.default,
              zoom: 10,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            onLoad={onLoad}
          >
            {mark && (
              <Placemark
                geometry={mark}
                modules={["geoObject.addon.balloon"]}
              />
            )}
          </Map>
        </YMaps>
      </div>
    </Container>
  );
}
