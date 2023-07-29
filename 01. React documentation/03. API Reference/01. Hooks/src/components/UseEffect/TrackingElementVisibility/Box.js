// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
import { useEffect } from 'react';
import { useRef } from 'react';

export default function Box() {
  const ref = useRef(null);

  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
    });

    observer.observe(div, {
      threshold: 1.0,
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={ref} style={containerStyles()}></div>;
}

function containerStyles() {
  return {
    margin: 20,
    height: 100,
    width: 100,
    border: '2px solid black',
    backgroundColor: 'blue',
  };
}
