import { useReducer } from 'react';

export default function AddingAReducerToAComponent() {
  return (
    <>
      <h2>Adding a reducer to a component</h2>
      <Counter />
    </>
  );
}

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1,
    };
  }
  throw Error(`Unknown ${action.type} type of action.`);
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 39 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: 'incremented_age',
          });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
