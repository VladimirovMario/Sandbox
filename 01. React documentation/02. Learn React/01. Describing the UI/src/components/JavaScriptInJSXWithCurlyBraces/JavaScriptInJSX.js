import ExpressionInsideJSX from "./ExpressionInsideJSX/ExpressionInsideJSX";
// import ExtractInformationIntoAnObject from "./ExtractInformationIntoAnObject/ExtractInformationIntoAnObject";
// import FixTheMistake from "./FixTheMistake/FixTheMistake";
// import TodoList from "./CSSAndOtherObjectsInJSX/CSSAndOtherObjectsInJSX";

export default function JavaScriptInJSX () {
    return (
        <>
        <h1>JavaScript in JSX with Curly Braces</h1>
        <ExpressionInsideJSX />
        {/* <ExtractInformationIntoAnObject /> */}
        {/* <FixTheMistake /> */}
        {/* <TodoList /> */}
        </>
    )
}

/*
Recap

Now you know almost everything about JSX:

    JSX attributes inside quotes are passed as strings.
    Curly braces let you bring JavaScript logic and variables into your markup.
    They work inside the JSX tag content or immediately after = in attributes.
    {{ and }} is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.

*/