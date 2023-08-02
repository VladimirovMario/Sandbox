import { useRef } from 'react';

export default function ClickCounter() {
  return (
    <>
      <h2>Example 1 of 2: Click counter</h2>
      <Counter />
    </>
  );
}

function Counter() {
  let ref = useRef(null);

  function handleClick() {
    ref.current += 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return <button onClick={handleClick}>Click me!</button>;
}
