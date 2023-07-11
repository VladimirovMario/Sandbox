import { useRef, useState } from 'react';

export default function FixABrokenChatInput() {
  return (
    <>
      <h2>Challenge 1 of 4: Fix a broken chat input</h2>
      <Chat />
    </>
  );
}

function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  let timeoutId = useRef(null);

  function handleSend() {
    setIsSending(true);
    timeoutId.current = setTimeout(() => {
      alert('Sent!');
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutId.current);
  }

  return (
    <>
      <input
        type="text"
        disabled={isSending}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button disabled={isSending} onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>

      {isSending && <button onClick={handleUndo}>Undo</button>}
    </>
  );
}
