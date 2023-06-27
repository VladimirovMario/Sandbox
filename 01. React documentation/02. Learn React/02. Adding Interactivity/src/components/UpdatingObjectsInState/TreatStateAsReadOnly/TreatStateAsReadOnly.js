import { useState } from 'react';

export default function TreatStateAsReadOnly() {
  return (
    <>
      <h2>Treat state as read-only</h2>
      <MovingDot />
    </>
  );
}
// Not working properly.
// To fix it, remove the headings and in index.css ".container" styles
function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onPointerMoveHandler = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const containerStyles = () => ({
    position: 'relative',
    width: '100vw',
    height: '100vh',
  });

  const circleStyles = () => ({
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: '50%',
    transform: `translate(${position.x}px, ${position.y}px)`,
    left: -10,
    top: -10,
    width: 20,
    height: 20,
  });

  return (
    <div
      onPointerMove={(e) => onPointerMoveHandler(e)}
      style={containerStyles()}
    >
      <div style={circleStyles()} />
    </div>
  );
}
