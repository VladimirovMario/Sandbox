import { useState, useEffect } from 'react';

export default function FixAVariableThatDoesNotUpdate() {
  return (
    <>
      <h2>Challenge 1 of 4: Fix a variable that doesn’t update</h2>
      <Timer />
    </>
  );
}

function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + increment);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [increment]);

  return (
    <>
      <h3>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h3>
      <hr />
      <p>
        Every second, increment by:
        <button
          disabled={increment === 0}
          onClick={() => {
            setIncrement((i) => i - 1);
          }}
        >
          -
        </button>
        <b>{increment}</b>
        <button
          onClick={() => {
            setIncrement((i) => i + 1);
          }}
        >
          +
        </button>
      </p>
    </>
  );
}
