import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';

export default function MakeTheCounterDelayConfigurable() {
  return (
    <>
      <h2>Challenge 2 of 5: Make the counter delay configurable</h2>
      <Counter />
    </>
  );
}

function Counter() {
  const [delay, setDelay] = useState(1000);
  const count = useCounter(delay);

  return (
    <>
      <label>
        Tick duration: {delay} ms
        <br />
        <input
          type="range"
          value={delay}
          min={10}
          max={2000}
          onChange={(e) => {
            setDelay(e.target.value);
          }}
        />
      </label>
      <hr />
      <h3>Ticks: {count}</h3>
    </>
  );
}
