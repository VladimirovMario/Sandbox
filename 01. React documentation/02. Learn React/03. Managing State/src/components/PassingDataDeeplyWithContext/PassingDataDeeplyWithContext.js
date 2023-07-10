import ReplacePropDrillingWithContext from './ReplacePropDrillingWithContext/ReplacePropDrillingWithContext';
// import ContextPassesThrough from './ContextPassesThrough/ContextPassesThrough';
// import AlternativeToPassingProps from './AlternativeToPassingProps/AlternativeToPassingProps';

export default function PassingDataDeeplyWithContext() {
  return (
    <>
      <h1>Passing Data Deeply with Context</h1>
      <ReplacePropDrillingWithContext />
      {/* <ContextPassesThrough /> */}
      {/* <AlternativeToPassingProps /> */}
    </>
  );
}

/*
Recap

    Context lets a component provide some information to the entire tree below it.
    To pass context:
        Create and export it with export const MyContext = createContext(defaultValue).
        Pass it to the useContext(MyContext) Hook to read it in any child component, no matter how deep.
        Wrap children into <MyContext.Provider value={...}> to provide it from a parent.
    Context passes through any components in the middle.
    Context lets you write components that “adapt to their surroundings”.
    Before you use context, try passing props or passing JSX as children.
*/