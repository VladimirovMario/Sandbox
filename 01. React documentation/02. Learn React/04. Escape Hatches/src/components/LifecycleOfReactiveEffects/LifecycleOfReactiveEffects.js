import FixAConnectionSwitch from './FixAConnectionSwitch/FixAConnectionSwitch';
// import InvestigateAStaleValueBug from './InvestigateAStaleValueBug/InvestigateAStaleValueBug';
// import SwitchSynchronizationOnAndOff from './SwitchSynchronizationOnAndOff/SwitchSynchronizationOnAndOff';
// import FixReconnectingOnEveryKeystroke from './FixReconnectingOnEveryKeystroke/FixReconnectingOnEveryKeystroke';
// import EffectCanReSynchronize from './EffectCanReSynchronize/EffectCanReSynchronize';

export default function LifecycleOfReactiveEffects() {
  return (
    <>
      <h1>Lifecycle of Reactive Effects</h1>
      <FixAConnectionSwitch />
      {/* <InvestigateAStaleValueBug /> */}
      {/* <SwitchSynchronizationOnAndOff /> */}
      {/* <FixReconnectingOnEveryKeystroke /> */}
      {/* <EffectCanReSynchronize /> */}
    </>
  );
}

/*
Recap

    Components can mount, update, and unmount.
    Each Effect has a separate lifecycle from the surrounding component.
    Each Effect describes a separate synchronization process that can start and stop.
    When you write and read Effects, think from each individual Effect’s perspective (how to start and stop synchronization) rather than from the component’s perspective (how it mounts, updates, or unmounts).
    Values declared inside the component body are “reactive”.
    Reactive values should re-synchronize the Effect because they can change over time.
    The linter verifies that all reactive values used inside the Effect are specified as dependencies.
    All errors flagged by the linter are legitimate. There’s always a way to fix the code to not break the rules.
*/