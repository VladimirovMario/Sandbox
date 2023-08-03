import SubscribingToABrowserAPI from './SubscribingToABrowserAPI/SubscribingToABrowserAPI';
// import SubscribingToAnExternalStore from './SubscribingToAnExternalStore/SubscribingToAnExternalStore';

export default function UseSyncExternalStore() {
  return (
    <>
      <h1>
        useSyncExternalStore is a React Hook that lets you subscribe to an
        external store
      </h1>
      <SubscribingToABrowserAPI />
      {/* <SubscribingToAnExternalStore /> */}
    </>
  );
}
