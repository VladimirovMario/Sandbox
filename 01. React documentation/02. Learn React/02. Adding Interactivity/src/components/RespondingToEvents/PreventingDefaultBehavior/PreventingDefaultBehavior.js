export default function PreventingDefaultBehavior() {
  return (
    <>
      <h2>Preventing default behavior</h2>
      <Signup />
    </>
  );
}

function Signup() {
    
  function onSubmit(e) {
    e.preventDefault();
    alert("Submitting!");
  }

  return (
    <form onSubmit={onSubmit}>
      <input />
      <button>Send</button>
    </form>
  );
}
