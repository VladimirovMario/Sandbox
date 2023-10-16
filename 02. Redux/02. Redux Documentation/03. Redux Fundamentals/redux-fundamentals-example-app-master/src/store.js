import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import { loggerMiddleware } from './exampleAddons/loggerMiddleware';

const middlewareEnhancer = applyMiddleware(loggerMiddleware);

const store = createStore(rootReducer, middlewareEnhancer);

export default store;

/*
// It might be helpful to take a peek inside a Redux store to see how it works.
// Here's a miniature example of a working Redux store, in about 25 lines of code:
// This small version of a Redux store works well enough that you could use it to
// replace the actual Redux createStore function you've been using in your app so far.
// (Try it and see for yourself!) The actual Redux store implementation is longer and
// a bit more complicated, but most of that is comments, warning messages, and handling some edge cases.
function createStore(reducer, preloadedState) {
  let state = preloadedState;
  const listeners = [];

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  dispatch({ type: '@@redux/INIT' });

  return { dispatch, subscribe, getState };
}
*/
