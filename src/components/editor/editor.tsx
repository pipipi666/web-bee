import styles from "./editor.module.scss";
import Container from "../container/container";
import Button from "../UI/button/button";

export default function Editor() {
  return (
    <Container title="Share your thoughts" size="s">
      <div className={styles.editor}>
        <textarea
          className={styles.textarea}
          rows={4}
          placeholder="Enter your message..."
        ></textarea>
        <Button>Save</Button>
      </div>
    </Container>
  );
}
