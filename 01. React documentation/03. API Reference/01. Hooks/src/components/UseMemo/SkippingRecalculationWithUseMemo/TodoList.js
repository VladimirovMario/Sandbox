import { useMemo } from 'react';
import { filterTodos } from './utils';
import styles from './TodoList.module.css';

export default function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);

  return (
    <div className={styles[theme]}>
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
