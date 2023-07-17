import { useState } from 'react';
import { createTodo, initialTodos } from './todos';

export default function TransformDataWithoutEffects() {
  return (
    <>
      <h2>Challenge 1 of 4: Transform data without Effects</h2>
      <TodoList />
    </>
  );
}

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [hideCompleted, setHideCompleted] = useState(false);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const visibleTodos = hideCompleted ? activeTodos : todos;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={hideCompleted}
          onChange={(e) => {
            setHideCompleted(e.target.checked);
          }}
        />
        Show only active todos
      </label>

      <NewTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />

      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>{activeTodos.length} todos left</footer>
    </>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
}
