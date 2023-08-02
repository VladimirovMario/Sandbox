import { useState } from 'react';

export default function Counter() {
  return (
    <>
      <h2>Example 1 of 4: Counter (number)</h2>
      <App />
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((c) => c + 1);
  }

  return <button onClick={handleClick}>You pressed me {count} times</button>;
}
