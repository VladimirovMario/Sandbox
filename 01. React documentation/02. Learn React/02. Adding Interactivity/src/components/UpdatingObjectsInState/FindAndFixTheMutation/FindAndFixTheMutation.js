import { useState } from 'react';
import Background from './Background';
import Box from './Box';

export default function FindAndFixTheMutation() {
  return (
    <>
      <h2>Challenge 2 of 3: Find and fix the mutation</h2>
      <Canvas />
    </>
  );
}

const initialPosition = {
  x: 0,
  y: 0,
};

function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    setShape((s) => ({
      ...s,
      position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      },
    }));
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}
