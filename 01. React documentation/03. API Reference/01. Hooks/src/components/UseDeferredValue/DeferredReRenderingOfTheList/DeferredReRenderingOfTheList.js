import { useDeferredValue, useState } from 'react';
import SlowList from './SlowList';

export default function DeferredReRenderingOfTheList() {
  return (
    <>
      <h2>Example 1 of 2: Deferred re-rendering of the list</h2>
      <App />
    </>
  );
}

function App() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <SlowList text={deferredText} />
    </>
  );
}
