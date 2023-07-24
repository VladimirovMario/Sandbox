import { useOnlineStatus } from '../hooks/useOnlineStatus';

export default function SharingLogicBetweenComponents() {
  return (
    <>
      <h2>Custom Hooks: Sharing logic between components</h2>
      <StatusBar />
      <SaveButton />
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
