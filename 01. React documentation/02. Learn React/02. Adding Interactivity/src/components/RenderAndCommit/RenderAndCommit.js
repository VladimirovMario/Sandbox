import { useState, useEffect } from 'react';

export default function RenderAndCommit() {
  return (
    <>
      <h1>Render and Commit</h1>
      <Clock />
    </>
  );
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Clock() {
  return (
    <>
      <h1>{useTime().toLocaleTimeString()}</h1>
      <input />
    </>
  );
}

/*
Recap

    Any screen update in a React app happens in three steps:
        Trigger
        Render
        Commit
    You can use Strict Mode to find mistakes in your components
    React does not touch the DOM if the rendering result is the same as last time

*/
