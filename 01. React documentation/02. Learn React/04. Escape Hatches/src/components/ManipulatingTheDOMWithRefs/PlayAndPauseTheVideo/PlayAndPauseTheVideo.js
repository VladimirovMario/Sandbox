import { useRef, useState } from 'react';

export default function PlayAndPauseTheVideo() {
  return (
    <>
      <h2>Challenge 1 of 4: Play and pause the video</h2>
      <VideoPlayer />
    </>
  );
}

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <button
        style={{ display: 'block', marginBottom: '20px' }}
        onClick={handleClick}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width={250}
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
