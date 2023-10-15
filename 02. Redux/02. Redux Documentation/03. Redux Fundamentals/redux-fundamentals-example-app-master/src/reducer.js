import { combineReducers } from 'redux';

import filtersReducer from './features/filters/filtersSlice';
import todosReducer from './features/todos/todosSlice';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
