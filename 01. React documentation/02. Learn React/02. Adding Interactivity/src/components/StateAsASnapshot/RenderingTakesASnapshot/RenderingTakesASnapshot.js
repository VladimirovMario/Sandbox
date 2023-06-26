import { useState } from 'react';

export default function RenderingTakesASnapshot() {
  return (
    <>
      <h2>Rendering takes a snapshot in time</h2>
      <Counter />
    </>
  );
}

function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
