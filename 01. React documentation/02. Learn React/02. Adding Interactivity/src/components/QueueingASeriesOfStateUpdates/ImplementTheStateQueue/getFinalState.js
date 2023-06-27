export function getFinalState(baseState, queue) {
  let finalState = baseState;

  queue.forEach((update) => {
    let result = 0;

    if (typeof update === 'function') {
      result += update(finalState);
    } else {
      result = update;
    }

    finalState = result;
  });

  return finalState;
}

// The solution from React:
/**
 * export function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let update of queue) {
    if (typeof update === 'function') {
      // Apply the updater function.
      finalState = update(finalState);
    } else {
      // Replace the next state.
      finalState = update;
    }
  }

  return finalState;
}
 */
