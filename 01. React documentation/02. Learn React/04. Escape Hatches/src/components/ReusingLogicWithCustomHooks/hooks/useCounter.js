import { useState, useEffect } from 'react';

export function useCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countId = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(countId);
    };
  }, []);

  return count;
}
