import { useState } from 'react';
import { createTodos } from './utils.js';
import TodoList from './TodoList.js';

export default function UseMemoAndMemo() {
  return (
    <>
      <h2>Example 1 of 2: Skipping re-rendering with useMemo and memo</h2>
      <App />
    </>
  );
}

const todos = createTodos();

function App() {
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <button onClick={() => setTab('all')}>All</button>
      <button onClick={() => setTab('active')}>Active</button>
      <button onClick={() => setTab('completed')}>Completed</button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList todos={todos} tab={tab} theme={isDark ? 'dark' : 'light'} />
    </>
  );
}
