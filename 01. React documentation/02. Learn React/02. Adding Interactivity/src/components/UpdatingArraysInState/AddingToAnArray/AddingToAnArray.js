import { useState } from 'react';

export default function AddingToAnArray() {
  return (
    <>
      <h2>Adding to an array </h2>
      <List />
    </>
  );
}

let nextId = 0;

function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={() => {
          setArtists([{ id: nextId++, name }, ...artists]);
          setName('');
        }}
      >
        Add
      </button>

      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
