import { useTransition } from 'react';
import { useState } from 'react';
import { Suspense } from 'react';
import IndexPage from './IndexPage';
import ArtistPage from './ArtistPage';
import Layout from './Layout';

export default function SuspenseEnabledRouter() {
  return (
    <>
      <h2>Building a Suspense-enabled router</h2>
      <App />
    </>
  );
}

function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  );
}

function Router() {
  const [page, setPage] = useState('/');
  const [isPending, startTransition] = useTransition();

  function navigate(url) {
    startTransition(() => {
      setPage(url);
    });
  }

  let content = <></>;

  if (page === '/') {
    content = <IndexPage navigate={navigate} />;
  } else if (page === '/the-beatles') {
    content = (
      <ArtistPage
        artist={{
          id: 'the-beatles',
          name: 'The Beatles',
        }}
      />
    );
  }

  return <Layout isPending={isPending}>{content}</Layout>;
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}
