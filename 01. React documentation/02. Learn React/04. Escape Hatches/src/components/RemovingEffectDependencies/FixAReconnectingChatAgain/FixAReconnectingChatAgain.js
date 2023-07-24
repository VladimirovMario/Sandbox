import { useState } from 'react';
import ChatRoom from './ChatRoom.js';
import { showNotification } from './showNotification.js';

export default function FixAReconnectingChatAgain() {
  return (
    <>
      <h2>Challenge 4 of 4: Fix a reconnecting chat, again</h2>
      <App />
    </>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState('general');
  const [isEncrypted, setIsEncrypted] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <label>
        <input
          type="checkbox"
          checked={isEncrypted}
          onChange={(e) => setIsEncrypted(e.target.checked)}
        />
        Enable encryption
      </label>
      <label>
        Choose the chat room:{' '}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom
        onMessage={(msg) => {
          showNotification('New message: ' + msg, isDark ? 'dark' : 'light');
        }}
        options={{
          serverUrl: 'https://localhost:1234',
          roomId: roomId,
          isEncrypted,
        }}
      />
    </>
  );
}
