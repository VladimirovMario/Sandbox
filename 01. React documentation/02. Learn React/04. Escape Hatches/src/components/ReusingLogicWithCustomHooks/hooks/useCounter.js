import { useState } from 'react';
import { useInterval } from './useInterval';

export function useCounter(delay = 1000) {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((count) => count + 1);
  }, delay);

  return count;
}
