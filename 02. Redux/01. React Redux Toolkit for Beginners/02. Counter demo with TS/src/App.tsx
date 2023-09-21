import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { useAppDispatch, useAppSelector } from './app/hook';
import {
  increment,
  amountAdded,
  amountReset,
} from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState('');
  const addNumber = Number(amount) || 0;

  function handleClick() {
    dispatch(increment());
  }

  function handleAddToAmount() {
    dispatch(amountAdded(addNumber));
  }

  function handleReset() {
    setAmount('');
    dispatch(amountReset());
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAddToAmount}>Add Amount</button>
        <button onClick={handleReset}>Reset</button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
