import { Suspense, useState } from 'react';
import TabButton from './TabButton';
import AboutTab from './AboutTab';
import PostsTab from './PostsTab';
import ContactTab from './ContactTab';

export default function PreventingUnwantedLoadingIndicators() {
  return (
    <>
      <h2>Preventing unwanted loading indicators</h2>
      <TabContainer />
    </>
  );
}

function TabContainer() {
  const [tab, setTab] = useState('about');

  return (
    <Suspense fallback={<h1>🌀 Loading...</h1>}>
      <TabButton isActive={tab === 'about'} onClick={() => setTab('about')}>
        About
      </TabButton>
      <TabButton isActive={tab === 'posts'} onClick={() => setTab('posts')}>
        Posts
      </TabButton>
      <TabButton isActive={tab === 'contact'} onClick={() => setTab('contact')}>
        Contact
      </TabButton>
      <hr />
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </Suspense>
  );
}
