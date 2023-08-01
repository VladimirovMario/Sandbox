import { useMemo } from 'react';
import { filterTodos } from './utils.js';

export default function TodoList({ todos, theme, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  const children = useMemo(() => <List items={visibleTodos} />, [visibleTodos]);
  return (
    <div style={styles(theme)}>
      <ul>
        <p>
          <b>
            Note: <code>filterTodos</code> is artificially slowed down!
          </b>
        </p>
        {children}
      </ul>
    </div>
  );
}

function List({ items }) {
  return (
    <>
      {items.map((todo) => (
        <li key={todo.id}>{todo.completed ? <s>{todo.text}</s> : todo.text}</li>
      ))}
    </>
  );
}

function styles(theme) {
  if (theme === 'dark') {
    return {
      backgroundColor: 'black',
      color: 'white',
    };
  } else {
    return {
      backgroundColor: 'white',
      color: 'black',
    };
  }
}
