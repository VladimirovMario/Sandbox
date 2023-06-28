import { useState } from 'react';

export default function Box({ children, color, position, onMove }) {
  const [lastCoordinates, setLastCoordinates] = useState(null);

  function handlePointerDown(e) {
    e.target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp(e) {
    setLastCoordinates(null);
  }

  function boxStyles() {
    return {
      width: 100,
      height: 100,
      cursor: 'grab',
      backgroundColor: color,
      position: 'absolute',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
    };
  }

  return (
    <div
      style={boxStyles()}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {children}
    </div>
  );
}
