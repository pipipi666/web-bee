import styles from "./layout.module.scss";

type TLayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: TLayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}
