import { useRef } from 'react';

export default function AddingARefToYourComponent() {
  return (
    <>
      <h2>Adding a ref to your component</h2>
      <Counter />
    </>
  );
}

function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return(
    <button onClick={handleClick}>Click me!</button>
  );
}
