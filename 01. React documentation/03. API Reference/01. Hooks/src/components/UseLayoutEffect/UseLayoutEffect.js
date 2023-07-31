import UseEffectDoesNotBlockTheBrowser from './UseEffectDoesNotBlockTheBrowser/UseEffectDoesNotBlockTheBrowser';
// import UseLayoutEffectBlocksTheBrowser from './UseLayoutEffectBlocksTheBrowser/UseLayoutEffectBlocksTheBrowser';

export default function UseLayoutEffect() {
  return (
    <>
      <h1>
        useLayoutEffect is a version of useEffect that fires before the browser
        repaints the screen
      </h1>
      <UseEffectDoesNotBlockTheBrowser />
      {/* <UseLayoutEffectBlocksTheBrowser /> */}
    </>
  );
}

/*
Note

Rendering in two passes and blocking the browser hurts performance.
Try to avoid this when you can.
*/
