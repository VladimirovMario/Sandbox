// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations
import { useState } from 'react';
import styles from './PlainCSSAnimation.module.css';

export default function PlainCSSAnimation() {
  return (
    <>
      <h2>More efficient to implement with a plain CSS Animation</h2>
      <App />
    </>
  );
}

function Welcome() {
  return <h1 className={styles.welcome}>Welcome</h1>;
}

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? 'Remove' : 'Show'}</button>
      <hr />
      {show && <Welcome />}
    </>
  );
}
