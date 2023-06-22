import { Fragment } from "react";
import styles from './ListWithASeparator.module.css'

export default function ListWithASeparator() {
  return (
    <>
      <h2>Challenge 4 of 4: List with a separator</h2>
      <Poem />
    </>
  );
}

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

function Poem() {
  return (
    <article className={styles.poem}>
      {poem.lines.map((line, index) => (
        <Fragment key={index}>
          <p>{line}</p>
          {index < poem.lines.length - 1 && <hr />}
        </Fragment>
      ))}
    </article>
  );
}
