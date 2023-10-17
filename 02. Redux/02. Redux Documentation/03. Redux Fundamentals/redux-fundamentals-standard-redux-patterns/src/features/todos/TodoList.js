import { useSelector } from 'react-redux';
import { selectTodoIds } from './todosSlice';
import TodoListItem from './TodoListItem';

export default function TodoList() {
  const todoIds = useSelector(selectTodoIds);

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />;
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
}
