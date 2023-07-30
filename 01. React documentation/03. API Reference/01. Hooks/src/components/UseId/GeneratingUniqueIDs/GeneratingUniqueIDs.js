import { useId } from 'react';

export default function GeneratingUniqueIDs() {
  return (
    <>
      <h2>Generating unique IDs for accessibility attributes </h2>
      <App />
    </>
  );
}

function PasswordField() {
  const passwordHintId = useId();

  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Choose password</h2>
      <PasswordField />
    </>
  );
}
