import { useState } from 'react';

export default function SubmitAFormWithoutEffects() {
  return (
    <>
      <h2>Challenge 4 of 4: Submit a form without Effects</h2>
      <Form />
    </>
  );
}

function Form() {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(message);
    setShowForm(false);
  }

  if (showForm === false) {
    return (
      <>
        <h3>Thanks for using our services!</h3>
        <button
          onClick={() => {
            setMessage('');
            setShowForm(true);
          }}
        >
          Open chat
        </button>
      </>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        cols="15"
        rows="5"
      ></textarea>
      <button disabled={message === ''}>Send</button>
    </form>
  );
}

function sendMessage(message) {
  console.log(`Sending message: ${message}`);
}
