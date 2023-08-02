import { useState } from 'react';

export default function PassingNheNextStateDirectly() {
  return (
    <>
      <h2>Example 2 of 2: Passing the next state directly</h2>
      <Counter />
    </>
  );
}

function Counter() {
  const [age, setAge] = useState(42);

  function increment() {
    setAge(age + 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
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
