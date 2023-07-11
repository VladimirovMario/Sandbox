import PlayAndPauseTheVideo from './PlayAndPauseTheVideo/PlayAndPauseTheVideo';
// import FlushingStateUpdatesSynchronously from './FlushingStateUpdatesSynchronously/FlushingStateUpdatesSynchronously';
// import ExposingASubsetOfTheAPI from './ExposingASubsetOfTheAPI/ExposingASubsetOfTheAPI';
// import AccessingAnotherComponentDOMNodes from './AccessingAnotherComponentDOMNodes/AccessingAnotherComponentDOMNodes';
// import HowToManageAListOfRefs from './HowToManageAListOfRefs/HowToManageAListOfRefs';
// import ScrollingToAnElement from './ScrollingToAnElement/ScrollingToAnElement';
// import FocusingATextInput from './FocusingATextInput/FocusingATextInput';

export default function ManipulatingTheDOMWithRefs() {
  return (
    <>
      <h1>Manipulating the DOM with Refs</h1>
      <PlayAndPauseTheVideo />
      {/* <FlushingStateUpdatesSynchronously /> */}
      {/* <ExposingASubsetOfTheAPI /> */}
      {/* <AccessingAnotherComponentDOMNodes /> */}
      {/* <HowToManageAListOfRefs /> */}
      {/* <ScrollingToAnElement /> */}
      {/* <FocusingATextInput /> */}
    </>
  );
}

/*
Recap

    Refs are a generic concept, but most often you’ll use them to hold DOM elements.
    You instruct React to put a DOM node into myRef.current by passing <div ref={myRef}>.
    Usually, you will use refs for non-destructive actions like focusing, scrolling, or measuring DOM elements.
    A component doesn’t expose its DOM nodes by default. You can opt into exposing a DOM node by using forwardRef and passing the second ref argument down to a specific node.
    Avoid changing DOM nodes managed by React.
    If you do modify DOM nodes managed by React, modify parts that React has no reason to update.
*/
