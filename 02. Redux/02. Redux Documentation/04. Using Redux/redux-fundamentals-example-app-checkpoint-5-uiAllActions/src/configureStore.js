import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducerEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/loggerMiddleware';
import rootReducer from './reducer';

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
