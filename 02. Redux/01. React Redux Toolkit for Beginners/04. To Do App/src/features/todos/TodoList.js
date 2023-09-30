import {
  useGetTodosQuery,
  useAddToDoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from '../api/apiSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import TodoItem from './TodoItem';

export default function ToDoList() {
  const [newTodo, setNewTodo] = useState('');

  const {
    data: todos,
    // https://www.codemzy.com/blog/react-query-isloading-vs-isfetching
    //https://stackoverflow.com/questions/75401477/reasons-for-using-isloading-or-isfetching-in-react-query
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    // https://redux-toolkit.js.org/rtk-query/api/created-api/hooks#usequery
  } = useGetTodosQuery();
  const [addTodo] = useAddToDoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  function handleSubmit(e) {
    e.preventDefault();
    addTodo({ userId: 1, title: newTodo, completed: false });
    setNewTodo('');
  }

  function handleUpdateTodo(todo) {
    updateTodo({ ...todo, completed: !todo.completed });
  }

  function handleDeleteTodo(todoId) {
    deleteTodo({ id: todoId });
  }

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
      </div>
      <button className="submit">
        <FontAwesomeIcon icon={faUpload} />
      </button>
    </form>
  );

  let content = <></>;

  if (isLoading) {
    // console.log('isLoading', isLoading);
    content = <p>Loading...</p>;
  }
  if (isSuccess) {
    // console.log('isSuccess', isSuccess);
    content = (
      <>
        {isFetching && <p style={{ textAlign: 'center' }}>Loading...</p>}
        <TodoItem
          todos={todos}
          isFetching={isFetching}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </>
    );
  }
  if (isError) {
    content = <p>{error};</p>;
  }

  return (
    <main>
      <h1>Todo list</h1>
      {newItemSection}
      {content}
    </main>
  );
}
