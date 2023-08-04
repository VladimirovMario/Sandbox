import PreventingUnwantedLoadingIndicators from './PreventingUnwantedLoadingIndicators/PreventingUnwantedLoadingIndicators';
// import DisplayingAPendingVisualState from './DisplayingAPendingVisualState/DisplayingAPendingVisualState';
// import UpdatingTheCurrentTabInATransition from './UpdatingTheCurrentTabInATransition/UpdatingTheCurrentTabInATransition';

export default function UseTransition() {
  return (
    <>
      <h1>
        useTransition is a React Hook that lets you update the state without
        blocking the UI
      </h1>
      <PreventingUnwantedLoadingIndicators />
      {/* <DisplayingAPendingVisualState /> */}
      {/* <UpdatingTheCurrentTabInATransition /> */}
    </>
  );
}
