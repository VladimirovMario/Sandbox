import { useState } from 'react';

export default function FormExample() {
  return (
    <>
      <h2>Example 4 of 4: Form (two variables)</h2>
      <Form />
    </>
  );
}

function Form() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setAge((a) => a + 1);
        }}
      >
        Increment age
      </button>
      <p>
        Hello, {name}. You are {age} years old.
      </p>
    </>
  );
}
