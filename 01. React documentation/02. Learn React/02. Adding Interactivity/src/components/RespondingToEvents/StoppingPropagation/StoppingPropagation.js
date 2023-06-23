export default function StoppingPropagation() {
  return (
    <>
      <h2>Stopping propagation</h2>
      <Toolbar />
    </>
  );
}

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function Toolbar() {
  return (
    <div
      style={{ background: "#aaa", padding: "5px" }}
      onClick={() => alert("You clicked on the toolbar!")}
    >
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
