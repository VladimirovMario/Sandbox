import { useId } from 'react';

export default function SeveralRelatedElements() {
  return (
    <>
      <h2>Generating IDs for several related elements</h2>
      <Form />
    </>
  );
}

function Form() {
  const id = useId();
  return (
    <form>
      <label htmlFor={id + '-firstName'}>First Name:</label>
      <input id={id + '-firstName'} type="text" />
      <hr />
      <label htmlFor={id + '-lastName'}>Last Name:</label>
      <input id={id + '-lastName'} type="text" />
    </form>
  );
}
