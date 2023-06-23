export default function AddingEventHandlers() {
  return (
    <>
      <h2>Adding event handlers</h2>
      <Button />
    </>
  );
}

function Button() {
    function handleClick(){
        alert('Clicked')
    }
  return <button onClick={handleClick} >Click me</button>;
}
