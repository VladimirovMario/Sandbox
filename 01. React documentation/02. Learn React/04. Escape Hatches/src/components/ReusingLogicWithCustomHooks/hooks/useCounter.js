import { useState, useEffect } from 'react';

export function useCounter(delay = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countId = setInterval(() => {
      setCount((count) => count + 1);
    }, delay);

    return () => {
      clearInterval(countId);
    };
  }, [delay]);

  return count;
}
