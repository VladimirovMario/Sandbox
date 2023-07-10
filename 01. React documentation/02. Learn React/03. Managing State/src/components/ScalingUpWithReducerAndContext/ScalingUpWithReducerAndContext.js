import CombiningAReducerWithContext from './CombiningAReducerWithContext/CombiningAReducerWithContext';

export default function ScalingUpWithReducerAndContext() {
  return (
    <>
      <h1>Scaling Up with Reducer and Context</h1>
      <CombiningAReducerWithContext />
    </>
  );
}

/*
Recap

    You can combine reducer with context to let any component read and update state above it.
    To provide state and the dispatch function to components below:
        Create two contexts (for state and for dispatch functions).
        Provide both contexts from the component that uses the reducer.
        Use either context from components that need to read them.
    You can further declutter the components by moving all wiring into one file.
        You can export a component like TasksProvider that provides context.
        You can also export custom Hooks like useTasks and useTasksDispatch to read it.
    You can have many context-reducer pairs like this in your app.
*/
