import { useState } from 'react';

export default function TrafficLight() {
  return (
    <>
      <h2>Challenge 1 of 1: Implement a traffic light</h2>
      <Traffic />
    </>
  );
}

function Traffic() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    if (walk) {
      alert('Stop is next');
    } else {
      alert('Walk is next');
    }
    setWalk(!walk);
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? 'Stop' : 'Walk'}</button>
      <h1 style={{ color: walk ? 'darkgreen' : 'darkred' }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}
