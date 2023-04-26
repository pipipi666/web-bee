import styles from "./profile.module.scss";
import Container from "../../components/container/container";
import Avatar from "../../components/avatar/avatar";
import { profile } from "../../utils/profile";
import ProfileNav from "../../components/profile-nav/profile-nav";

export default function ProfilePage() {
  return (
    <div className={styles.content}>
      <div className={styles.posts}>
        <Container title="Contacts">Contacts</Container>
        <Container title="Skills">Skills</Container>
      </div>
      <div className={styles.profile}>
        <Avatar {...profile} />
        <ProfileNav {...profile} />
      </div>
    </div>
  );
}
