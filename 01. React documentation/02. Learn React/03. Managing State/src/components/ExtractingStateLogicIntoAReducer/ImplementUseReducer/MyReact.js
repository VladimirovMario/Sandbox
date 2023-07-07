import { useState } from 'react';

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}
// reducer:
/*
function messengerReducer(state, action)
function messengerReducer(state, action)
length: 2
name: "messengerReducer"
prototype: Object { … }
<prototype>: function ()
*/

// state:
/*
Object { selectedId: 0, messages: {…} }
Object { selectedId: 0, messages: {…} }
messages: Object { 0: "Hello, Taylor", 1: "Hello, Alice", 2: "Hello, Bob" }
0: "Hello, Taylor"
1: "Hello, Alice"
2: "Hello, Bob"
<prototype>: Object { … }
selectedId: 0
<prototype>: Object { … }
*/
