import { useState } from 'react';

export default function ResettingStateWithAKey() {
  return (
    <>
      <h2>Resetting state with a key</h2>
      <App />
    </>
  );
}

function App() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <Form key={version} />
    </>
  );
}

function Form() {
  const [name, setName] = useState('Taylor');

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}.</p>
    </>
  );
}
