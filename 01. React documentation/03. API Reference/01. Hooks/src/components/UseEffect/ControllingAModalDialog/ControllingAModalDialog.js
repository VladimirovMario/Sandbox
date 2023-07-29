import { useState } from 'react';
import ModalDialog from './ModalDialog';

export default function ControllingAModalDialog() {
  return (
    <>
      <h2>Example 4 of 5: Controlling a modal dialog</h2>
      <App />
    </>
  );
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Open dialog</button>
      <ModalDialog isOpen={show}>
        Hello there!
        <br />
        <button onClick={() => setShow(false)}>Close</button>
      </ModalDialog>
    </>
  );
}
