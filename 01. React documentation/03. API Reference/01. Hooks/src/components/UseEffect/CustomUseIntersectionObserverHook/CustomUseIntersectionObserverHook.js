import Box from './Box.js';

export default function CustomUseIntersectionObserverHook() {
  return (
    <>
      <h2>Example 3 of 3: Custom useIntersectionObserver Hook</h2>
      <App />
    </>
  );
}

function App() {
  return (
    <>
      <LongSection />
      <Box />
      <LongSection />
      <Box />
      <LongSection />
    </>
  );
}

function LongSection() {
  const items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
  }
  return <ul>{items}</ul>;
}
