import ProfileEditor from './ProfileEditor/ProfileEditor';
// import AddAndRemoveAClass from './AddAndRemoveAClass/AddAndRemoveAClass';
// import ThinkingAboutUIDeclaratively from './ThinkingAboutUIDeclaratively/ThinkingAboutUIDeclaratively';


export default function ReactingToInputWithState() {
  return (
    <>
      <h1>Reacting to input with state</h1>
      <ProfileEditor />
      {/* <AddAndRemoveAClass /> */}
      {/* <ThinkingAboutUIDeclaratively /> */}
    </>
  );
}

/*
Recap

    Declarative programming means describing the UI for each visual state rather than micromanaging the UI (imperative).
    When developing a component:
        Identify all its visual states.
        Determine the human and computer triggers for state changes.
        Model the state with useState.
        Remove non-essential state to avoid bugs and paradoxes.
        Connect the event handlers to set state.

*/
