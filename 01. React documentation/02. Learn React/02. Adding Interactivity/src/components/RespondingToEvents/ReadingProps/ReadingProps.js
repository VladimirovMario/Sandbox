export default function ReadingProps() {
  return (
    <>
      <h2>Reading props in event handlers</h2>
      <Toolbar />
    </>
  );
}

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
}
