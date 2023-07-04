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
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div>
      {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = styles['counter'];
  if (hover) {
    className += ` ${styles['hover']}`;
  }
  if (isFancy) {
    className += ` ${styles['fancy']}`;
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}
