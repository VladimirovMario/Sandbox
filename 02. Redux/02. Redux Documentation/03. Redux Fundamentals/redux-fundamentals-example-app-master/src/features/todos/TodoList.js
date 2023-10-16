import TodoListItem from './TodoListItem';

export default function TodoList() {
  const todos = [];

  const renderedListItems = todos.map((todo) => {
    return <TodoListItem key={todo.id} todo={todo} />;
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
}
