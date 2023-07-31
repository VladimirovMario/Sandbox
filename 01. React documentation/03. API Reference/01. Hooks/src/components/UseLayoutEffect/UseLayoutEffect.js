import UseLayoutEffectBlocksTheBrowser from './UseLayoutEffectBlocksTheBrowser/UseLayoutEffectBlocksTheBrowser';

export default function UseLayoutEffect() {
  return (
    <>
      <h1>
        useLayoutEffect is a version of useEffect that fires before the browser
        repaints the screen
      </h1>
      <UseLayoutEffectBlocksTheBrowser />
    </>
  );
}
