// https://redd.one/blog/debounce-vs-throttle
import { useRef } from 'react';

export default function FixDebouncing() {
  return (
    <>
      <h2>Challenge 3 of 4: Fix debouncing</h2>
      <Dashboard />
    </>
  );
}

function DebouncedButton({ onClick, children }) {
  const timeoutId = useRef(null);

  function debounced() {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      onClick();
    }, 1000);
  }

  return <button onClick={debounced}>{children}</button>;
}

function Dashboard() {
  return (
    <>
      <DebouncedButton onClick={() => alert('Spaceship launched!')}>
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton onClick={() => alert('Soup boiled!')}>
        Boil the soup
      </DebouncedButton>
      <DebouncedButton onClick={() => alert('Lullaby sung!')}>
        Sing a lullaby
      </DebouncedButton>
    </>
  );
}
