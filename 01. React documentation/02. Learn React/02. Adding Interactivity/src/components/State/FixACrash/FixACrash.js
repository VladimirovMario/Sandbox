import { useState } from 'react';

export default function FixACrash() {
  return (
    <>
      <h2>Challenge 3 of 4: Fix a crash</h2>
      <FeedbackForm />
    </>
  );
}

function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Sending: "${message}"`);
          setIsSent(true);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />
        <button>Send</button>
      </form>
    );
  }
}
