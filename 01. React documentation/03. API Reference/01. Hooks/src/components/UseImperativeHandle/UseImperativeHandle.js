import ExposingYourOwnImperativeMethods from './ExposingYourOwnImperativeMethods/ExposingYourOwnImperativeMethods';
// import ExposingACustomRefHandle from './ExposingACustomRefHandle/ExposingACustomRefHandle';

export default function UseImperativeHandle() {
  return (
    <>
      <h1>
        useImperativeHandle is a React Hook that lets you customize the handle
        exposed as a ref
      </h1>
      <ExposingYourOwnImperativeMethods />
      {/* <ExposingACustomRefHandle /> */}
    </>
  );
}
