import { useState } from 'react';

export default function FixIncorrectStateUpdates() {
  return (
    <>
      <h2>Challenge 1 of 3: Fix incorrect state updates</h2>
      <Scoreboard />
    </>
  );
}

function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer((state) => ({ ...state, score: player.score++ }));
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input
          type="text"
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
