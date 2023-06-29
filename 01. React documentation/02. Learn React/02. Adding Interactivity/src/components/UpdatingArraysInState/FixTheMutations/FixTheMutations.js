import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

export default function FixTheMutations() {
  return (
    <>
      <h2>Challenge 3 of 4: Fix the mutations using non-mutative methods</h2>
      <TaskApp />
    </>
  );
}

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    if (title.trim()) {
      setTodos((todo) => [...todo, { id: nextId++, title, done: false }]);
    }
  }

  function handleChangeTodo(nextTodo) {
    setTodos((state) =>
      state.map((t) => (t.id === nextTodo.id ? nextTodo : t))
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos((state) => state.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
