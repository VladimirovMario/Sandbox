import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';
import { loggerMiddleware } from './exampleAddons/loggerMiddleware';

const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware(loggerMiddleware, thunkMiddleware)
  // other store enhancers if any
);

const store = createStore(rootReducer, composedEnhancer);

export default store;
