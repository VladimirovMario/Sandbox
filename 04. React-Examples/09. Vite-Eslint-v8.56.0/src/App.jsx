import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
    }

    return () => {};
  }, []);

  return <div>App</div>;
}

export default App;
