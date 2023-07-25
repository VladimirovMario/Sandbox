import { createContext, useContext, useState } from 'react';

export default function UpdatingAnObjectViaContext() {
  return (
    <>
      <h2>Example 2 of 5: Updating an object via context</h2>
      <MyApp />
    </>
  );
}

const CurrentUserContext = createContext(null);

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  const currentUserContextSetter = {
    currentUser,
    setCurrentUser,
  };
  return (
    <CurrentUserContext.Provider value={currentUserContextSetter}>
      <Form />
    </CurrentUserContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  );
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  // console.log(currentUser, setCurrentUser);
  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}.</p>;
  }

  function handleUserChange() {
    setCurrentUser({ name: 'Advika' });
  }

  return <Button onClick={handleUserChange}>Log in as Advika</Button>;
}

function Panel({ title, children }) {
  return (
    <section className="panel-light">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
