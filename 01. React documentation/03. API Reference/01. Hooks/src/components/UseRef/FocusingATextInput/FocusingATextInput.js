import { useRef } from 'react';

export default function FocusingATextInput() {
  return (
    <>
      <h2>Example 1 of 4: Focusing a text input</h2>
      <Form />
    </>
  );
}

function Form() {
  const inputFocusRef = useRef(null);

  function handleClick() {
    inputFocusRef.current.focus();
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" ref={inputFocusRef} />
      <button onClick={handleClick}>Focus the input</button>
    </form>
  );
}
