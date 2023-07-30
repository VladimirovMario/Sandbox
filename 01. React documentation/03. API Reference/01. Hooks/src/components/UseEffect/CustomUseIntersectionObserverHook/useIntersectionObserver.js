import { useEffect } from 'react';
import { useState } from 'react';

export function useIntersectionObserver(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });

    observer.observe(div, {
      threshold: 1.0,
    });
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}
