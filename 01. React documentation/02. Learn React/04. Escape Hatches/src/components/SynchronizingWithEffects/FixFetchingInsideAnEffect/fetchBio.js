export async function fetchBio(person) {
  const delay = (await person) === 'Bob' ? 2000 : 200;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('This is ' + person + '’s bio.');
    }, delay);
  });
}
