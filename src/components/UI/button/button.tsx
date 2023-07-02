import styles from "./button.module.scss";

type TButtonProps = {
  children: string;
  onClick?: () => void;
};

export default function Button({ children }: TButtonProps) {
  return <button className={styles.btn}>{children}</button>;
}
