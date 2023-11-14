import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { apiSlice } from './api/apiSlice';

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(apiSlice.middleware),
    preloadedState,
  });

  // https://redux.js.org/usage/configuring-your-store#hot-reloading
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}

/** 
// Store setup with logger middleware and monitorReducer
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { apiSlice } from './api/apiSlice';

import loggerMiddleware from '../middleware/logger';
import monitorReducerEnhancer from '../enhancers/monitorReducer';

export default function configureAppStore(preloadedState) {
  let middlewares = [apiSlice.middleware];
  if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, loggerMiddleware];
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(...middlewares),
    preloadedState,
    enhancers: [monitorReducerEnhancer],
  });

  // https://redux.js.org/usage/configuring-your-store#hot-reloading
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
 */
