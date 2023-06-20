import styles from "./PassingJSXInAChildren.module.css";

export default function PassingJSXInAChildren() {
  return (
    <>
      <h2>Challenge 3 of 3: Passing JSX in a children prop</h2>
      <Profile />
    </>
  );
}

function Profile() {
  return (
    <>
      <Card title="Photo">
        <img
          className={styles.avatar}
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>

      <Card title="About">
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </>
  );
}

function Card({ children, title }) {
  return (
    <div className={styles.card}>
      <div className={styles["card-content"]}>
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    </div>
  );
}
