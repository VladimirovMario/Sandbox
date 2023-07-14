import { useEffect, useRef, useState } from 'react';

export default function FocusAFieldConditionally() {
  return (
    <>
      <h2>Challenge 2 of 4: Focus a field conditionally</h2>
      <Form />
    </>
  );
}

function MyInput({ shouldFocus, value, onChange }) {
  const ref = useRef(null);

  useEffect(() => {
    if (shouldFocus) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  return (
    <>
      <input ref={ref} value={value} onChange={onChange} type="text" />
    </>
  );
}

function Form() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} form
      </button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your first name:
            <MyInput
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              shouldFocus={true}
            />
          </label>
          <label>
            Enter your last name:
            <MyInput
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              shouldFocus={false}
            />
          </label>
          <p>
            Hello,{' '}
            <b>
              {firstName} {lastName}
            </b>
          </p>
        </>
      )}
    </>
  );
}
