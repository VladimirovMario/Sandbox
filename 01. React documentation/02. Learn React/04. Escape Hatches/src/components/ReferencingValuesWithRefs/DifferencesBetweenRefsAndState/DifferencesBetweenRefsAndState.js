import { useRef, useState } from 'react';

export default function DifferencesBetweenRefsAndState() {
  return (
    <>
      <h2>Differences between refs and state</h2>
      <StateCounter />
      <RefCounter />
    </>
  );
}

function StateCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>You clicked {count} times</button>;
}

function RefCounter() {
  let countRef = useRef(0);

  function handleClick() {
    // This doesn't re-render the component!
    countRef.current = countRef.current + 1;
  }
  return (
    <button onClick={handleClick}>You clicked {countRef.current} times</button>
  );
}
