import { useEffect } from 'react';
import { createConnection } from './createConnection';

export default function AddCleanupIfNeeded() {
  return (
    <>
      <h2>Step 3: Add cleanup if needed</h2>
      <ChatRoom />
    </>
  );
}

function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, []);
  return <h2>Welcome to the chat!</h2>;
}
