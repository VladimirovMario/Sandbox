import { createSelector } from 'reselect';
import { client } from '../../api/client';
import { StatusFilters } from '../filters/filtersSlice';

export const selectFilteredTodos = createSelector(
  // First input selector: all todos
  (state) => state.todos,
  // Second input selector: all filter values
  (state) => state.filters,
  // Output selector: receives both values
  (todos, filters) => {
    const { status, colors } = filters;
    const showAllCompletions = status === StatusFilters.All;
    if (showAllCompletions && colors.length === 0) {
      return todos;
    }

    const completedStatus = status === StatusFilters.Completed;
    // Return either active or completed todos based on filter
    return todos.filter((todo) => {
      const statusMatches =
        showAllCompletions || todo.completed === completedStatus;
      const colorMatches = colors.length === 0 || colors.includes(todo.color);
      return statusMatches && colorMatches;
    });
  }
);

export const selectFilteredTodoIds = createSelector(
  // Pass our other memoized selector as an input
  selectFilteredTodos,
  // And derive data in the output selector
  (filteredTodos) => filteredTodos.map((todo) => todo.id)
);

export const selectTodoIds = createSelector(
  // First, pass one or more "input selector" functions:
  (state) => state.todos,
  // Then, an "output selector" that receives all the input results as arguments
  // and returns a final result value
  (todos) => todos.map((todo) => todo.id)
);

export const todosLoaded = (todos) => {
  return {
    type: 'todos/todosLoaded',
    payload: todos,
  };
};

export const todoAdded = (todo) => ({ type: 'todos/todoAdded', payload: todo });

// Thunk function
export const fetchTodos = () => async (dispatch, getState) => {
  const response = await client.get('/fakeApi/todos');
  dispatch(todosLoaded(response.todos));
};

// Write a synchronous outer function that receives the `text` parameter:
export function saveNewTodo(text) {
  // And then creates and returns the async thunk function:
  return async function saveNewTodoThunk(dispatch, getState) {
    const initialTodo = { text };
    const response = await client.post('/fakeApi/todos', { todo: initialTodo });
    dispatch(todoAdded(response.todo));
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
