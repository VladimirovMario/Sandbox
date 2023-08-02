import { useState } from 'react';

export default function TextField() {
  return (
    <>
      <h2>Example 2 of 4: Text field (string)</h2>
      <MyInput />
    </>
  );
}

function MyInput() {
  const [text, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('hello')}>Reset</button>
    </>
  );
}
