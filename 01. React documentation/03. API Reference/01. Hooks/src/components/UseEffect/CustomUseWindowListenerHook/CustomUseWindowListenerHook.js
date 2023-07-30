import { useState } from 'react';
import useWindowListener from './useWindowListener';

export default function CustomUseWindowListenerHook() {
  return (
    <>
      <h2>Example 2 of 3: Custom useWindowListener Hook</h2>
      <App />
    </>
  );
}

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useWindowListener('pointermove', (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  });

  return <div style={containerStyles()}></div>;

  function containerStyles() {
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
}
