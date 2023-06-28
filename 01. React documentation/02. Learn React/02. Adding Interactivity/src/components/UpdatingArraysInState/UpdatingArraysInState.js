import RemoveItemFromCart from './RemoveAnItemFromTheShoppingCart/RemoveItemFromCart';
// import UpdateAnItemInTheShoppingCart from './UpdateAnItemInTheShoppingCart/UpdateAnItemInTheShoppingCart';
// import UpdatingObjectsInsideArrays from './UpdatingObjectsInsideArrays/UpdatingObjectsInsideArrays';
// import MakingOtherChangesToAnArray from './MakingOtherChangesToAnArray/MakingOtherChangesToAnArray';
// import InsertingIntoAnArray from './InsertingIntoAnArray/InsertingIntoAnArray';
// import ReplacingItemsInAnArray from './ReplacingItemsInAnArray/ReplacingItemsInAnArray';
// import TransformingAnArray from './TransformingAnArray/TransformingAnArray';
// import RemovingFromAnArray from './RemovingFromAnArray/RemovingFromAnArray';
// import AddingToAnArray from './AddingToAnArray/AddingToAnArray';

export default function UpdatingArraysInState() {
  return (
    <>
      <h1>Updating Arrays in State</h1>
      <RemoveItemFromCart />
      {/* <UpdateAnItemInTheShoppingCart /> */}
      {/* <UpdatingObjectsInsideArrays /> */}
      {/* <MakingOtherChangesToAnArray /> */}
      {/* <InsertingIntoAnArray /> */}
      {/* <ReplacingItemsInAnArray /> */}
      {/* <TransformingAnArray /> */}
      {/* <RemovingFromAnArray /> */}
      {/* <AddingToAnArray /> */}
    </>
  );
}

/*
Recap

    You can put arrays into state, but you can’t change them.
    Instead of mutating an array, create a new version of it, and update the state to it.
    You can use the [...arr, newItem] array spread syntax to create arrays with new items.
    You can use filter() and map() to create new arrays with filtered or transformed items.
    You can use Immer to keep your code concise.

*/
