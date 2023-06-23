import useTime from "../../hooks/useTime";
import styles from "./FixABrokenClock.module.css";

export default function FixABrokenClock() {
  return (
    <>
      <h2>Challenge 1 of 3: Fix a broken clock </h2>
      <App />
    </>
  );
}

function Clock({ time }) {
  let hours = time.getHours();
  let currClass = styles["day"];

  if (hours >= 0 && hours <= 6) {
    currClass = styles["night"];
  }

  return <h1 className={currClass}>{time.toLocaleTimeString()}</h1>;
}

function App() {
  const time = useTime();
  return <Clock time={time} />;
}
