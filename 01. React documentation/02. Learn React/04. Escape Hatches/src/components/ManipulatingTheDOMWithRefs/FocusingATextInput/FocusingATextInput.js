import { useRef } from 'react';

export default function FocusingATextInput() {
  return (
    <>
      <h2>Example: Focusing a text input</h2>
      <Form />
    </>
  );
}

function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
