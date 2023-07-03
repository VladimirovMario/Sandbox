import { useState } from 'react';
import styles from './StateIsTide.module.css';

export default function StateIsTied() {
  return (
    <>
      <h2>State is tied to a position in the tree</h2>
      <App />
    </>
  );
}

function App() {
  const [showSecond, setShowSecond] = useState(true);
  return (
    <div>
      <Counter />
      {showSecond && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={showSecond}
          onChange={(e) => setShowSecond(e.target.checked)}
        />
        Render the second counter
      </label>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = styles['counter'];
  if (hover) {
    className += ` ${styles['hover']}`;
  }

  return (
    <div
      className={className}
      onPointerMove={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h3>{score}</h3>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}
