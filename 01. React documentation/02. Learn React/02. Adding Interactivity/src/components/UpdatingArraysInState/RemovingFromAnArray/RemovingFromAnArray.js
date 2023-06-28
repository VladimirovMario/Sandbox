import { useState } from 'react';

export default function RemovingFromAnArray() {
  return (
    <>
      <h2>Removing from an array</h2>
      <List />
    </>
  );
}

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

function List() {
  const [artists, setArtists] = useState(initialArtists);

  function onDeleteHandler(id) {
    setArtists(artists.filter((artist) => artist.id !== id));
  }

  return (
    <>
      <h3>Inspiring sculptors:</h3>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => onDeleteHandler(artist.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
