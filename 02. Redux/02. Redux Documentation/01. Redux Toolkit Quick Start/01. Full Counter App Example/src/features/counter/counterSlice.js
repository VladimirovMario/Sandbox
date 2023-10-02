// https://redux-toolkit.js.org/api/createReducer#logging-draft-state-values
import { createSlice, current } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      console.log('before', current(state));
      state.value += 1;
      // return { ...state, value: state.value + 1 };
      console.log('after', current(state));
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 2000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;

/*
Summary

    Create a Redux store with configureStore
        configureStore accepts a reducer function as a named argument
        configureStore automatically sets up the store with good default settings
    Provide the Redux store to the React application components
        Put a React-Redux <Provider> component around your <App />
        Pass the Redux store as <Provider store={store}>
    Create a Redux "slice" reducer with createSlice
        Call createSlice with a string name, an initial state, and named reducer functions
        Reducer functions may "mutate" the state using Immer
        Export the generated slice reducer and action creators
    Use the React-Redux useSelector/useDispatch hooks in React components
        Read data from the store with the useSelector hook
        Get the dispatch function with the useDispatch hook, and dispatch actions as needed
*/
