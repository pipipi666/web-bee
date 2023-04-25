import styles from "./container.module.scss";
import ContainerArrow from "../UI/Icons/container-arrow";
import ContainerRefresh from "../UI/Icons/container-refresh";
import ContainerClose from "../UI/Icons/container-close";
import { useState } from "react";

type Props = {
  title: string;
  children: JSX.Element | string;
};

export default function Container({ title, children }: Props) {
  const [isOpen, setOpen] = useState(true);

  const clickArrow = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title__wrapper}>
        <span className={styles.title}>{title}</span>
        <ul className={styles.controls}>
          <li>
            <button
              className={`${styles.btn} ${!isOpen && styles.arrow__up}`}
              onClick={clickArrow}
            >
              <ContainerArrow />
            </button>
          </li>
          <li>
            <button className={styles.btn}>
              <ContainerRefresh />
            </button>
          </li>
          <li>
            <button className={styles.btn}>
              <ContainerClose />
            </button>
          </li>
        </ul>
      </div>
      <div className={`${styles.content__wrapper} ${!isOpen && styles.hidden}`}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
