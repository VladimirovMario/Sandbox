import Box from './Box';

export default function TrackingElementVisibility() {
  return (
    <>
      <h2>Example 5 of 5: Tracking element visibility</h2>
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
