import { createContext, useContext, useState } from 'react';

export default function UpdatingDataPassedViaContext() {
  return (
    <>
      <h2>Passing data deeply into the tree</h2>
      <MyApp />
    </>
  );
}

const ThemeContext = createContext(null);

function MyApp() {
  const [theme, setTheme] = useState('dark');

  function handleThemeChange() {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  const contextObject = {
    theme,
    handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={contextObject}>
      <Form />
      <Button>Switch to {theme === 'dark' ? 'light' : 'dark'} theme</Button>
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
  const { theme } = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function Button({ children }) {
  const { theme, handleThemeChange } = useContext(ThemeContext);

  const className = 'button-' + theme;
  return (
    <button onClick={handleThemeChange} className={className}>
      {children}
    </button>
  );
}
