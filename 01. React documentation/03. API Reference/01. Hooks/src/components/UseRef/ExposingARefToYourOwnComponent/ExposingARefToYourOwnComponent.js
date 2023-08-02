import { useRef } from 'react';
import { forwardRef } from 'react';

export default function ExposingARefToYourOwnComponent() {
  return (
    <>
      <h2>Example 4 of 4: Exposing a ref to your own component </h2>
      <Form />
    </>
  );
}

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} type="text" />;
});

function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
