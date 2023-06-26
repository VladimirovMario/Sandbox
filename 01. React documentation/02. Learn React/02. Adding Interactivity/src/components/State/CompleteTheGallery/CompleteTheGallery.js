import { useState } from 'react';
import { sculptureList } from '../data';

export default function CompleteTheGallery() {
  return (
    <>
      <h2>Challenge 1 of 4: Complete the gallery</h2>
      <Gallery />
    </>
  );
}

function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let isLast = index < sculptureList.length - 1;
  let isFirst = index > 0;

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handlePreviousClick() {
    setIndex(index - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <div
      style={{
        width: '400px',
        borderRadius: '12px',
        border: '2px solid grey',
        padding: '12px',
      }}
    >
      <div style={{ display: 'flex' }}>
        <button onClick={handlePreviousClick} disabled={!isFirst}>
          Previous
        </button>
        <button onClick={handleNextClick} disabled={!isLast}>
          Next
        </button>
      </div>

      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}
