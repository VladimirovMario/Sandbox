import { useState } from 'react';

export default function SettingStateTriggersRenders() {
  return (
    <>
      <h2>Setting state triggers renders</h2>
      <Form />
    </>
  );
}

function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');

  if (isSent) {
    return <h1>Your message is on its way!</h1>;
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        setMessage(message);
      }}
    >
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button>Send</button>
    </form>
  );
}
