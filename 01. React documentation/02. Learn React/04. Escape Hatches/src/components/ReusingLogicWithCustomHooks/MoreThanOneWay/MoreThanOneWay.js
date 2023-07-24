import { useState, useRef } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import styles from './MoreThanOneWay.module.css';

export default function MoreThanOneWay() {
  return (
    <>
      <h2>There is more than one way to do it</h2>
      <App />
    </>
  );
}

function Welcome() {
  const ref = useRef(null);
  const duration = 1000;

  useFadeIn(ref, duration);

  return (
    <>
      <h1 ref={ref} className={styles.welcome}>
        Welcome
      </h1>
    </>
  );
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={(e) => setShow(!show)}>
        {show ? 'Remove' : 'Show'}
      </button>
      <hr />
      {show && <Welcome />}
    </>
  );
}
