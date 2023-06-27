import { useState } from 'react';

export default function UpdatingANestedObject() {
  return (
    <>
      <h2>Updating a nested object</h2>
      <Form />
    </>
  );
}

function Form() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  /**
   * Handle change event for form inputs.
   * Updates the person state object with the new values.
   *
   * @param {object} e - The event object containing information about the input change.
   */
  function handleChange(e) {
    const { name, value } = e.target;

    setPerson((person) => ({
      ...person,
      [name]: value,
      artwork: { ...person.artwork, [name]: value },
    }));
  }

  return (
    <>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={person.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Title:
        <input
          name="title"
          type="text"
          value={person.artwork.title}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          name="city"
          type="text"
          value={person.artwork.city}
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input
          name="image"
          type="text"
          value={person.artwork.image}
          onChange={handleChange}
        />
      </label>

      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}

/*
  // Separate the handler function, reasons:
  // While having a single handler function can be convenient,
  // it may become more complex as the form grows.  
  // Consider separating the handler function to handle specific fields individually.

  function handlePersonChange(e) {
    const { name, value } = e.target;
  
    setPerson(prevPerson => ({
      ...prevPerson,
      [name]: value
    }));
  }
  
  function handleArtworkChange(e) {
    const { name, value } = e.target;
  
    setPerson(prevPerson => ({
      ...prevPerson,
      artwork: {
        ...prevPerson.artwork,
        [name]: value
      }
    }));
  }
*/
