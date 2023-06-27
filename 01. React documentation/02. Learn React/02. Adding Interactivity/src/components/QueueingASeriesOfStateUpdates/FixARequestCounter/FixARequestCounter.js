import { useState } from 'react';

export default function FixARequestCounter() {
  return (
    <>
      <h2>Challenge 1 of 2: Fix a request counter</h2>
      <RequestTracker />
    </>
  );
}

function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(p => p + 1);
    await delay(3000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }

  return (
    <>
    <h3>Pending: {pending}</h3>
    <h3>Completed: {completed}</h3>
    <button onClick={handleClick}>Buy</button>
    </>
  );

}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
