import StateIsIsolatedAndPrivate from './StateIsIsolatedAndPrivate/StateIsIsolatedAndPrivate';
// import VariableIsNotEnough from './VariableIsNotEnough/VariableIsNotEnough';

export default function State() {
  return (
    <>
      <h1>State: A Component's Memory</h1>
      <StateIsIsolatedAndPrivate />
      {/* <VariableIsNotEnough /> */}
    </>
  );
}
