import FixAVariableThatDoesNotUpdate from './FixAVariableThatDoesNotUpdate/FixAVariableThatDoesNotUpdate';
// import NonReactiveLogic from './NonReactiveLogic/NonReactiveLogic';
// import EventHandlersAndEffects from './EventHandlersAndEffects/EventHandlersAndEffects';

export default function SeparatingEventsFromEffects() {
  return (
    <>
      <h1>Separating Events from Effects</h1>
      <FixAVariableThatDoesNotUpdate />
      {/* <NonReactiveLogic /> */}
      {/* <EventHandlersAndEffects /> */}
    </>
  );
}

/*
Recap

    Event handlers run in response to specific interactions.
    Effects run whenever synchronization is needed.
    Logic inside event handlers is not reactive.
    Logic inside Effects is reactive.
    You can move non-reactive logic from Effects into Effect Events.
    Only call Effect Events from inside Effects.
    Don’t pass Effect Events to other components or Hooks.
*/