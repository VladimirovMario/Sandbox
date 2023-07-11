import { useRef, useState } from 'react';

export default function ReadTheLatestState() {
  return (
    <>
      <h2>Challenge 4 of 4: Read the latest state</h2>
      <Chat />
    </>
  );
}

function Chat() {
  const [text, setText] = useState('');
  const message = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
    message.current = value;
  }

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + message.current);
    }, 3000);
  }

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleSend}>Send</button>
    </>
  );
}
