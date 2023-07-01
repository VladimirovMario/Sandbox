import { useState } from 'react';
import styles from './AddAndRemoveAClass.module.css';
// Using Multiple Classes With React CSS Modules
// https://www.codeconcisely.com/posts/react-css-modules-multiple-classes/#working-with-many-classes-in-css-modules

export default function AddAndRemoveAClass() {
  return (
    <>
      <h2>Challenge 1 of 3: Add and remove a CSS class</h2>
      <Picture />
    </>
  );
}

function Picture() {
  const [isActive, setIsActive] = useState(false);

  function handleImageClick(e) {
    e.stopPropagation();
    setIsActive(true);
  }

  function handleContainerClick() {
    setIsActive(false);
  }

  let backgroundClassName = styles.background;
  let pictureClassName = styles.picture;

  if (isActive) {
    pictureClassName += ` ${styles['picture--active']}`;
  } else {
    backgroundClassName += ` ${styles['background--active']}`;
  }

  return (
    <div className={backgroundClassName} onClick={handleContainerClick}>
      <img
        className={pictureClassName}
        src="https://i.imgur.com/5qwVYb1.jpeg"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        onClick={handleImageClick}
      />
    </div>
  );
}

// Solution with tagName check
/*
function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = styles.background;
  let pictureClassName = styles.picture;

  const onClickHandler = (e) => {
    e.target.tagName === 'IMG' ? setIsActive(true) : setIsActive(false);
  };

  if (isActive) {
    pictureClassName += ` ${styles['picture--active']}`;
  } else {
    backgroundClassName += ` ${styles['background--active']}`;
  }

  return (
    <div onClick={onClickHandler} className={backgroundClassName}>
      <img
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
*/
