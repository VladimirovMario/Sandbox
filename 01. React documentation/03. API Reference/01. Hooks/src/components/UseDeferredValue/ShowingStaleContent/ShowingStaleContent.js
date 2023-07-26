import { Suspense, useDeferredValue, useState } from 'react';
import SearchResults from './SearchResults';

export default function ShowingStaleContent() {
  return (
    <>
      <h2>Showing stale content while fresh content is loading</h2>
      <App />
    </>
  );
}

function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  return (
    <div style={styles()}>
      <label>
        Search albums:
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <div
          style={{
            opacity: isStale ? 0.5 : 1,
            transition: isStale
              ? 'opacity 0.2s 0.2s linear'
              : 'opacity 0s 0s linear',
          }}
        >
          <SearchResults query={deferredQuery} />
        </div>
      </Suspense>
    </div>
  );
}

function styles() {
  return {
    boxShadow: '0 4px 6px 4px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)',
    borderRadius: '.5rem',
    padding: '20px',
    transitionDuration: '.15s',
  };
}
