import ShareStatefulLogic from './ShareStatefulLogic/ShareStatefulLogic';
// import SharingLogicBetweenComponents from './SharingLogicBetweenComponents/SharingLogicBetweenComponents';

export default function ReusingLogicWithCustomHooks() {
  return (
    <>
      <h1>Reusing Logic with Custom Hooks</h1>
      <ShareStatefulLogic />
      {/* <SharingLogicBetweenComponents /> */}
    </>
  );
}
