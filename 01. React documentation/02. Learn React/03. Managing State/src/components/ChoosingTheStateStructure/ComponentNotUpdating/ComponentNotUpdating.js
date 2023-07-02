import { useState } from 'react';
import useTime from '../../../hooks/useTime';

export default function ComponentNotUpdating() {
  return (
    <>
      <h2>Challenge 1 of 4: Fix a component that's not updating</h2>
      <App />
    </>
  );
}

function App() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');

  return (
    <div>
      <p>
        Pick a color:{' '}
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}

function Clock(props) {
  return <h1 style={{ color: props.color }}>{props.time}</h1>;
}
