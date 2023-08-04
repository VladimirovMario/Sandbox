import { useState } from 'react';
import TabButton from './TabButton';
import AboutTab from './AboutTab';
import PostsTab from './PostsTab';
import ContactTab from './ContactTab';

export default function DisplayingAPendingVisualState() {
  return (
    <>
      <h2>Displaying a pending visual state during the transition</h2>
      <TabContainer />
    </>
  );
}

function TabContainer() {
  const [tab, setTab] = useState('about');

  return (
    <>
      <TabButton isActive={tab === 'about'} onClick={() => setTab('about')}>
        About
      </TabButton>
      <TabButton isActive={tab === 'posts'} onClick={() => setTab('posts')}>
        Posts (slow)
      </TabButton>
      <TabButton isActive={tab === 'contact'} onClick={() => setTab('contact')}>
        Contact
      </TabButton>
      <hr />
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </>
  );
}
