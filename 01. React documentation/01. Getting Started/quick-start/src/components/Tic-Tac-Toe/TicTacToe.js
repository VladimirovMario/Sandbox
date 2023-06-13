import styles from "./TicTacToe.module.css";

function Square({ value }) {
  function handleClick() {
    console.log("first");
  }

  return (
    <button onClick={handleClick} className={styles.square}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className={styles["board-row"]}>
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className={styles["board-row"]}>
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div className={styles["board-row"]}>
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </>
  );
}
