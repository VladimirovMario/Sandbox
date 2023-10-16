import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';

const selectTodoIds = (state) => state.todos.map((todo) => todo.id);

export default function TodoList() {
  const todoIds = useSelector(selectTodoIds);

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />;
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
}
