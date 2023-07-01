import AvoidDeeplyNestedState from './AvoidDeeplyNestedState/AvoidDeeplyNestedState';
// import AvoidDuplicationInState from './AvoidDuplicationInState/AvoidDuplicationInState';
// import AvoidRedundantState from './AvoidRedundantState/AvoidRedundantState';
// import AvoidContradictionsInState from './AvoidContradictionsInState/AvoidContradictionsInState';

export default function ChoosingTheStateStructure() {
  return (
    <>
      <h1>Choosing the State Structure</h1>
      <AvoidDeeplyNestedState />
      {/* <AvoidDuplicationInState /> */}
      {/* <AvoidRedundantState /> */}
      {/* <AvoidContradictionsInState /> */}
    </>
  );
}

/*
Recap

    If two state variables always update together, consider merging them into one.
    Choose your state variables carefully to avoid creating “impossible” states.
    Structure your state in a way that reduces the chances that you’ll make a mistake updating it.
    Avoid redundant and duplicate state so that you don’t need to keep it in sync.
    Don’t put props into state unless you specifically want to prevent updates.
    For UI patterns like selection, keep ID or index in state instead of the object itself.
    If updating deeply nested state is complicated, try flattening it.
*/