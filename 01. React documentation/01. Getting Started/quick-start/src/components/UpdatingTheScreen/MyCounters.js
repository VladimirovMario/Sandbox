// Sharing data between components

import { useState } from "react";

export default function MyCounters() {
  // This is called “lifting state up”.
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} handleClick={handleClick} />
      <MyButton count={count} handleClick={handleClick} />
    </div>
  );
}

function MyButton({ count, handleClick }) {
  return <button onClick={handleClick}>Clicked {count} times</button>;
}
