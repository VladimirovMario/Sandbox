import { useEffect } from 'react';
//import { experimental_useEffectEvent as useEffectEvent } from 'react';
import { createEncryptedConnection, createUnencryptedConnection } from './chat';

export default function ChatRoom({ options, onMessage }) {
  const { serverUrl, roomId, isEncrypted } = options;

  useEffect(() => {
    function createConnection() {
      if (isEncrypted) {
        return createEncryptedConnection({ serverUrl, roomId });
      } else {
        return createUnencryptedConnection({ serverUrl, roomId });
      }
    }

    const connection = createConnection();
    connection.on('message', (msg) => onMessage(msg));
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId, isEncrypted, onMessage]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
