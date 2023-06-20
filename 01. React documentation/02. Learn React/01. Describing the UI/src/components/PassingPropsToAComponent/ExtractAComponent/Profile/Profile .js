import { getImageUrl } from "../utils";
import styles from "./Profile.module.css";

export default function Profile({ person, imageSize }) {
  return (
    <section className={styles.profile}>
      <h2>{person.name}</h2>
      <img
        className={styles.avatar}
        src={getImageUrl(person.imgId)}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>({person.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovered}
        </li>
      </ul>
    </section>
  );
}
