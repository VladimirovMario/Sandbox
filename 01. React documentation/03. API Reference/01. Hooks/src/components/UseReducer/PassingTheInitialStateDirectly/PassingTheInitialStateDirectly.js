import { useReducer } from 'react';

export default function PassingTheInitialStateDirectly() {
  return (
    <>
      <h2>Example 2 of 2: Passing the initial state directly</h2>
      <App />
    </>
  );
}

function createInitialState(username) {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: `${username}'s task # ${i + 1}`,
    });
  }
  return {
    draft: '',
    todos: initialTodos,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'changed_draft': {
      return {
        draft: action.nextDraft,
        todos: state.todos,
      };
    }
    case 'added_todo': {
      return {
        draft: '',
        todos: [
          {
            id: state.todos.length,
            text: state.draft,
          },
          ...state.todos,
        ],
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

function TodoList({ username }) {
  const [state, dispatch] = useReducer(reducer, createInitialState(username));
  return (
    <>
      <input
        value={state.draft}
        onChange={(e) => {
          dispatch({
            type: 'changed_draft',
            nextDraft: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: 'added_todo' });
        }}
      >
        Add
      </button>
      <ul>
        {state.todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return <TodoList username="Taylor" />;
}
