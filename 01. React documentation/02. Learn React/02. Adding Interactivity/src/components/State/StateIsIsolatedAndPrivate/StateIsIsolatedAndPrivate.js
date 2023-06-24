import Gallery from './Gallery';

export default function StateIsIsolatedAndPrivate() {
  return (
    <>
      <h2>State is isolated and private</h2>
      <Page />
    </>
  );
}

function Page() {
  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Gallery />
      <Gallery />
    </div>
  );
}
