import { useState } from 'react';
import useChatRoom from './useChatRoom';

export default function CustomUseChatRoomHook() {
  return (
    <>
      <h2>Example 1 of 3: Custom useChatRoom Hook</h2>
      <App />
    </>
  );
}

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({ roomId, serverUrl });

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          type="text"
          value={serverUrl}
          onChange={(e) => {
            setServerUrl(e.target.value);
          }}
        />
      </label>
      <h3>Welcome to the {roomId} room!</h3>
    </>
  );
}

function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
