import { useState } from 'react';
import ChatRoom from './ChatRoom';
import styles from './FixAReconnectingChat.module.css';

export default function FixAReconnectingChat() {
  return (
    <>
      <h2>Challenge 3 of 4: Fix a reconnecting chat</h2>
      <App />
    </>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState('general');
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  return (
    <div className={isDark ? styles['dark'] : 'light'}>
      <button onClick={() => setIsDark(!isDark)}>Toggle theme</button>
      <label>
        Server URL:{' '}
        <input
          type="text"
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <label>
        Choose the chatroom:{' '}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom options={{ serverUrl, roomId }} />
    </div>
  );
}
