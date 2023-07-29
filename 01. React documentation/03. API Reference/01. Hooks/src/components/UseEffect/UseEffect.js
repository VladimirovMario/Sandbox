import TriggeringAnAnimation from './TriggeringAnAnimation/TriggeringAnAnimation';
// import ListeningToAGlobalBrowserEvent from './ListeningToAGlobalBrowserEvent/ListeningToAGlobalBrowserEvent';
// import ConnectingToAChatServer from './ConnectingToAChatServer/ConnectingToAChatServer';

export default function UseEffect() {
  return (
    <>
      <h1>
        useEffect is a React Hook that lets you synchronize a component with an
        external system
      </h1>
      <TriggeringAnAnimation />
      {/* <ListeningToAGlobalBrowserEvent /> */}
      {/* <ConnectingToAChatServer /> */}
    </>
  );
}
