import UpdatingDataPassedViaContext from './UpdatingDataPassedViaContext/UpdatingDataPassedViaContext';
// import PassingDataDeeplyIntoTheTree from './PassingDataDeeplyIntoTheTree/PassingDataDeeplyIntoTheTree';

export default function UseContext() {
  return (
    <>
      <h1>
        useContext is a React Hook that lets you read and subscribe to context
        from your component
      </h1>
      <UpdatingDataPassedViaContext />
      {/* <PassingDataDeeplyIntoTheTree /> */}
    </>
  );
}
