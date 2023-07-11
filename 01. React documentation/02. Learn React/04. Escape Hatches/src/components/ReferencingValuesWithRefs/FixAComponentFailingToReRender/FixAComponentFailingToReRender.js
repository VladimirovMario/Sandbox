import { useState } from 'react';

export default function FixAComponentFailingToReRender() {
  return (
    <>
      <h2>Challenge 2 of 4: Fix a component failing to re-render</h2>
      <Toggle />
    </>
  );
}

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => {
        setIsOn(!isOn);
      }}
    >
      {isOn ? 'On' : 'Off'}
    </button>
  );
}
