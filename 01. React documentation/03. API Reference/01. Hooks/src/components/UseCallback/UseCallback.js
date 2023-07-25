import AlwaysReRenderingAComponent from './AlwaysReRenderingAComponent/AlwaysReRenderingAComponent';
// import SkippingReRendering from './SkippingReRendering/SkippingReRendering';

export default function UseCallback() {
  return (
    <>
      <h1>
        useCallback is a React Hook that lets you cache a function definition
        between re-renders.
      </h1>
      <AlwaysReRenderingAComponent />
      {/* <SkippingReRendering /> */}
    </>
  );
}
