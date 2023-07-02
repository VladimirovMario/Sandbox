
import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function ImplementMultipleSelection() {
  return (
    <>
      <h2>Challenge 4 of 4: Implement multiple selection</h2>
      <MailClient />
    </>
  );
}
// https://react.dev/learn/choosing-the-state-structure
/*
 This explanation is for the first solution in the React documentation.
One minor downside of using an array is that for each item, you’re calling selectedIds.includes(letter.id) to check whether it’s selected. 
If the array is very large, this can become a performance problem because array search with includes() takes linear time, and you’re doing this search for each individual item.
To fix this, you can hold a Set in state instead, which provides a fast has() operation:
Now each item does a selectedIds.has(letter.id) check, which is very fast.
Keep in mind that you should not mutate objects in state, and that includes Sets, too. This is why the handleToggle function creates a copy of the Set first, and then updates that copy.
*/
function MailClient() {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const selectedCount = selectedIds.size;

  function handleToggle(toggledId) {
    // Create a copy (to avoid mutation).
    const nextIds = new Set(selectedIds);
    if (nextIds.has(toggledId)) {
      nextIds.delete(toggledId);
    } else {
      nextIds.add(toggledId);
    }
    setSelectedIds(nextIds);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.has(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}

// My solution
/*
import { useState } from 'react';
import { letters as initialLetters } from './data.js';
import Letter from './Letter.js';

export default function ImplementMultipleSelection() {
  return (
    <>
      <h2>Challenge 4 of 4: Implement multiple selection</h2>
      <MailClient />
    </>
  );
}

function MailClient() {
  const [letters, setData] = useState(initialLetters);
  const selectedCount = letters.filter((l) => l.isStarred).length;

  function handleToggle(toggledId) {
    setData(
      letters.map((letter) => {
        if (letter.id === toggledId) {
          return { ...letter, isStarred: !letter.isStarred };
        } else {
          return letter;
        }
      })
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={letter.isStarred}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
*/
