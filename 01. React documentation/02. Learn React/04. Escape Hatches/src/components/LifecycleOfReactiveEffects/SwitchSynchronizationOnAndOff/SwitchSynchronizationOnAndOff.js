import { useEffect } from 'react';
import { useState } from 'react';

export default function SwitchSynchronizationOnAndOff() {
  return (
    <>
      <h2>Challenge 2 of 5: Switch synchronization on and off</h2>
      <App />
    </>
  );
}

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    function handleMove(e) {
      if (canMove) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    }

    window.addEventListener('pointermove', handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [canMove]);

  function dotStyles() {
    return {
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity: 0.6,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    };
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={canMove}
          onChange={(e) => {
            setCanMove(e.target.checked);
          }}
        />
        The dot is allowed to move
      </label>
      <hr />
      <div style={dotStyles()}></div>
    </>
  );
}
