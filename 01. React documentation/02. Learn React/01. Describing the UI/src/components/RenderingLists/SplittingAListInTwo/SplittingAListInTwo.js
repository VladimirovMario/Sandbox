import { getImageUrl } from "../../../utils/getImageUrl";
import { people } from "../data";
import styles from "./SplittingAListInTwo.module.css";

export default function SplittingAListInTwo() {
  return (
    <>
      <h2>Challenge 1 of 4: Splitting a list in two</h2>
      <Scientists />
    </>
  );
}

function filteringByProfession(profession) {
  const chemists = [];
  const everyoneElse = [];

  people.forEach((p) =>
    p.profession === profession ? chemists.push(p) : everyoneElse.push(p)
  );
  return { chemists, everyoneElse };
}

const { chemists, everyoneElse } = filteringByProfession("chemist");

function Scientists() {
  return (
    <article className={styles.container}>
      <List person={chemists} title="Chemists" />
      <List person={everyoneElse} title="Everyone Else" />
    </article>
  );
}

function List({ person, title }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {person.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {` ${person.profession} `}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
