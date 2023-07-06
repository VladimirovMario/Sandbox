import RestoreInputValues from './RestoreInputValues/RestoreInputValues';
// import DispatchActionsFromEventHandlers from './DispatchActionsFromEventHandlers/DispatchActionsFromEventHandlers';
// import ConsolidateStateLogicWithAReducer from './ConsolidateStateLogicWithAReducer/ConsolidateStateLogicWithAReducer';

export default function ExtractingStateLogicIntoAReducer() {
  return (
    <>
      <h1>Extracting State Logic into a Reducer</h1>
      <RestoreInputValues />
      {/* <DispatchActionsFromEventHandlers /> */}
      {/* <ConsolidateStateLogicWithAReducer /> */}
    </>
  );
}

/*
Recap

    To convert from useState to useReducer:
        Dispatch actions from event handlers.
        Write a reducer function that returns the next state for a given state and action.
        Replace useState with useReducer.
    Reducers require you to write a bit more code, but they help with debugging and testing.
    Reducers must be pure.
    Each action describes a single user interaction.
    Use Immer if you want to write reducers in a mutating style.
*/
