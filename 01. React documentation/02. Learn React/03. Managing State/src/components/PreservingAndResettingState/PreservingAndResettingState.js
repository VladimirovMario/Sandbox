import FixDisappearingInputText from './FixDisappearingInputText/FixDisappearingInputText';
// import ResettingAFormWithAKey from './ResettingAFormWithAKey/ResettingAFormWithAKey';
// import SamePositionResetState from './SamePositionResetState/SamePositionResetState';
// import StateIsTied from './StateIsTied/StateIsTied';

export default function PreservingAndResettingState() {
  return (
    <>
      <h1>Preserving and Resetting State</h1>
      <FixDisappearingInputText />
      {/* <ResettingAFormWithAKey /> */}
      {/* <SamePositionResetState /> */}
      {/* <StateIsTied /> */}
    </>
  );
}

/*
Recap

    React keeps state for as long as the same component is rendered at the same position.
    State is not kept in JSX tags. It’s associated with the tree position in which you put that JSX.
    You can force a subtree to reset its state by giving it a different key.
    Don’t nest component definitions, or you’ll reset state by accident.

*/