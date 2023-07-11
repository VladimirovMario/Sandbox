import DifferencesBetweenRefsAndState from './DifferencesBetweenRefsAndState/DifferencesBetweenRefsAndState';
// import ExampleBuildingAStopwatch from './ExampleBuildingAStopwatch/ExampleBuildingAStopwatch';
// import AddingARefToYourComponent from './AddingARefToYourComponent/AddingARefToYourComponent';

export default function ReferencingValuesWithRefs() {
  return (
    <>
      <h1>Referencing Values with Refs</h1>
      <DifferencesBetweenRefsAndState />
      {/* <ExampleBuildingAStopwatch /> */}
      {/* <AddingARefToYourComponent /> */}
    </>
  );
}

/*
Recap

    Refs are an escape hatch to hold onto values that aren’t used for rendering. You won’t need them often.
    A ref is a plain JavaScript object with a single property called current, which you can read or set.
    You can ask React to give you a ref by calling the useRef Hook.
    Like state, refs let you retain information between re-renders of a component.
    Unlike state, setting the ref’s current value does not trigger a re-render.
    Don’t read or write ref.current during rendering. This makes your component hard to predict.
*/