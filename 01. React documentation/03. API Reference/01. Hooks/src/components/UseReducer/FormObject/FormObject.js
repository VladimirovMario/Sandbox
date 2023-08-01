import { useReducer } from 'react';

export default function FormObject() {
  return (
    <>
      <h2>Example 1 of 3: Form (object)</h2>
      <Form />
    </>
  );
}

function reducer(state, action) {
  // console.log(state, action);
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
    default:
      throw Error('Unknown action: ' + action.type);
  }
}

const initialState = { name: 'Taylor', age: 42 };

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({
      type: 'incremented_age',
    });
  }

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value,
    });
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </form>
  );
}
