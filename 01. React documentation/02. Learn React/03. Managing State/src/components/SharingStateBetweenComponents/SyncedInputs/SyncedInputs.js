import { useState } from 'react';

export default function SyncedInputs() {
  return (
    <>
      <h2>Challenge 1 of 2: Synced inputs</h2>
      <InputsParent />
    </>
  );
}

function InputsParent() {
  const [value, setValues] = useState('');

  function handleChange(e) {
    setValues(e.target.value);
  }

  return (
    <>
      <Input
        label={'First input'}
        name="firstInput"
        value={value}
        onChange={handleChange}
      />
      <Input
        label={'Second input'}
        name="lastInput"
        value={value}
        onChange={handleChange}
      />
    </>
  );
}

function Input({ label, name, value, onChange }) {
  return (
    <label>
      {label}{' '}
      <input type="text" name={name} value={value} onChange={onChange} />
    </label>
  );
}
