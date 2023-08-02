import { useState } from 'react';

export default function PassingTheUpdaterFunction() {
  return (
    <>
      <h2>Example 1 of 2: Passing the updater function</h2>
      <Counter />
    </>
  );
}

function Counter() {
  const [age, setAge] = useState(42);

  function increment() {
    setAge((a) => a + 1);
  }

  return (
    <>
      <h3>Your age: {age}</h3>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
    </>
  );
}
