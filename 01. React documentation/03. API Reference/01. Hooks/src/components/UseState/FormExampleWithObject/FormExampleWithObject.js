import { useState } from 'react';

export default function FormExampleWithObject() {
  return (
    <>
      <h2>Example 1 of 4: Form (object)</h2>
      <Form />
    </>
  );
}

function Form() {
  const [formValues, setFormVales] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  return (
    <>
      <label htmlFor="firstName">
        First name
        <input
          type="text"
          id="firstName"
          value={formValues.firstName}
          onChange={(e) => {
            setFormVales({ ...formValues, firstName: e.target.value });
          }}
        />
      </label>
      <label htmlFor="lastName">
        Last name
        <input
          type="text"
          id="lastName"
          value={formValues.lastName}
          onChange={(e) => {
            setFormVales({ ...formValues, lastName: e.target.value });
          }}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          value={formValues.email}
          onChange={(e) => {
            setFormVales({ ...formValues, email: e.target.value });
          }}
        />
      </label>
      <p>
        {formValues.firstName} {formValues.lastName} ({formValues.email})
      </p>
    </>
  );
}
