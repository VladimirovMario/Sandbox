// import PuttingItAllTogether from './PuttingItAllTogether/PuttingItAllTogether';
// import FixingRaceConditionsInReactWithUseEffect from './FixingRaceConditionsInReactWithUseEffect/FixingRaceConditionsInReactWithUseEffect';
// import AddCleanupIfNeeded from './AddCleanupIfNeeded/AddCleanupIfNeeded';
// import SpecifyTheEffectDependencies from './SpecifyTheEffectDependencies/SpecifyTheEffectDependencies';
// import DeclareAnEffect from './DeclareAnEffect/DeclareAnEffect';

export default function SynchronizingWithEffects() {
  return (
    <>
      <h1>Synchronizing with Effects</h1>     
      {/* <PuttingItAllTogether /> */}
      {/* <FixingRaceConditionsInReactWithUseEffect /> */}
      {/* <AddCleanupIfNeeded /> */}
      {/* <SpecifyTheEffectDependencies /> */}
      {/* <DeclareAnEffect /> */}
    </>
  );
}

/*
Recap

    Unlike events, Effects are caused by rendering itself rather than a particular interaction.
    Effects let you synchronize a component with some external system (third-party API, network, etc).
    By default, Effects run after every render (including the initial one).
    React will skip the Effect if all of its dependencies have the same values as during the last render.
    You can’t “choose” your dependencies. They are determined by the code inside the Effect.
    Empty dependency array ([]) corresponds to the component “mounting”, i.e. being added to the screen.
    In Strict Mode, React mounts components twice (in development only!) to stress-test your Effects.
    If your Effect breaks because of remounting, you need to implement a cleanup function.
    React will call your cleanup function before the Effect runs next time, and during the unmount.

*/