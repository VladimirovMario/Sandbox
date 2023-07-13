import { useRef } from 'react';

export default function FocusTheSearchField() {
  return (
    <>
      <h2>Challenge 2 of 4: Focus the search field</h2>
      <Page />
    </>
  );
}

function Page() {
  const searchInputRef = useRef(null);

  function handleClick() {
    searchInputRef.current.focus();
  }

  return (
    <>
      <nav>
        <button onClick={handleClick}>Search</button>
      </nav>
      <input ref={searchInputRef} type="text" placeholder="Looking for something?" />
    </>
  );
}
