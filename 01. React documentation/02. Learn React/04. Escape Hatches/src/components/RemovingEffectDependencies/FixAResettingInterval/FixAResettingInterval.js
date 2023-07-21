import { useEffect } from 'react';
import { useState } from 'react';

export default function FixAResettingInterval() {
  return (
    <>
      <h2>Challenge 1 of 4: Fix a resetting interval</h2>
      <Timer />
    </>
  );
}

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('✅ Creating an interval');

    const id = setInterval(() => {
      console.log('⏰ Interval tick');
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      console.log('❌ Clearing an interval');
      clearInterval(id);
    };
  }, []);

  return <h3>Counter: {count}</h3>;
}
