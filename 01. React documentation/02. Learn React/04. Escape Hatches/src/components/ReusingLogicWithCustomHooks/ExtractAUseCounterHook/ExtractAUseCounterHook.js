import { useCounter } from '../hooks/useCounter';

export default function ExtractAUseCounterHook() {
  return (
    <>
      <h2>Challenge 1 of 5: Extract a useCounter Hook</h2>
      <Counter />
    </>
  );
}

function Counter() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}
