import { useState } from 'react';

export default function ComponentNotUpdating() {
  return (
    <>
      <h2>Challenge 1 of 4: Fix a component that's not updating</h2>
      <App />
    </>
  );
}

function App() {
  //   const time = useTime();
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
      <p>
        <Clock
          color={color}
          // time={time.toLocaleTimeString()}
        />
      </p>
    </div>
  );
}

function Clock(props) {
  const [color, setColor] = useState(props.color);
  return <h1 style={{ color: color }}>{props.time}</h1>;
}
