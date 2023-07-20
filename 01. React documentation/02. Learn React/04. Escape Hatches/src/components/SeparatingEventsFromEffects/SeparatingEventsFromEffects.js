import NonReactiveLogic from './NonReactiveLogic/NonReactiveLogic';
// import EventHandlersAndEffects from './EventHandlersAndEffects/EventHandlersAndEffects';

export default function SeparatingEventsFromEffects() {
  return (
    <>
      <h1>Separating Events from Effects</h1>
      <NonReactiveLogic />
      {/* <EventHandlersAndEffects /> */}
    </>
  );
}
