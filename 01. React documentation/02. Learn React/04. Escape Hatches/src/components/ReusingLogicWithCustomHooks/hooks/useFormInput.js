import { useState } from 'react';

export function useFormInput(initialValues) {
  const [value, setValue] = useState(initialValues);

  function handleChange(e) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  return inputProps;
}
