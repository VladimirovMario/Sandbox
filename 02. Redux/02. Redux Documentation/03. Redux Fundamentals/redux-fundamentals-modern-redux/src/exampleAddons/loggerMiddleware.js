export const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', storeAPI.getState());
  return result;
};

/*
https://redux.js.org/tutorials/fundamentals/part-4-store#your-first-custom-middleware
Let's say we want to add some logging to our application. We'd like to see the contents of each action in the console when it's dispatched, and we'd like to see what the state is after the action has been handled by the reducers.
info

These example middleware aren't specifically part of the actual todo app, but you can try adding them to your project to see what happens when you use them.

We can write a small middleware that will log that information to the console for us:

const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', storeAPI.getState())
  return result
}

Whenever an action is dispatched:

    The first part of the handleAction function runs, and we print 'dispatching'
    We pass the action to the next section, which may be another middleware or the real store.dispatch
    Eventually the reducers run and the state is updated, and the next function returns
    We can now call storeAPI.getState() and see what the new state is
    We finish by returning whatever result value came from the next middleware

Any middleware can return any value, and the return value from the first middleware in the pipeline is actually returned when you call store.dispatch(). For example:
*/
