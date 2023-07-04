import { useState } from 'react';

export default function SwapTwoFormFields() {
  return (
    <>
      <h2>Challenge 2 of 5: Swap two form fields</h2>
      <App />
    </>
  );
}

function App() {
  const [reverse, setReverse] = useState(false);

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => {
          setReverse(e.target.checked);
        }}
      />
      Reverse order
    </label>
  );

  if (reverse) {
    return (
      <>
        <Field key={'lastName'} label="Last name" />
        <Field key={'firstName'} label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field key={'firstName'} label="First name" />
        <Field key={'lastName'} label="Last name" />
        {checkbox}
      </>
    );
  }
}

function Field({ label }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </label>
  );
}
