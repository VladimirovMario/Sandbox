import { useOnlineStatus } from '../hooks/useOnlineStatus';

export default function CustomHooksHelpYouMigrate() {
  return (
    <>
      <h2>Custom Hooks help you migrate to better patterns</h2>
      <SaveButton />
      <StatusBar />
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
