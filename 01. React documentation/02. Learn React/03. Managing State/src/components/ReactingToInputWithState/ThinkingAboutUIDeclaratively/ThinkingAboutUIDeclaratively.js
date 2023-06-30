import { useState } from 'react';

export default function ThinkingAboutUIDeclaratively() {
  return (
    <>
      <h2>Thinking about UI declaratively</h2>
      <Form />
    </>
  );
}

function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('empty');

  if (status === 'success') {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer.trim());
      setStatus('success');
    } catch (error) {
      setStatus('typing');
      setError(error);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
    setStatus('typing');
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        ></textarea>
        <br />

        <button disabled={answer.length === 0 || status === 'submitting'}>
          Submit
        </button>

        {error !== null && <p style={{ color: 'red' }}>{error.message}</p>}
      </form>
    </>
  );
}

async function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

// let statuses = ['empty', 'typing', 'submitting', 'success', 'error'];

// function App() {
//   return (
//     <>
//       {statuses.map((status) => (
//         <section key={status}>
//           <h4>Form ({status}):</h4>
//           <Form status={status} />
//         </section>
//       ))}
//     </>
//   );
// }
