import Bio from "./HTMLtoJSX/Bio";
import ConvertingHTMLToJSX from "./ConvertingHTMLToJSX/ConvertingHTMLToJSX";

export default function WritingMarkupWithJSX () {
    return (
        <>
        <h1>Writing Markup with JSX</h1>
        <Bio />
        <ConvertingHTMLToJSX />
        </>
    )
}

/*
Recap

Now you know why JSX exists and how to use it in components:

    React components group rendering logic together with markup because they are related.
    JSX is similar to HTML, with a few differences. You can use a converter if you need to.
    Error messages will often point you in the right direction to fixing your markup.
*/
