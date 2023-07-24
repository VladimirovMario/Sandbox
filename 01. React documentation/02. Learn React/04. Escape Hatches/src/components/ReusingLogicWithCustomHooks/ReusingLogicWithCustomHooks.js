import MakeTheCounterDelayConfigurable from './MakeTheCounterDelayConfigurable/MakeTheCounterDelayConfigurable';
// import ExtractAUseCounterHook from './ExtractAUseCounterHook/ExtractAUseCounterHook';
// import PlainCSSAnimation from './PlainCSSAnimation/PlainCSSAnimation';
// import MoreThanOneWay from './MoreThanOneWay/MoreThanOneWay';
// import CustomHooksHelpYouMigrate from './CustomHooksHelpYouMigrate/CustomHooksHelpYouMigrate';
// import PassingReactiveValuesBetweenHooks from './PassingReactiveValuesBetweenHooks/PassingReactiveValuesBetweenHooks';
// import ShareStatefulLogic from './ShareStatefulLogic/ShareStatefulLogic';
// import SharingLogicBetweenComponents from './SharingLogicBetweenComponents/SharingLogicBetweenComponents';

export default function ReusingLogicWithCustomHooks() {
  return (
    <>
      <h1>Reusing Logic with Custom Hooks</h1>
      <MakeTheCounterDelayConfigurable />
      {/* <ExtractAUseCounterHook /> */}
      {/* <PlainCSSAnimation /> */}
      {/* <MoreThanOneWay /> */}
      {/* <CustomHooksHelpYouMigrate /> */}
      {/* <PassingReactiveValuesBetweenHooks /> */}
      {/* <ShareStatefulLogic /> */}
      {/* <SharingLogicBetweenComponents /> */}
    </>
  );
}

/*
Recap

    Custom Hooks let you share logic between components.
    Custom Hooks must be named starting with use followed by a capital letter.
    Custom Hooks only share stateful logic, not state itself.
    You can pass reactive values from one Hook to another, and they stay up-to-date.
    All Hooks re-run every time your component re-renders.
    The code of your custom Hooks should be pure, like your component’s code.
    Wrap event handlers received by custom Hooks into Effect Events.
    Don’t create custom Hooks like useMount. Keep their purpose specific.
    It’s up to you how and where to choose the boundaries of your code.
*/
