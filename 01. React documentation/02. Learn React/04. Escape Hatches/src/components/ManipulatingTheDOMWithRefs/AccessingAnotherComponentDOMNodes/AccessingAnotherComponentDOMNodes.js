import { forwardRef, useRef } from 'react';

export default function AccessingAnotherComponentDOMNodes() {
  return (
    <>
      <h2>Accessing another component’s DOM nodes</h2>
      <MyForm />
    </>
  );
}

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

function MyForm() {
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
