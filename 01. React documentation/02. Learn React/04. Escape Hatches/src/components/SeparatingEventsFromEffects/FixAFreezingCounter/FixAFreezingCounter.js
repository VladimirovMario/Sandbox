import { useState, useEffect } from 'react';
// import { experimental_useEffectEvent as useEffectEvent } from 'react';

export default function FixAFreezingCounter() {
  return (
    <>
      <h2>Challenge 2 of 4: Fix a freezing counter</h2>
      <Timer />
    </>
  );
}

function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  // const onTick = useEffectEvent(() => {
  //   setCount((c) => c + increment);
  // });

  useEffect(() => {
    const id = setInterval(() => {
      // onTick();
      setCount((c) => c + increment);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [increment]);

  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
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
