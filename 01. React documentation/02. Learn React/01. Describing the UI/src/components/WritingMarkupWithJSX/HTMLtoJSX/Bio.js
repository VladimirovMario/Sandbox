import styles from './Bio.module.css'

export default function Bio() {
  return (
    <>
      <h2>Challenge 1 of 1: Convert some HTML to JSX </h2>
      <div className={styles.intro}>
        <h3>Welcome to my website!</h3>
      </div>
      <p className={styles.summary}>
        You can find my thoughts here.
        <br />
        <b>
          And <i>pictures</i> of scientists
        </b>
      </p>
    </>
  );
}
