import styles from "./layout.module.scss";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return <div className={styles.layout}>{children}</div>;
}
