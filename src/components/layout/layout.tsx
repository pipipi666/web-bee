import styles from "./layout.module.scss";

export default function Layout(props: any) {
  return <div className={styles.layout}>{props.children}</div>;
}
