import { useState } from 'react';
import ChatRoom from './ChatRoom';

export default function FixAConnectionSwitch() {
  return (
    <>
      <h2>Challenge 4 of 5: Fix a connection switch</h2>
      <App />
    </>
  );
}

function App() {
  const [roomId, setRoomId] = useState('general');
  const [isEncrypted, setIsEncrypted] = useState(false);

  return (
    <>
      <label>
        Choose the chat room:
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isEncrypted}
          onChange={() => setIsEncrypted(!isEncrypted)}
        />
        Enable encryption
      </label>
      <hr />
      <ChatRoom roomId={roomId} isEncrypted={isEncrypted} />
    </>
  );
}
