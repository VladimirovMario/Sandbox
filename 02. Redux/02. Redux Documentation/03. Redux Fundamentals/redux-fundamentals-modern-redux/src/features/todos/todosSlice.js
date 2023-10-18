import {
  // Import the necessary functions and modules
  createSelector,
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { client } from '../../api/client';
import { StatusFilters } from '../filters/filtersSlice';

// Create an async thunk for fetching todos
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await client.get('/fakeApi/todos');
  return response.todos;
});

// Create another async thunk for saving a new todo
export const saveNewTodo = createAsyncThunk(
  'todos/saveNewTodo',
  async (text, { getState, dispatch }) => {
    const initialTodo = { text };
    const response = await client.post('/fakeApi/todos', { todo: initialTodo });
    return response.todo;
  }
);

// Use createEntityAdapter to manage todo entities
const todosAdapter = createEntityAdapter();

// Define the initial state using the adapter
const initialState = todosAdapter.getInitialState({
  status: 'idle',
});

// Create a todosSlice with actions, reducers, and extra reducers
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Toggle a todo's completion status
    todoToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.completed = !todo.completed;
    },
    // Select a color for a todo
    todoColorSelected: {
      reducer(state, action) {
        const { todoId, color } = action.payload;
        state.entities[todoId].color = color;
      },
      prepare(todoId, color) {
        return { payload: { todoId, color } };
      },
    },
    // Use an adapter reducer function to remove a todo by ID
    todoDeleted: todosAdapter.removeOne,
    // Mark all todos as completed
    allTodosCompleted(state, action) {
      Object.values(state.entities).forEach((todo) => {
        todo.completed = true;
      });
    },
    // Clear completed todos
    completedTodosCleared(state, action) {
      const completedIds = Object.values(state.entities)
        .filter((todo) => todo.completed)
        .map((todo) => todo.id);
      // Use an adapter function as a "mutating" update helper
      todosAdapter.removeMany(state, completedIds);
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state during fetchTodos
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      // Handle fulfilled state after fetchTodos
      .addCase(fetchTodos.fulfilled, (state, action) => {
        todosAdapter.setAll(state, action.payload);
        state.status = 'idle';
      })
      // Use another adapter function as a reducer to add a todo
      .addCase(saveNewTodo.fulfilled, todosAdapter.addOne);
  },
});

// Export action creators
export const {
  todoAdded,
  todoToggled,
  todoColorSelected,
  todoDeleted,
  allTodosCompleted,
  completedTodosCleared,
} = todosSlice.actions;

// Export the todosSlice reducer
export default todosSlice.reducer;

// Create selectors for todos and todo IDs
export const { selectAll: selectTodos, selectById: selectTodoById } =
  todosAdapter.getSelectors((state) => state.todos);

export const selectTodoIds = createSelector(
  // First, pass one or more "input selector" functions:
  selectTodos,
  // Then, an "output selector" that receives all the input results as arguments
  // and returns a final result value
  (todos) => todos.map((todo) => todo.id)
);

export const selectFilteredTodos = createSelector(
  // First input selector: all todos
  selectTodos,
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
