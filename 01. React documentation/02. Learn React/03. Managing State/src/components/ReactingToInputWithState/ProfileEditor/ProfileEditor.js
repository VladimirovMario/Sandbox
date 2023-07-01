import { useState } from 'react';

export default function ProfileEditor() {
  return (
    <>
      <h2>Challenge 2 of 3: Profile editor</h2>
      <EditProfile />
    </>
  );
}

function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState({
    firstName: 'Jane',
    lastName: 'Jacobs',
  });

  function handleClick(e) {
    e.preventDefault();
    setIsEditing(!isEditing);
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setValues((person) => ({ ...person, [name]: value }));
  }

  const labelStyles = () => ({
    display: 'block',
    marginBottom: '20px',
  });

  return (
    <form>
      <label style={labelStyles()}>
        First name: {!isEditing && <b>{values.firstName}</b>}
        {isEditing && (
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleOnChange}
          />
        )}
      </label>

      <label style={labelStyles()}>
        Last name: {!isEditing && <b>{values.lastName}</b>}
        {isEditing && (
          <input
            name="lastsName"
            type="text"
            value={values.lastName}
            onChange={handleOnChange}
          />
        )}
      </label>

      <button onClick={handleClick} type="submit">
        {!isEditing ? 'Edit' : 'Save'} Profile
      </button>
      <p>
        <i>
          Hello, {values.firstName} {values.lastName}!
        </i>
      </p>
    </form>
  );
}
