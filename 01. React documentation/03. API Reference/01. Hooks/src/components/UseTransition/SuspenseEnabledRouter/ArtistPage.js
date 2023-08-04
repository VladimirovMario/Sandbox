import { Suspense } from 'react';
import Biography from './Biography';
import Albums from './Albums';
import Panel from './Panel';

import styles from './ArtistPage.module.css';

export default function ArtistPage({ artist }) {
  return (
    <>
      <h1>{artist.name}</h1>
      <Biography artistId={artist.id} />
      <Suspense fallback={<AlbumsGlimmer />}>
        <Panel>
          <Albums artistId={artist.id} />
        </Panel>
      </Suspense>
    </>
  );
}

function AlbumsGlimmer() {
  return (
    <div className={styles['glimmer-panel']}>
      <div className={styles['glimmer-line']} />
      <div className={styles['glimmer-line']} />
      <div className={styles['glimmer-line']} />
    </div>
  );
}
