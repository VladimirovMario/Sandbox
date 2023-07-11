import { forwardRef, useRef, useImperativeHandle } from 'react';

export default function ExposingASubsetOfTheAPI() {
  return (
    <>
      <h2>Exposing a subset of the API with an imperative handle</h2>
      <Form />
    </>
  );
}

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    // Only expose focus and nothing else
    focus() {
      realInputRef.current.focus();
    },
  }));
  return <input {...props} ref={realInputRef} />;
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
