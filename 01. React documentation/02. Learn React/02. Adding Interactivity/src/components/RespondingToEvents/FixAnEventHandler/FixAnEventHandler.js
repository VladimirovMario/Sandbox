export default function FixAnEventHandler() {
  return (
    <>
      <h2>Challenge 1 of 2: Fix an event handler</h2>
      <LightSwitch />
    </>
  );
}

function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;

    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }

  return <button onClick={handleClick}>Toggle the lights</button>;
}
