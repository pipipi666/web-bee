import styles from "./profile.module.scss";
import Container from "../../components/container/container";
import Avatar from "../../components/avatar/avatar";
import { profile } from "../../utils/profile";

export default function ProfilePage() {
  return (
    <div className={styles.content}>
      <div className={styles.posts}>
        <Container title="Contacts">Contacts</Container>
        <Container title="Skills">Skills</Container>
      </div>
      <div className={styles.profile}>
        <Avatar {...profile} />
        <Container title="Navigation">nav</Container>
      </div>
    </div>
  );
}
