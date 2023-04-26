import styles from "./button.module.scss";

type TProps = {
  children: string;
  onClick?: () => void;
};

export default function Button({ children }: TProps) {
  return <button className={styles.btn}>{children}</button>;
}
