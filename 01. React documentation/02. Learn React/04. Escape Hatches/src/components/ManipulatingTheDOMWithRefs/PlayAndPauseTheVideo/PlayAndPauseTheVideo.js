import { useRef, useState } from 'react';

export default function PlayAndPauseTheVideo() {
  return (
    <>
      <h2>Challenge 1 of 4: Play and pause the video</h2>
      <VideoPlayer />
    </>
  );
}

/**
 * VideoPlayer Component
 *
 * This component handles the functionality of playing and pausing a video.
 */
function VideoPlayer() {
  // State to manage whether the video is currently playing or not
  const [isPlaying, setIsPlaying] = useState(false);

  // Reference to the video element
  const ref = useRef(null);

  /**
   * Function to handle the click event of the play/pause button.
   * It toggles the isPlaying state and plays or pauses the video accordingly.
   */
  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play(); // Play the video
    } else {
      ref.current.pause(); // Pause the video
    }
  }

  return (
    <>
      {/* Button to play or pause the video */}
      <button
        style={{ display: 'block', marginBottom: '20px' }}
        onClick={handleClick}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      {/* Video element */}
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
