import RefactorConditions from "./RefactorConditions/RefactorConditions";
// import ShowTheItemImportance from "./ShowTheItemImportance/ShowTheItemImportance";
// import ConditionallyReturningJSX from "./ConditionallyReturningJSX/ConditionallyReturningJSX";

export default function ConditionalRendering() {
  return (
    <>
      <h1>Conditional Rendering</h1>
      <RefactorConditions />
      {/* <ShowTheItemImportance /> */}
      {/* <ConditionallyReturningJSX /> */}
    </>
  );
}

/*
Recap

    In React, you control branching logic with JavaScript.
    You can return a JSX expression conditionally with an if statement.
    You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
    In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
    In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
    The shortcuts are common, but you don’t have to use them if you prefer plain if.

*/
