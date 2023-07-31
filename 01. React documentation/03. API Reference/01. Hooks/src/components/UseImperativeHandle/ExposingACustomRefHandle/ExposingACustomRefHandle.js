import { useRef } from 'react';
import MyInput from './MyInput';

export default function ExposingACustomRefHandle() {
  return (
    <>
      <h2>Exposing a custom ref handle to the parent component</h2>
      <Form />
    </>
  );
}

function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
    // This won't work because the DOM node isn't exposed:
    // ref.current.style.opacity = 0.5;
  }

  return (
    <form>
      <MyInput label="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
