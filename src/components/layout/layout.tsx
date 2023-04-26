import styles from "./layout.module.scss";

type TProps = {
  children: JSX.Element;
};

export default function Layout({ children }: TProps) {
  return <div className={styles.layout}>{children}</div>;
}
