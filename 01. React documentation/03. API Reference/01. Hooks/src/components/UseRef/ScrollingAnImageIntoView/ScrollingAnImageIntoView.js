import { useRef } from 'react';
import styles from './ScrollingAnImageIntoView.module.css';

export default function ScrollingAnImageIntoView() {
  return (
    <>
      <h2>Example 2 of 4: Scrolling an image into view</h2>
      <CatFriends />
    </>
  );
}

function CatFriends() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll('li > img')[index];

    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  return (
    <>
      <div className={styles.container}>
        <nav>
          <button onClick={() => scrollToIndex(0)}>Tom</button>
          <button onClick={() => scrollToIndex(1)}>Maru</button>
          <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
        </nav>
      </div>

      <div className={styles.container}>
        <ul ref={listRef}>
          <li>
            <img src="https://placekitten.com/g/200/200" alt="Tom" />
          </li>
          <li>
            <img src="https://placekitten.com/g/300/200" alt="Maru" />
          </li>
          <li>
            <img src="https://placekitten.com/g/250/200" alt="Jellylorum" />
          </li>
        </ul>
      </div>
    </>
  );
}
