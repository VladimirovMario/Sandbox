import { useState } from 'react';

export default function CopyingObjectsSpreadSyntax() {
  return (
    <>
      <h2>CopyingObjectsSpreadSyntax</h2>
      <Form />
    </>
  );
}

function Form() {
  const [person, sePerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  function handleChange(e) {
    sePerson({ ...person, [e.target.name]: e.target.value });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
