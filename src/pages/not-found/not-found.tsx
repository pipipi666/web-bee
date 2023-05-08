import styles from "./not-found.module.scss";

export default function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.code}>404</div>
      <div className={styles.message}>Страница не найдена</div>
    </div>
  );
}
