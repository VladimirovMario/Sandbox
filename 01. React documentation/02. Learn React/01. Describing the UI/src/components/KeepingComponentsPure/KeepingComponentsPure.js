import FixABrokenClock from "./FixABrokenClock";

export default function KeepingComponentsPure() {
  return (
    <>
      <h1>Keeping Components Pure</h1>
      <FixABrokenClock />  
    </>
  );
}

/**
 * Recap

    A component must be pure, meaning:
        It minds its own business. It should not change any objects or variables that existed before rendering.
        Same inputs, same output. Given the same inputs, a component should always return the same JSX.
    Rendering can happen at any time, so components should not depend on each others’ rendering sequence.
    You should not mutate any of the inputs that your components use for rendering. That includes props, state, and context. To update the screen, “set” state instead of mutating preexisting objects.
    Strive to express your component’s logic in the JSX you return. When you need to “change things”, you’ll usually want to do it in an event handler. As a last resort, you can useEffect.
    Writing pure functions takes a bit of practice, but it unlocks the power of React’s paradigm.

 */
