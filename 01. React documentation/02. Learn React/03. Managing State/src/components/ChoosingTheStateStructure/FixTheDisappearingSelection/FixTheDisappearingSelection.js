import { useState } from 'react';
import { initialLetters } from '../letters';
import Letter from './Letter';

export default function FixTheDisappearingSelection() {
  return (
    <>
      <h2>Challenge 3 of 4: Fix the disappearing selection</h2>
      <MailClient />
    </>
  );
}

function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetter, setHighlightedLetter] = useState(null);

  function handleHover(letter) {
    setHighlightedLetter(letter.id);
  }

  function handleStar(starred) {
    setLetters(
      letters.map((letter) =>
        letter.id === starred.id
          ? { ...letter, isStarred: !letter.isStarred }
          : letter
      )
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      {letters.map((letter) => (
        <Letter
          key={letter.id}
          letter={letter}
          isHighlighted={letter.id === highlightedLetter}
          onHover={handleHover}
          onToggleStar={handleStar}
        />
      ))}
    </>
  );
}
