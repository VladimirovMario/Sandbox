import todosReducer from './todosSlice';
import { todoToggled, todoDeleted } from './todosSlice';

const initialState = {
  ids: [0, 1, 2, 3, 4],
  entities: {
    0: {
      color: '',
      completed: false,
      text: 'Clean car',
      id: 0,
    },
    1: {
      color: '',
      completed: true,
      text: 'Read book',
      id: 1,
    },
    2: {
      color: '',
      completed: false,
      text: 'Clean car',
      id: 2,
    },
    3: {
      color: '',
      completed: false,
      text: 'Buy bread',
      id: 3,
    },
    4: {
      color: '',
      completed: false,
      text: 'Read book',
      id: 4,
    },
  },
  status: 'idle',
};

describe('todosReducer - Toggle Todo', () => {
  it('Toggles a todo\'s `completed` property to `true` when dispatched with the correct ID', () => {
    const result = todosReducer(initialState, todoToggled(0));
    expect(result.entities[0].completed).toBe(true);
  });

  it('Toggles a todo\'s `completed` property to `false` when dispatched with the correct ID', () => {
    const result = todosReducer(initialState, todoToggled(1));
    expect(result.entities[1].completed).toBe(false);
  });
});

describe('todosReducer - Remove Todo', () => {
  it('Removes a todo from the state', () => {
    const result = todosReducer(initialState, todoDeleted(3));
    expect(result.ids).not.toContain(3);
    expect(result.entities).not.toHaveProperty('3');
  });
});

/*
 PASS  src/features/todos/todosSlice.spec.js
  todosReducer - Toggle Todo
    √ Toggles a todo's `completed` property to `true` when dispatched with the correct ID (4 ms)
    √ Toggles a todo's `completed` property to `false` when dispatched with the correct ID (1 ms)
  todosReducer - Remove Todo
    √ Removes a todo from the state (2 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        4.103 s
*/