import { useEffect, useRef, useState } from 'react';

export default function DeclareAnEffect() {
  return (
    <>
      <h2>Step 1: Declare an Effect</h2>
      <App />
    </>
  );
}

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return (
    <video
      ref={ref}
      src={src}
      loop
      playsInline
      controls
      style={{ width: '250px' }}
    ></video>
  );
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <button
        style={{ display: 'block', marginBottom: '20px' }}
        onClick={() => {
          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
