import { people } from "./data";
import { getImageUrl } from "../../../utils/getImageUrl";
import styles from "./RenderingDataFromArrays.module.css";

export default function RenderingDataFromArrays() {
  return (
    <>
      <h2>Rendering data from arrays</h2>
      <List />
    </>
  );
}

function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {` ${person.profession} `}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul className={styles.container}>{listItems}</ul>;
}
