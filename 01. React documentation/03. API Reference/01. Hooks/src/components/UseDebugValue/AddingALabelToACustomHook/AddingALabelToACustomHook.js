import { useOnlineStatus } from './useOnlineStatus';

export default function AddingALabelToACustomHook() {
  return (
    <>
      <h2>Adding a label to a custom Hook</h2>
      <StatusBar />
    </>
  );
}

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}
