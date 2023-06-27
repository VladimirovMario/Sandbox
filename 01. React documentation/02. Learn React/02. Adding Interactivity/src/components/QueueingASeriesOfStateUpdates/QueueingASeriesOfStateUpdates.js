import ImplementTheStateQueue from './ImplementTheStateQueue/ImplementTheStateQueue';
// import FixARequestCounter from './FixARequestCounter/FixARequestCounter';
// import UpdatingTheSameState from './UpdatingTheSameState/UpdatingTheSameState';

export default function QueueingASeriesOfStateUpdates() {
  return (
    <>
      <h1>Queueing a Series of State Updates</h1>
      <ImplementTheStateQueue />
      {/* <FixARequestCounter /> */}
      {/* <UpdatingTheSameState /> */}
    </>
  );
}

/*
Recap

    Setting state does not change the variable in the existing render, but it requests a new render.
    React processes state updates after event handlers have finished running. This is called batching.
    To update some state multiple times in one event, you can use setNumber(n => n + 1) updater function.

*/
