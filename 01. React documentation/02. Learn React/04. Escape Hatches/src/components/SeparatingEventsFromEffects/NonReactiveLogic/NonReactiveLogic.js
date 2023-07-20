import { useState, useEffect } from 'react';
import { createConnection } from './chat';
import { showNotification } from './notification';

export default function NonReactiveLogic() {
  return (
    <>
      <h2>Extracting non-reactive logic out of Effects</h2>
      <App />
    </>
  );
}
/*
To solve this task I have to use: useEffectEvent
  Under Construction
  This section describes an experimental API that has not yet been released in a stable version of React.
*/
// https://jser.dev/react/2023/03/18/useeffectevent/

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId, theme }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      showNotification('Connected!', theme);
    });
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId]); // 🔴 React Hook useEffect has a missing dependency: 'theme'.s
  return <h1>Welcome to the {roomId} room!</h1>;
}

function App() {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);

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
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom roomId={roomId} theme={isDark ? 'dark' : 'light'} />
    </>
  );
}
