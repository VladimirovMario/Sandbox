import DeferredReRenderingOfTheList from './DeferredReRenderingOfTheList/DeferredReRenderingOfTheList';
// import ShowingStaleContent from './ShowingStaleContent/ShowingStaleContent';

export default function UseDeferredValue() {
  return (
    <>
      <h1>
        useDeferredValue is a React Hook that lets you defer updating a part of
        the UI.
      </h1>
      <DeferredReRenderingOfTheList />
      {/* <ShowingStaleContent /> */}
    </>
  );
}
