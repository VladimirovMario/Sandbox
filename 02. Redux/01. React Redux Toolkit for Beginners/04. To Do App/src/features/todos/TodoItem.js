import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TodoItem({
  todos,
  handleUpdateTodo,
  handleDeleteTodo,
}) {
  return todos.slice(0, 10).map((todo) => (
    <article key={todo.id}>
      <div className="todo">
        <input
          type="checkbox"
          checked={todo.completed}
          id={todo.id}
          onChange={() => handleUpdateTodo(todo)}
        />
        <label htmlFor={todo.id}>{todo.title}</label>
      </div>
      <button className="trash" onClick={() => handleDeleteTodo(todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </article>
  ));
}
