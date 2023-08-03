import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore';

export default function SubscribingToAnExternalStore() {
  return (
    <>
      <h2>Subscribing to an external store</h2>
      <TodosApp />
    </>
  );
}

function TodosApp() {
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot
  );

  return (
    <>
      <button onClick={() => todosStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
