import { useState, useEffect } from 'react';
import { fetchBio } from './fetchBio';

export default function FixFetchingInsideAnEffect() {
  return (
    <>
      <h2>Challenge 4 of 4: Fix fetching inside an Effect</h2>
      <Page />
    </>
  );
}

function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);

  useEffect(() => {
    let ignore = false;
    setBio(null);

    fetchBio(person).then((result) => {
      if (!ignore) {
        setBio(result);
      }
    });

    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <>
      <select value={person} onChange={(e) => setPerson(e.target.value)}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="George">George</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? 'Loading...'}</i>
      </p>
    </>
  );
}
