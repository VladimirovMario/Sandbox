import { useState } from 'react';
import Map from './Map';

export default function ControllingANonReactWidget() {
  return (
    <>
      <h2>Controlling a non-React widget</h2>
      <App />
    </>
  );
}

function App() {
  const [zoomLevel, setZoomLevel] = useState(0);

  return (
    <>
      Zoom level: {zoomLevel}x
      <button onClick={() => setZoomLevel((z) => z + 1)}>+</button>
      <button onClick={() => setZoomLevel((z) => z - 1)}>-</button>
      <hr />
      <Map zoomLevel={zoomLevel} />
    </>
  );
}
