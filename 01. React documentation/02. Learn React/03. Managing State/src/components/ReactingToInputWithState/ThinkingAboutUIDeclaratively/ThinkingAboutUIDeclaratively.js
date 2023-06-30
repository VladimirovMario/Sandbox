export default function ThinkingAboutUIDeclaratively() {
  return (
    <>
      <h2>Thinking about UI declaratively</h2>
      <App />
    </>
  );
}

let statuses = ['empty', 'typing', 'submitting', 'success', 'error'];

function App() {
  return (
    <>
      {statuses.map((status) => (
        <section key={status}>
          <h4>Form ({status}):</h4>
          <Form status={status} />
        </section>
      ))}
    </>
  );
}

function Form({ status = 'empty' }) {
  if (status === 'success') {
    return <h1>That's right!</h1>;
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea disabled={status === 'submitting'}></textarea>
        <br />
        <button disabled={status === 'empty' || status === 'submitting'}>
          Submit
        </button>
        {status === 'error' && (
          <p style={{ color: 'red' }}>
            Good guess but a wrong answer. Try again!
          </p>
        )}
      </form>
    </>
  );
}
