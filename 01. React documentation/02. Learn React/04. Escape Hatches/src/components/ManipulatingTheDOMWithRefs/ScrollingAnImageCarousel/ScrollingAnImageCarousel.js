import { useRef, useState } from 'react';
import styles from './ScrollingAnImageCarousel.module.css';
import { flushSync } from 'react-dom';

export default function ScrollingAnImageCarousel() {
  return (
    <>
      <h2>Challenge 3 of 4: Scrolling an image carousel</h2>
      <CatFriends />
    </>
  );
}

function CatFriends() {
  // Represents the index of the currently active image
  const [activeIndex, setActiveIndex] = useState(0);
  // Reference to the DOM element that needs to be scrolled into view
  const scrollRef = useRef(null);

  // Calculate flags for next and previous index
  const isNextIndex = activeIndex < catList.length - 1;
  const isFirstIndex = activeIndex > 0;

  // Handle click on the next button
  function handleNextClick() {
    flushSync(() => {
      if (isNextIndex) {
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(0);
      }
    });

    // Scroll to the currently active image
    scrollToCurrView();
  }

  // Handle click on the previous button
  function handlePreviousClick() {
    flushSync(() => {
      if (isFirstIndex) {
        setActiveIndex(activeIndex - 1);
      } else {
        setActiveIndex(catList.length - 1);
      }
    });

    // Scroll to the currently active image
    scrollToCurrView();
  }

  // Scroll the currently active image into view
  function scrollToCurrView() {
    flushSync(() => {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    });
  }

  return (
    <>
      {/* Render navigation buttons */}
      <nav>
        <button onClick={handlePreviousClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </nav>

      <div>
        <ul>
          {/* Iterate over the catList and render CatItem component for each cat */}
          {catList.map((cat, i) => (
            <CatItem
              key={cat.id}
              cat={cat}
              activeIndex={activeIndex}
              catIndex={i}
              scrollRef={scrollRef}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

// Define the CatItem component
function CatItem({ cat, activeIndex, catIndex, scrollRef }) {
  // Check if the current cat item is the active image
  const isActive = activeIndex === catIndex;

  return (
    <li ref={isActive ? scrollRef : null}>
      {/* Render the cat image */}
      <img
        className={isActive ? styles['active'] : ''}
        src={cat.imageUrl}
        alt={`Cat #${cat.id}`}
      />
    </li>
  );
}

// Define the initial catList array
const catList = [];
for (let index = 0; index < 10; index++) {
  catList.push({
    id: `Gosho ${index}`,
    imageUrl: 'https://placekitten.com/250/200?image=' + index,
  });
}
