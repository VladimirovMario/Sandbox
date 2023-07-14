import { useEffect, useState } from 'react';

export default function FixAnIntervalThatFiresTwice() {
  return (
    <>
      <h2>Challenge 3 of 4: Fix an interval that fires twice</h2>
      <Form />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount((c) => c + 1);
    }

    const intervalId = setInterval(onTick, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h1>{count}</h1>;
}

function Form() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} counter
      </button>
      <br />
      <hr />
      {show && <Counter />}
    </>
  );
}
