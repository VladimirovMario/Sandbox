import { useRef } from 'react';
import Post from './Post';

export default function ExposingYourOwnImperativeMethods() {
  return (
    <>
      <h2>Exposing your own imperative methods</h2>
      <Page />
    </>
  );
}

function Page() {
  const postRef = useRef(null);

  function handleClick() {
    postRef.current.scrollAndFocusAddComment();
  }

  return (
    <>
      <button onClick={handleClick}>Write a comment</button>
      <Post ref={postRef} />
    </>
  );
}
