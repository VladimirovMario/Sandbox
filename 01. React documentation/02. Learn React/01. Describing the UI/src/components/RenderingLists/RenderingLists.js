import SplittingAListInTwo from "./SplittingAListInTwo/SplittingAListInTwo";
// import RenderingDataFromArrays from "./RenderingDataFromArrays/RenderingDataFromArrays";

export default function RenderingLists() {
  return (
    <>
      <h1>Rendering lists</h1>
      <SplittingAListInTwo />
      {/* <RenderingDataFromArrays /> */}
    </>
  );
}

/*
Recap

On this page you learned:

    How to move data out of components and into data structures like arrays and objects.
    How to generate sets of similar components with JavaScript’s map().
    How to create arrays of filtered items with JavaScript’s filter().
    Why and how to set key on each component in a collection so React can keep track of each of them even if their position or data changes.

*/
