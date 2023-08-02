import { useState } from 'react';

export default function InitializerFunction() {
  return (
    <>
      <h2>Example 1 of 2: Passing the initializer function</h2>
      <TodoList />
    </>
  );
}

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1),
    });
  }
  return initialTodos;
}

function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');

  function handleAddTodo() {
    setTodos([{ id: todos.length, text: `Item ${text}` }, ...todos]);
    setText('');
  }

  return (
    <>
      <input
        type="text"
        value={text}
        placeholder="Add todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
