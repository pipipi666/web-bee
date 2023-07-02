import styles from "./container.module.scss";
import ContainerArrow from "../UI/Icons/container-arrow";
import ContainerRefresh from "../UI/Icons/container-refresh";
import { ReactNode, useState } from "react";
import clsx from "clsx";

type TContainerProps = {
  title: string;
  size?: string;
  children: ReactNode;
  onRefresh?: () => void;
};

export default function Container({
  title,
  size = "m",
  children,
  onRefresh,
}: TContainerProps) {
  const [isOpen, setOpen] = useState(true);

  const onArrowClick = () => {
    setOpen(!isOpen);
  };

  return (
    <section className={styles.container}>
      <div
        className={clsx(
          styles.title__wrapper,
          size === "s" && styles.title__wrapper__s
        )}
      >
        <span className={styles.title}>{title}</span>
        <ul className={styles.controls}>
          <li>
            <button
              className={clsx(styles.btn, !isOpen && styles.arrow__up)}
              onClick={onArrowClick}
            >
              <ContainerArrow />
            </button>
          </li>
          {onRefresh && (
            <li>
              <button className={styles.btn} onClick={onRefresh}>
                <ContainerRefresh />
              </button>
            </li>
          )}
        </ul>
      </div>
      <div
        className={clsx(
          styles.content__wrapper,
          size === "m" && styles.content__wrapper__m,
          !isOpen && styles.hidden
        )}
      >
        <div className={clsx(size === "m" && styles.content)}>{children}</div>
      </div>
    </section>
  );
}
