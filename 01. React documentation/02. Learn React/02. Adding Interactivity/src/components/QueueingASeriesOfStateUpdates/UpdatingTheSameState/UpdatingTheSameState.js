import { useState } from 'react';

export default function UpdatingTheSameState() {
  return (
    <>
      <h2>Updating the same state multiple times before the next render</h2>
      <Counter />
    </>
  );
}

function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div style={{borderRadius: '12px', border: '1px solid grey', padding: '12px'}} >
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <h1 style={{ margin: '0px' }}>State variable: {number}</h1>
        <button onClick={()=> setNumber(0)}>Clear state</button>
      </div>

      <p>Updating the same state multiple times before the next render</p>
      <button
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
      <p>What happens if you update state after replacing it</p>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
        }}
      >
        Increase the number
      </button>

      <p>What happens if you replace state after updating it</p>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
          setNumber(42);
        }}
      >
        Increase the number
      </button>
    </div>
  );
}
