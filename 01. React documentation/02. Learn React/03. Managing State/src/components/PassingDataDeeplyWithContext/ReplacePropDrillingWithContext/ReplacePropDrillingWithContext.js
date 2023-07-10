import { useContext, useState } from 'react';
import { places } from './data';
import { ImageSizeContext } from './Context';

export default function ReplacePropDrillingWithContext() {
  return (
    <>
      <h2>Challenge 1 of 1: Replace prop drilling with context</h2>
      <App />
    </>
  );
}

function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => setIsLarge(e.target.checked)}
        />
        Use large images
      </label>
      <hr />

      <ImageSizeContext.Provider value={imageSize}>
        <List />
      </ImageSizeContext.Provider>
    </>
  );
}

function List() {
  const listItems = places.map((place) => (
    <li style={ListItemStyles()} key={place.id}>
      <Place place={place} />
    </li>
  ));

  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      style={imageSizes(imageSize)}
      src={getImageUrl(place)}
      alt={place.name}
    />
  );
}

const ListItemStyles = () => ({
  marginBottom: '10px',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: '20px',
  alignItems: 'center',
});

const imageSizes = (imageSize) => ({
  width: imageSize,
  height: imageSize,
});

function getImageUrl(place) {
  return 'https://i.imgur.com/' + place.imageId + 'l.jpg';
}
