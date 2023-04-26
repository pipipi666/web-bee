import styles from "./profile.module.scss";
import Container from "../../components/container/container";
import Avatar from "../../components/avatar/avatar";
import { profile } from "../../utils/profile";
import ProfileNav from "../../components/profile-nav/profile-nav";
import Editor from "../../components/editor/editor";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        {profile.contacts && (
          <Container title="Contacts">
            <ul className={styles.contacts}>
              {profile.contacts?.tel && (
                <li>
                  <Link to={`tel:${profile.contacts.tel}`}>
                    {profile.contacts.tel}
                  </Link>
                </li>
              )}
              {profile.contacts?.email && (
                <li>
                  <Link to={`mailto:${profile.contacts.email}`}>
                    {profile.contacts.email}
                  </Link>
                </li>
              )}
            </ul>
          </Container>
        )}
        {profile.skills && (
          <Container title="Skills">
            <ul className={styles.skills}>
              {profile.skills?.map((skill, index) => (
                <li className={styles.skills__item} key={index}>
                  {skill}
                </li>
              ))}
            </ul>
          </Container>
        )}
      </div>
      <div className={styles.profile}>
        <Avatar {...profile} />
        <ProfileNav {...profile} />
        <Editor />
      </div>
    </div>
  );
}
