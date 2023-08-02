import AStopwatch from './AStopwatch/AStopwatch';
// import ClickCounter from './ClickCounter/ClickCounter';

export default function UseRef() {
  return (
    <>
      <h1>
        useRef is a React Hook that lets you reference a value that’s not needed
        for rendering
      </h1>
      <AStopwatch />
      {/* <ClickCounter /> */}
    </>
  );
}
