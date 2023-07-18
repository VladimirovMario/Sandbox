import { useEffect, useState } from 'react';
import { createConnection } from './chat';

export default function EffectCanReSynchronize() {
  return (
    <>
      <h2>How React verifies that your Effect can re-synchronize</h2>
      <App />
    </>
  );
}

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
        >
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
