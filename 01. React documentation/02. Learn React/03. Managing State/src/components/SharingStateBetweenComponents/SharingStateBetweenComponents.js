import FilteringAList from './FilteringAList/FilteringAList';
// import SyncedInputs from './SyncedInputs/SyncedInputs';
// import LiftingStateUpByExample from './LiftingStateUpByExample/LiftingStateUpByExample';

export default function SharingStateBetweenComponents() {
  return (
    <>
      <h1>Sharing State Between Components</h1>
      <FilteringAList />
      {/* <SyncedInputs /> */}
      {/* <LiftingStateUpByExample /> */}
    </>
  );
}

/*
Recap

    When you want to coordinate two components, move their state to their common parent.
    Then pass the information down through props from their common parent.
    Finally, pass the event handlers down so that the children can change the parent’s state.
    It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).

*/