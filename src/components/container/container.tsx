import styles from "./container.module.scss";
import ContainerArrow from "../UI/Icons/container-arrow";
import ContainerRefresh from "../UI/Icons/container-refresh";
import ContainerClose from "../UI/Icons/container-close";
import { useState } from "react";

type TProps = {
  title: string;
  size?: string;
  children: JSX.Element | string;
  onRefresh?: () => void;
  onClose?: () => void;
};

export default function Container({
  title,
  size = "m",
  children,
  onRefresh,
  onClose,
}: TProps) {
  const [isOpen, setOpen] = useState(true);

  const clickArrow = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.title__wrapper} ${
          size === "s" ? styles.title__wrapper__s : ""
        } `}
      >
        <span className={styles.title}>{title}</span>
        <ul className={styles.controls}>
          <li>
            <button
              className={`${styles.btn} ${!isOpen ? styles.arrow__up : ""}`}
              onClick={clickArrow}
            >
              <ContainerArrow />
            </button>
          </li>
          {onRefresh && (
            <li>
              <button className={styles.btn}>
                <ContainerRefresh />
              </button>
            </li>
          )}
          {onClose && (
            <li>
              <button className={styles.btn}>
                <ContainerClose />
              </button>
            </li>
          )}
        </ul>
      </div>
      <div
        className={`${styles.content__wrapper} ${
          size === "m" ? styles.content__wrapper__m : ""
        } ${!isOpen ? styles.hidden : ""}`}
      >
        <div className={size === "m" ? styles.content : ""}>{children}</div>
      </div>
    </div>
  );
}
