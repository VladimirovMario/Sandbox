import { useState, useEffect, useRef } from 'react';
import { FadeInAnimation } from './animation';

export default function ReTriggeringAnimation() {
  return (
    <>
      <h2>Challenge 2 of 4: Fix a re triggering animation</h2>
      <App />
    </>
  );
}

// The solution from React is to extract the non-reactive
// line of code into an Effect Event, and call that function from your Effect.
// Effect Event is experimental API that has not yet been released in a stable version of React.

function Welcome({ duration }) {
  const ref = useRef(null);
  const [animationDuration, setAnimationDuration] = useState(duration);

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    animation.start(animationDuration);
    return () => {
      animation.stop();
    };
  }, [animationDuration]);

  return (
    <h3 ref={ref} style={containerStyles()}>
      Welcome
    </h3>
  );
}

function App() {
  const [duration, setDuration] = useState(1000);
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        <input
          type="range"
          min={100}
          max={3000}
          value={duration}
          onChange={(e) => {
            setDuration(Number(e.target.value));
          }}
        />
        <br />
        Fade in duration: {duration} ms
      </label>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      <hr />
      {show && <Welcome duration={duration} />}
    </>
  );
}

function containerStyles() {
  return {
    opacity: 0,
    color: 'white',
    padding: 50,
    textAlign: 'center',
    fontSize: 50,
    backgroundImage:
      'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
  };
}
