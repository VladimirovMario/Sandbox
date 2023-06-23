export default function EventPropagation() {
  return (
    <>
      <h2>Event propagation</h2>
      <Toolbar />
    </>
  );
}

function Toolbar() {
  return (
    <div
      style={{ background: "#aaa", padding: "5px" }}
      onClick={() => alert("You clicked on the toolbar!")}
    >
      <button onClick={() => alert("Playing!")}>Play Movie</button>
      <button onClick={() => alert("Uploading!")}>Upload Image</button>
    </div>
  );
}
