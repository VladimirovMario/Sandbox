import { useState } from 'react';
import CountLabel from './CountLabel';

export default function StoringInformationFromPreviousRenders() {
  return (
    <>
      <h2>Storing information from previous renders</h2>
      <App />
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <CountLabel count={count} />
    </>
  );
}
