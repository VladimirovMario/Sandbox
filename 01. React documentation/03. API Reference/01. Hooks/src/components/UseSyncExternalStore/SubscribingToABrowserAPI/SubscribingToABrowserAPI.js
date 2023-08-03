import { useOnlineStatus } from './useOnlineStatus';

export default function SubscribingToABrowserAPI() {
  return (
    <>
      <h2>Subscribing to a browser API</h2>
      <App />
    </>
  );
}

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}
