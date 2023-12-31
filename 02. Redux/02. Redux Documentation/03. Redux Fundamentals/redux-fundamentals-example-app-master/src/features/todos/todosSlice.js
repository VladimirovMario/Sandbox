import { client } from '../../api/client';

// Thunk function
export async function fetchTodos(dispatch, getState) {
  const response = await client.get('/fakeApi/todos');
  // const stateBefore = getState();
  // console.log('Todos before dispatch: ', stateBefore.todos.length);
  dispatch({ type: 'todos/todosLoaded', payload: response.todos });
  // const stateAfter = getState();
  // console.log('Todos after dispatch: ', stateAfter.todos.length);
}

// Write a synchronous outer function that receives the `text` parameter:
export function saveNewTodo(text) {
  // And then creates and returns the async thunk function:
  return async function saveNewTodoThunk(dispatch, getState) {
    const initialTodo = { text };
    const response = await client.post('/fakeApi/todos', { todo: initialTodo });
    dispatch({ type: 'todos/todoAdded', payload: response.todo });
  };
}

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case 'todos/todosLoaded': {
      // Replace the existing state entirely by returning the new value
      return action.payload;
    }
    case 'todos/todoAdded': {
      // Return a new todos state array with the new todo item at the end
      return [...state, action.payload];
    }
    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }
    case 'todos/colorSelected': {
      const { color, todoId } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color,
        };
      });
    }
    case 'todos/todoDeleted': {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case 'todos/allCompleted': {
      return state.map((todo) => ({ ...todo, completed: true }));
    }
    case 'todos/completedCleared': {
      return state.filter((todo) => !todo.completed);
    }
    default:
      return state;
  }
}
