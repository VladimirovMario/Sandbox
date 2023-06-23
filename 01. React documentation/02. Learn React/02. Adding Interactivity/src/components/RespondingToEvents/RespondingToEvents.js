import FixAnEventHandler from "./FixAnEventHandler/FixAnEventHandler";
// import PreventingDefaultBehavior from "./PreventingDefaultBehavior/PreventingDefaultBehavior";
// import StoppingPropagation from "./StoppingPropagation/StoppingPropagation";
// import EventPropagation from "./EventPropagation/EventPropagation";
// import NamingEventHandlerProps from "./NamingEventHandlerProps/NamingEventHandlerProps";
// import PassingEventHandlersAsProps from "./PassingEventHandlersAsProps/PassingEventHandlersAsProps";
// import ReadingProps from "./ReadingProps/ReadingProps";
// import AddingEventHandlers from "./AddingEventHandlers/AddingEventHandlers";

export default function RespondingToEvents() {
  return (
    <>
      <h1>Responding to events</h1>
      <FixAnEventHandler />
      {/* <PreventingDefaultBehavior /> */}
      {/* <StoppingPropagation /> */}
      {/* <EventPropagation /> */}
      {/* <NamingEventHandlerProps /> */}
      {/* <PassingEventHandlersAsProps /> */}
      {/* <ReadingProps /> */}
      {/* <AddingEventHandlers /> */}
    </>
  );
}

/*
Recap

    You can handle events by passing a function as a prop to an element like <button>.
    Event handlers must be passed, not called! onClick={handleClick}, not onClick={handleClick()}.
    You can define an event handler function separately or inline.
    Event handlers are defined inside a component, so they can access props.
    You can declare an event handler in a parent and pass it as a prop to a child.
    You can define your own event handler props with application-specific names.
    Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.
    Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.
    Explicitly calling an event handler prop from a child handler is a good alternative to propagation.

*/