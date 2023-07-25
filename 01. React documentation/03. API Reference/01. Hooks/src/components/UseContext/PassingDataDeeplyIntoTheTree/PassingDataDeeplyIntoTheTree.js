import { createContext, useContext } from 'react';

export default function PassingDataDeeplyIntoTheTree() {
  return (
    <>
      <h2>Passing data deeply into the tree</h2>
      <MyApp />
    </>
  );
}

const ThemeContext = createContext(null);

function MyApp() {
  return (
    <ThemeContext.Provider value={'dark'}>
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return <button className={className}>{children}</button>;
}
